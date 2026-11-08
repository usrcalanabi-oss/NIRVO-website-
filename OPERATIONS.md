# NIRVO Website — Operations Setup

## Live routes
- Company homepage: /
- Product catalogue: /products.html
- Marketplace submissions: /marketplace.html
- Contact: /contact.html
- Private operations dashboard: /admin.html

## Submission backend
The site uses Vercel Functions and private Vercel Blob storage. The production BLOB_READ_WRITE_TOKEN is already connected.

Add these variables in Vercel Project → Settings → Environment Variables. Apply to Production and Preview if needed:

| Key | Purpose |
| --- | --- |
| NIRVO_ADMIN_PASSWORD | Strong, unique password for the private dashboard |
| NIRVO_SESSION_SECRET | Long random secret used to sign the admin session cookie |
| RESEND_API_KEY | Optional email delivery through Resend |
| RESEND_FROM_EMAIL | Sender address on a domain verified in Resend |

Never put these values in frontend JavaScript or commit them to GitHub. Do not reuse a password from another account.

## Configure the private dashboard
1. Set NIRVO_ADMIN_PASSWORD to a strong unique password.
2. Set NIRVO_SESSION_SECRET to a randomly generated secret of at least 32 bytes.
3. Redeploy Production.
4. Open /admin.html and sign in.

## Configure email alerts
1. Create a Resend account and verify a domain you control.
2. Create an API key with sending permission.
3. Add RESEND_API_KEY and RESEND_FROM_EMAIL in Vercel.
4. Redeploy. The backend sends an alert to usrcalanabi@gmail.com and a receipt to the submitter when Resend accepts the messages.

Email is optional for data capture: submissions are stored in private Blob storage first. The API response distinguishes storage success from email delivery.

## Order model
The cart creates an order enquiry only. It does not charge a card or confirm inventory, delivery or a binding purchase. NIRVO must review the request and send a confirmed quotation before accepting payment.

## Forms
- Product listing: three JPG/PNG/WEBP photos, max 1.2 MB each.
- Project submission: three JPG/PNG/WEBP photos, max 1.2 MB each.
- Product order enquiry: customer details and cart summary.
- Contact enquiry: name, email, interest and message.

Submissions are private and require admin sign-in to review. Product/project listings are not published automatically.