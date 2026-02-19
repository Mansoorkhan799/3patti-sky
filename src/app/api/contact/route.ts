import { NextResponse } from 'next/server';

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Add email sending (e.g., Nodemailer, Resend, SendGrid)
    // For now, log the submission - you can connect to your email service here
    console.log('Contact form submission:', { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
