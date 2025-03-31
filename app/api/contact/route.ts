import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, businessType, message, recipient } = body

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // to send an email to the recipient (neil@syconsulting.co)

    console.log("Form submission received:")
    console.log("Name:", firstName, lastName)
    console.log("Email:", email)
    console.log("Company:", company)
    console.log("Business Type:", businessType)
    console.log("Message:", message)
    console.log("Recipient:", recipient)

    // For demo purposes, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: "Form submission received. We will contact you shortly.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to process your request." }, { status: 500 })
  }
}

