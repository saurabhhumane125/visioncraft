import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || "placeholder")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, service } = body

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // In a real application, replace the to: email with your verified domain email
    const data = await resend.emails.send({
      from: "VisionCraft Contact Form <onboarding@resend.dev>", 
      to: process.env.CONTACT_EMAIL || "visioncraftstudio22@gmail.com",
      subject: `New Lead: ${service || "General Inquiry"} from ${name}`,
      html: `
        <h2>New Contact Request from VisionCraft Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service of Interest:</strong> ${service || "Not specified"}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
