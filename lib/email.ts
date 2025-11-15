import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create reusable transporter using GoDaddy SMTP
const createTransporter = () => {
  const host = process.env.GODADDY_SMTP_HOST || 'smtpout.secureserver.net';
  const port = parseInt(process.env.GODADDY_SMTP_PORT || '465');
  const user = process.env.GODADDY_SMTP_USER;
  const pass = process.env.GODADDY_SMTP_PASSWORD;

  // Validate required configuration
  if (!user || !pass) {
    throw new Error('GoDaddy SMTP credentials not configured. Missing GODADDY_SMTP_USER or GODADDY_SMTP_PASSWORD environment variables.');
  }

  const config = {
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  };

  // Log configuration (without exposing credentials)
  console.log(`[Email] Creating transporter: host=${host}, port=${port}, user=${user ? `${user.substring(0, 3)}***` : 'missing'}`);

  return nodemailer.createTransport(config);
};

export async function sendEmail(options: EmailOptions): Promise<void> {
  // Validate environment variables
  if (!process.env.GODADDY_SMTP_USER || !process.env.GODADDY_SMTP_PASSWORD) {
    const missingVars = [];
    if (!process.env.GODADDY_SMTP_USER) missingVars.push('GODADDY_SMTP_USER');
    if (!process.env.GODADDY_SMTP_PASSWORD) missingVars.push('GODADDY_SMTP_PASSWORD');
    
    const errorMsg = `GoDaddy SMTP credentials not configured. Missing: ${missingVars.join(', ')}`;
    console.error(`[Email] Configuration error: ${errorMsg}`);
    throw new Error(errorMsg);
  }

  // Validate email options
  if (!options.to || !options.subject || !options.html) {
    throw new Error('Invalid email options: to, subject, and html are required');
  }

  let transporter;
  try {
    transporter = createTransporter();
  } catch (configError) {
    console.error('[Email] Failed to create transporter:', configError);
    throw configError;
  }

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('[Email] SMTP connection verified successfully');
  } catch (verifyError: any) {
    console.error('[Email] SMTP verification failed:', {
      message: verifyError.message,
      code: verifyError.code,
      command: verifyError.command,
    });
    throw new Error(`SMTP connection failed: ${verifyError.message}`);
  }

  try {
    const mailOptions = {
      from: `"RHI Holding Privé" <${process.env.GODADDY_SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
    };

    console.log(`[Email] Sending email to: ${options.to}, subject: ${options.subject}`);
    
    const result = await transporter.sendMail(mailOptions);
    
    console.log(`[Email] Email sent successfully. MessageId: ${result.messageId}`);
  } catch (error: any) {
    console.error('[Email] Error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
    });
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      throw new Error('SMTP authentication failed. Please check your email credentials.');
    } else if (error.code === 'ECONNECTION') {
      throw new Error('Failed to connect to SMTP server. Please check your SMTP host and port.');
    } else if (error.code === 'ETIMEDOUT') {
      throw new Error('SMTP connection timed out. Please check your network connection.');
    } else {
      throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
    }
  }
}

export function createContactNotificationEmail(
  name: string,
  email: string,
  company: string | null,
  services: string[],
  message: string
): string {
  const servicesList = services.length > 0 
    ? services.map(s => `<li>${s}</li>`).join('')
    : '<li>None selected</li>';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #142550; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f5f5f5; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #142550; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Services Interested In:</div>
              <div class="value">
                <ul>${servicesList}</ul>
              </div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function createAutoReplyEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #142550; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f5f5f5; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting RHI Holding Privé</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to RHI Holding Privé. We have received your message and will get back to you as soon as possible.</p>
            <p>Our team typically responds within 24-48 hours during business days.</p>
            <p>Best regards,<br>The RHI Holding Privé Team</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

