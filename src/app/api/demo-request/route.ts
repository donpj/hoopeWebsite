// src/app/api/demo-request/route.ts
import { NextResponse } from "next/server";
import { sendDemoRequestEmail } from "@/lib/sendgrid";

interface DemoRequestData {
  email: string;
  name?: string;
  company?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as DemoRequestData;

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Send email notification using SendGrid
    const emailSent = await sendDemoRequestEmail(data);

    if (!emailSent) {
      throw new Error("Failed to send email notification");
    }

    // Log the request
    console.log("Demo request:", data);

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully!",
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process demo request" },
      { status: 500 }
    );
  }
}
