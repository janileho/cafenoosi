import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured on the server' },
        { status: 500 }
      );
    }
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend (HTML + text, reply-to set to sender)
    const { data, error } = await resend.emails.send({
      from: 'Cafe Nöösi <noreply@deepsnowkelkat.com>', // Uses your verified domain
      to: ['lauri.haavikko@gmail.com'],
      replyTo: email,
      subject: 'Yhteydenotto Cafe Nöösi sivustolta',
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="margin: 0 0 12px; color: #A64845;">Uusi yhteydenotto</h2>
          <p style="margin: 0 0 8px;"><strong>Nimi:</strong> ${name}</p>
          <p style="margin: 0 0 12px;"><strong>Sähköposti:</strong> ${email}</p>
          <div style="padding: 12px; background: #fafafa; border-left: 3px solid #A64845; white-space: pre-wrap;">${message
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')}</div>
          <p style="margin-top: 16px; color: #666; font-size: 12px;">Lähetetty Cafe Nöösi -sivuston yhteydenottolomakkeesta.</p>
        </div>
      `,
      text: `Uusi yhteydenotto\n\nNimi: ${name}\nSähköposti: ${email}\n\nViesti:\n${message}\n\nLähetetty Cafe Nöösi -sivuston yhteydenottolomakkeesta.`,
    });

    if (error) {
      const message = (error instanceof Error && error.message)
        ? error.message
        : 'Failed to send email';
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error: unknown) {
    const message = error instanceof Error && error.message
      ? error.message
      : 'Internal server error';
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
