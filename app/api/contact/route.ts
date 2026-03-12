/**
 * Contact Form API Route
 * 
 * This is a template for handling contact form submissions.
 * To enable email sending, uncomment the email service integration below.
 * 
 * Supported Email Services:
 * - Resend (recommended)
 * - SendGrid
 * - AWS SES
 * - Nodemailer
 * - Mailgun
 */

import { NextRequest, NextResponse } from 'next/server'

// Example with Resend (uncomment if using):
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  // Validate request method
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate input
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message too short' },
        { status: 400 }
      )
    }

    // TODO: Implement email sending
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your.email@example.com',
    //   subject: `New Message from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>From:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });
    //
    // if (response.error) {
    //   return NextResponse.json(
    //     { error: 'Failed to send email' },
    //     { status: 500 }
    //   );
    // }

    // For now, just log to console and return success
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error(`Contact form error: ${message}`)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
