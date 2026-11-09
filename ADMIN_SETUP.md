# NIRVO Control Room setup

## Private submissions storage
The project is connected to the private Vercel Blob store `nirvo-private-submissions` in Mumbai. The Vercel integration supplies `BLOB_READ_WRITE_TOKEN` to the project. Customer uploads and submission records are stored privately and are not exposed through public file URLs.

## Required admin settings
In Vercel -> Project -> Settings -> Environment Variables, add these for Production (and Preview if needed):

- `NIRVO_ADMIN_PASSWORD`: create a long, unique password for the NIRVO owner.
- `NIRVO_SESSION_SECRET`: generate a random secret with at least 32 bytes (for example, `openssl rand -base64 48`).

Redeploy after saving environment variables. Open `/admin.html` and sign in. Admin sessions use an HttpOnly, Secure, SameSite=Strict cookie and expire after 12 hours.

## Optional email alerts
To receive automatic email notifications at `usrcalanabi@gmail.com`, configure a Resend account with a verified sender:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (a sender address verified in Resend)

Without these optional settings, submissions are still saved to the private dashboard; email notifications are not sent.

## WhatsApp
The admin dashboard provides a WhatsApp click-to-chat action for each submission. Fully automatic WhatsApp messages require an approved WhatsApp Business Platform setup and API credentials; a normal wa.me link cannot send messages automatically.

## Customer submissions
- Product listings and project submissions require three JPG, PNG or WEBP photos (maximum 1.2 MB each; 3.6 MB combined).
- Orders and contact enquiries are saved as private records.
- Order requests are enquiries only. No payment is collected and no order is confirmed until NIRVO verifies stock, price, delivery and payment terms.
- Admin statuses: New, Reviewing, Approved, Closed.

## Customer accounts

The customer sign-in page is available at `/account.html`. Account records are stored as private Vercel Blob objects under `accounts/`; passwords are hashed with Node.js scrypt and sessions use a signed, HttpOnly, Secure cookie. The same `NIRVO_SESSION_SECRET` signs customer and admin sessions.

Customer email verification and self-service password reset are not enabled. Do not advertise either feature until a verified email provider and recovery flow have been configured. Account sign-up and sign-in require the existing `BLOB_READ_WRITE_TOKEN` and `NIRVO_SESSION_SECRET` production variables.
