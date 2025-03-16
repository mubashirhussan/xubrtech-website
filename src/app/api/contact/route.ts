import { NextResponse } from "next/server";
import { Resend } from "resend";
import client from "../../../../client";

// Resend Email Setup
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();
    console.log("Received Data:", { name, email, phone, message });

    // ✅ 1. Save Form Data to Sanity
    const response = await client.create({
      _type: "contactForm",
      name,
      email,
      phone,
      message,
    });
    // console.log("Sanity Response:", response);
    // ✅ 2. Send Email using Resend
    const emailResponse = await resend.emails.send({
      from: "xubrtech@gmail.com", // Must be a verified domain
      to: email, // Recipient Email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted and email sent successfully!",
        response,
        emailResponse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to submit form or send email" },
      { status: 500 }
    );
  }
}
