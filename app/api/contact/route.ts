import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase';
import { sendEmail, createContactNotificationEmail, createAutoReplyEmail } from '@/lib/email';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  company: z.string().max(100).optional().nullable(),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).default([]),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

// Rate limiting (simple in-memory store - consider Redis for production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, company, email, services, message } = validationResult.data;

    // Check if Supabase is configured
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json(
        { error: 'Database not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    // Check if email service is configured
    const emailConfigured = !!(process.env.GODADDY_SMTP_USER && process.env.GODADDY_SMTP_PASSWORD);
    if (!emailConfigured) {
      console.warn('[Contact API] Email service not configured. Missing GODADDY_SMTP_USER or GODADDY_SMTP_PASSWORD environment variables.');
    }

    // Get Supabase client with service role
    const supabase = createServerClient();

    // Insert into database
    const { data, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        company: company || null,
        email,
        services: services || [],
        message,
        status: 'new',
      })
      .select()
      .single();

    if (dbError) {
      console.error('[Contact API] Database error:', {
        message: dbError.message,
        code: dbError.code,
        details: dbError.details,
        hint: dbError.hint,
      });
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    // Track email sending status
    const emailStatus = {
      adminNotification: { sent: false, error: null as string | null },
      autoReply: { sent: false, error: null as string | null },
    };

    // Send email notification to admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      if (!emailConfigured) {
        console.warn('[Contact API] Skipping admin notification email - email service not configured');
        emailStatus.adminNotification.error = 'Email service not configured';
      } else {
        try {
          console.log(`[Contact API] Attempting to send admin notification to: ${adminEmail}`);
          await sendEmail({
            to: adminEmail,
            subject: `New Contact Form Submission from ${name}`,
            html: createContactNotificationEmail(name, email, company || null, services, message),
          });
          emailStatus.adminNotification.sent = true;
          console.log('[Contact API] Admin notification email sent successfully');
        } catch (emailError: any) {
          const errorMessage = emailError?.message || 'Unknown error';
          console.error('[Contact API] Failed to send admin notification:', {
            message: errorMessage,
            error: emailError,
            stack: emailError?.stack,
          });
          emailStatus.adminNotification.error = errorMessage;
          // Don't fail the request if email fails
        }
      }
    } else {
      console.warn('[Contact API] ADMIN_EMAIL not configured. Skipping admin notification.');
      emailStatus.adminNotification.error = 'ADMIN_EMAIL not configured';
    }

    // Send auto-reply to user
    if (!emailConfigured) {
      console.warn('[Contact API] Skipping auto-reply email - email service not configured');
      emailStatus.autoReply.error = 'Email service not configured';
    } else {
      try {
        console.log(`[Contact API] Attempting to send auto-reply to: ${email}`);
        await sendEmail({
          to: email,
          subject: 'Thank You for Contacting RHI Holding Privé',
          html: createAutoReplyEmail(name),
        });
        emailStatus.autoReply.sent = true;
        console.log('[Contact API] Auto-reply email sent successfully');
      } catch (emailError: any) {
        const errorMessage = emailError?.message || 'Unknown error';
        console.error('[Contact API] Failed to send auto-reply:', {
          message: errorMessage,
          error: emailError,
          stack: emailError?.stack,
        });
        emailStatus.autoReply.error = errorMessage;
        // Don't fail the request if auto-reply fails
      }
    }

    // Prepare response with email status for debugging
    const response: any = {
      success: true,
      message: 'Your message has been sent successfully',
      id: data.id,
    };

    // Include email status in response (for debugging)
    if (!emailStatus.adminNotification.sent || !emailStatus.autoReply.sent) {
      response.emailStatus = emailStatus;
    }

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

