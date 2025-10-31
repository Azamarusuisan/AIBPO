import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.');
}

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
export const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@aibpo.onrender.com';
