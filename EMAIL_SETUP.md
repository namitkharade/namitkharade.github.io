# Contact Form Email Setup

This guide will help you set up the contact form to send emails to your inbox using EmailJS.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps for your provider
5. **Save your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template:

**Template Name:** `Portfolio Contact Form`

**Subject:** `{{subject}} - Message from {{from_name}}`

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #3b82f6;">New Message from Your Portfolio</h2>
    
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>From:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
    </div>
    
    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3>Message:</h3>
        <p style="line-height: 1.6;">{{message}}</p>
    </div>
    
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
    <p style="color: #6b7280; font-size: 12px;">
        This message was sent via your portfolio contact form at 
        <a href="https://namitkharade.github.io">namitkharade.github.io</a>
    </p>
</div>
```

4. **Save your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find and copy your **Public Key** (e.g., `user_abcdef123`)

### Step 5: Update Configuration
1. Open `src/config/email.js` in your project
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceID: 'service_abc123',     // Your actual Service ID
  templateID: 'template_xyz789',   // Your actual Template ID  
  publicKey: 'user_abcdef123',     // Your actual Public Key
};
```

### Step 6: Test Your Setup
1. Save the file
2. Run `npm run dev`
3. Go to the Contact page
4. Fill out and submit the form
5. Check your email inbox!

## 🔧 Alternative Email Services

### Option 1: FormSubmit (No JavaScript required)
If you prefer a simpler solution, replace the form in `ContactView.vue` with:

```html
<form action="https://formsubmit.co/namit.b.kharade@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="New Portfolio Contact">
    <input type="hidden" name="_next" value="https://namitkharade.github.io/contact">
    <input type="hidden" name="_captcha" value="false">
    
    <!-- Your form fields here -->
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

### Option 2: Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" data-netlify="true">
    <!-- Your form fields -->
</form>
```

## 🔒 Security Notes

- EmailJS is free for up to 100 emails/month
- Your email credentials are secure with EmailJS
- The Public Key can be safely exposed in frontend code
- Consider adding rate limiting for production use

## 📧 Email Template Variables

Available variables in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (namit.b.kharade@gmail.com)

## 🚨 Troubleshooting

**Problem: "EmailJS not configured" error**
- Solution: Make sure you've updated `src/config/email.js` with your real credentials

**Problem: Emails not sending**
- Check your EmailJS service is active
- Verify your email service connection in EmailJS dashboard
- Check browser console for error messages

**Problem: Emails going to spam**
- Add your domain to EmailJS allowed origins
- Use a professional email template
- Consider using your own domain email

## 📱 Testing

Test the contact form with:
1. Valid email addresses
2. Long messages
3. Special characters
4. Empty fields (should show validation)

Your contact form is now ready to receive emails! 🎉
