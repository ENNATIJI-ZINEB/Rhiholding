# Backend Implementation Guide

## Setup Instructions

### 1. Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Go to SQL Editor and run the SQL from `supabase-schema.sql`
3. Copy your project URL and API keys from Settings > API

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# GoDaddy Email Configuration
GODADDY_SMTP_HOST=smtpout.secureserver.net
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=your_email@yourdomain.com
GODADDY_SMTP_PASSWORD=your_email_password

# Admin Email (for contact form notifications)
ADMIN_EMAIL=admin@yourdomain.com

# Optional: Site URL for API calls
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. GoDaddy Email Setup

1. Log in to your GoDaddy account
2. Go to Email & Office Dashboard
3. Find your email account settings
4. Use these SMTP settings:
   - Host: `smtpout.secureserver.net`
   - Port: `465` (SSL) or `587` (TLS)
   - Username: Your full email address
   - Password: Your email account password

### 4. Database Schema

The database schema includes:
- **contact_submissions**: Stores all contact form submissions
- **blog_posts**: Stores blog posts with publishing status

Run the SQL from `supabase-schema.sql` in your Supabase SQL Editor.

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Accepts: `{ name, company?, email, services[], message }`
  - Returns: `{ success, message, id }`
  - Rate limited: 5 requests per 15 minutes per IP

### Blog Posts
- **GET** `/api/blog` - List all published posts
  - Query params: `category`, `limit`, `offset`
- **GET** `/api/blog/[slug]` - Get single post by slug
- **POST** `/api/blog` - Create new post (requires validation)
- **PUT** `/api/blog/[id]` - Update existing post
- **DELETE** `/api/blog/[id]` - Delete post

## Features Implemented

✅ Supabase database integration
✅ Contact form API with email notifications
✅ GoDaddy SMTP email integration
✅ Blog CRUD API
✅ Input validation with Zod
✅ Rate limiting for contact form
✅ Error handling throughout
✅ Auto-reply emails to users
✅ Admin notification emails

## Security Features

- Input validation on all endpoints
- Rate limiting on contact form
- UUID validation for blog post IDs
- SQL injection protection via Supabase
- Environment variable protection
- Row Level Security (RLS) policies

## Testing

1. Test contact form submission
2. Verify emails are sent (check spam folder)
3. Test blog post creation via API
4. Verify blog posts appear on blog page
5. Test blog post updates and deletion

## Troubleshooting

### Email not sending
- Verify GoDaddy SMTP credentials
- Check firewall/network settings
- Verify email account is active
- Check server logs for errors

### Database connection issues
- Verify Supabase credentials
- Check RLS policies
- Ensure tables are created
- Verify service role key is correct

### API errors
- Check environment variables
- Verify Supabase client initialization
- Check server logs
- Ensure validation schemas match data

