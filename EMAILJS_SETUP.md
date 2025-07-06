# EmailJS Setup Instructions

To make the contact form work, you need to set up EmailJS:

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

## 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Add a new service (Gmail, Outlook, etc.)
- Note down your **Service ID**

## 3. Create Email Template
- Go to "Email Templates"
- Create a new template with the following variables:
  - `{{name}}` - User's name
  - `{{email}}` - User's email
  - `{{phone}}` - User's phone number
  - `{{selectedService}}` - Selected service
  - `{{message}}` - User's message
- Note down your **Template ID**

## 4. Get Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

## 5. Update Contact Form
Replace the placeholder values in `app/components/sections/ContactSection.tsx`:

```typescript
// Replace these with your actual EmailJS credentials
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
);
```

## 6. Test the Form
- Fill out the form on your website
- Check your email to confirm it's working

## Email Template Example
```
New Contact Form Submission

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Service: {{selectedService}}
Message: {{message}}
``` 