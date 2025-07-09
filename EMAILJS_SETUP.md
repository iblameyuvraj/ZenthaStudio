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

## 5. Environment Variables Setup
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Email Template Example
```
Subject: New Contact Form Submission - Zentha Studio

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Service: {{selectedService}}
Message: {{message}}

---
Sent from zentha.in contact form
```

## 7. Troubleshooting Email Delivery Issues

### If emails are not being received:

1. **Check EmailJS Dashboard**
   - Go to EmailJS dashboard → "Activity" tab
   - Check if emails are being sent successfully
   - Look for any error messages

2. **Verify Email Service Configuration**
   - Ensure your email service (Gmail, etc.) is properly connected
   - Check if the service is active in EmailJS

3. **Check Spam/Junk Folder**
   - Emails might be going to spam folder
   - Add your EmailJS email to contacts

4. **Domain Email Server Issues**
   - If using a custom domain email, ensure your hosting provider's email settings are configured correctly
   - Check with your hosting provider about "Local Email Delivery" vs "Remote Email Server" settings
   - Ensure emails are being delivered externally to your email provider (Zoho, Gmail, etc.)

5. **Test with Different Email Service**
   - Try using Gmail instead of custom domain email
   - This helps isolate if the issue is with your hosting provider's email settings

## 8. Common Issues and Solutions

### Issue: "EmailJS is not properly configured"
**Solution:** Check your `.env.local` file and ensure all three environment variables are set correctly.

### Issue: "Network Error"
**Solution:** Check your internet connection and try again.

### Issue: "Invalid template"
**Solution:** Verify your template ID in EmailJS dashboard and ensure the template exists.

### Issue: Emails sent but not received
**Solution:** 
1. Check spam folder
2. Verify email service configuration in EmailJS
3. Contact your hosting provider about email delivery settings

## 9. Testing the Form
1. Fill out the form on your website
2. Check EmailJS dashboard → "Activity" tab
3. Check your email inbox (and spam folder)
4. If still not working, try the troubleshooting steps above

## 10. Alternative: Direct Email Fallback
If EmailJS continues to have issues, you can implement a direct email link as a fallback:
```html
<a href="mailto:hi@zentha.in?subject=Contact from Website&body=Name: [User Name]%0D%0AEmail: [User Email]%0D%0AService: [Selected Service]%0D%0AMessage: [User Message]">Contact us directly</a>
``` 