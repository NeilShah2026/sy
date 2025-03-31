import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, businessType, message } = body

    // Prepare the data for Formspree
    const formData = new URLSearchParams()
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("email", email)
    formData.append("company", company || "")
    formData.append("businessType", businessType || "")
    formData.append("message", message)

    // Send POST request to Formspree
    const res = await fetch("https://formspree.io/f/mkgjvazw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    if (!res.ok) {
      throw new Error("Formspree request failed")
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully through Formspree!",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    )
  }
}
