export const prerender = false;

import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = env.RESEND_API_KEY;
    const contactEmail = env.CONTACT_EMAIL || 'info@useful-chemicals.com';
    const fromEmail = env.FROM_EMAIL || 'UE Chemicals <noreply@useful-chemicals.com>';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Email service is not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await request.json();
    const { name, email, product, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Input length limits
    if (typeof name !== 'string' || name.length > 100) {
      return new Response(JSON.stringify({ error: 'Name must be 100 characters or fewer.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (typeof email !== 'string' || email.length > 254) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (typeof message !== 'string' || message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Message must be 5000 characters or fewer.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: contactEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Product:</strong> ${escapeHtml(product || 'Not specified')}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
        `,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('Resend API error:', res.status, errBody);
      return new Response(JSON.stringify({ error: 'Failed to send message. Please try again later.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
