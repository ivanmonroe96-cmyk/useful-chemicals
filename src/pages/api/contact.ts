export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const contactEmail = import.meta.env.CONTACT_EMAIL || 'info@useful-chemicals.com';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, product, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await resend.emails.send({
      from: 'UE Chemicals <onboarding@resend.dev>',
      to: contactEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Product:</strong> ${escapeHtml(product || 'Not specified')}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
      replyTo: email,
    });

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
