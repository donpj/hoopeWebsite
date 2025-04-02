// src/app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { sendWaitlistEmail } from "@/lib/sendgrid";

interface WaitlistData {
  email: string;
  name?: string;
  company?: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as WaitlistData;

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Send email notification using SendGrid
    const emailSent = await sendWaitlistEmail(data);

    if (!emailSent) {
      throw new Error("Failed to send email notification");
    }

    // Log the signup
    console.log("Waitlist signup:", data);

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch (error) {
    console.error("Error processing waitlist signup:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process waitlist signup" },
      { status: 500 }
    );
  }
}
