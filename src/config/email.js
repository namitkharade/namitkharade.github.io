// EmailJS Configuration
// Environment variables are loaded from .env file
// For production, set these in your hosting platform's environment variables

export const emailConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Instructions:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Set up an email service (Gmail, Outlook, etc.)
// 3. Create an email template 
// 4. Copy .env.example to .env and add your credentials
// 5. For production, set environment variables in your hosting platform
// 6. Never commit .env file to git (it's in .gitignore)

export default emailConfig;
