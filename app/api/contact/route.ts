import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || '').toString().trim();
    const email = (body?.email || '').toString().trim();
    const message = (body?.message || '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toAddress = process.env.CONTACT_TO_EMAIL || 'sarah@nukaizen.com.au';

    const subject = `New contact form submission from ${name}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 12px;">New Contact Form Submission</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
        <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      reply_to: email,
      subject,
      html,
    } as any);

    if (error) {
      return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: (data as any)?.id ?? null });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


