import { NextResponse } from 'next/server';
import { z } from 'zod';

// Nodemailer would be imported here if it were in package.json
// import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessages = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(errorMessages)[0]?.[0] || 'Invalid input';
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const { name, email, phone, company, message } = parsed.data;

    // --- Nodemailer implementation would go here ---
    // This is a placeholder for the email sending logic.
    // To implement this, you would need to:
    // 1. Add nodemailer to your project: `npm install nodemailer`
    // 2. Configure a transporter with your SMTP credentials (preferably using environment variables).
    //    const transporter = nodemailer.createTransport({
    //      host: process.env.SMTP_HOST,
    //      port: Number(process.env.SMTP_PORT),
    //      secure: true,
    //      auth: {
    //        user: process.env.SMTP_USER,
    //        pass: process.env.SMTP_PASS,
    //      },
    //    });
    // 3. Create the email content and send it.
    //    await transporter.sendMail({
    //      from: `"${name}" <${email}>`,
    //      to: 'apseloninfo@gmail.com',
    //      subject: `New Contact Form Submission from ${company || name}`,
    //      text: message,
    //      html: `<b>New message from:</b><br/>Name: ${name}<br/>Email: ${email}<br/>Phone: ${phone || 'N/A'}<br/>Company: ${company || 'N/A'}<br/><br/><b>Message:</b><br/>${message}`,
    //    });

    console.log('Received contact form submission:', { name, email, phone, company, message });
    
    // Simulating a successful email dispatch
    return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}
