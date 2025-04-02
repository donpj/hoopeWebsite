// src/app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { sendWaitlistEmail } from "@/lib/sendgrid";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client

console.log("Waitlist Route Loaded.");
console.log("Supabase URL Loaded:", !!process.env.NEXT_PUBLIC_SUPABASE_URL); // Log if URL is present
console.log(
  "Supabase Key Loaded:",
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
); // Log if Key is present

interface WaitlistData {
  email: string;
  name?: string;
  company?: string;
}

export async function POST(request: Request) {
  console.log("--- Waitlist POST request received ---");
  try {
    console.log("Parsing request data...");
    const data = (await request.json()) as WaitlistData;
    console.log("Request data parsed:", data);

    // Validate required fields
    if (!data.email) {
      console.log("Validation failed: Email is required.");
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }
    console.log("Validation passed.");

    // Insert data into Supabase
    console.log("Attempting Supabase insert...");
    const { error: dbError } = await supabase.from("waitlist_signups").insert([
      {
        email: data.email,
        name: data.name,
        company: data.company,
      },
    ]);
    console.log("Supabase insert attempt finished.");
    if (dbError) {
      console.error("Supabase INSERT Error:", dbError);
      // Decide if you want to stop the process if DB insert fails
      // For now, we'll log the error but continue to send the email
      // throw new Error("Failed to save to database");
    } else {
      console.log("Supabase insert successful.");
    }

    // Send email notification using SendGrid
    console.log("Attempting to send email...");
    const emailSent = await sendWaitlistEmail(data);
    console.log("Email send attempt finished. Result:", emailSent);

    if (!emailSent) {
      // Consider how to handle email failure if DB insert succeeded
      throw new Error("Failed to send email notification");
    }

    // Log the signup
    console.log("Waitlist signup (DB & Email) processing complete:", data);

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch (error) {
    console.error("!!! Critical Error processing waitlist signup:", error);
    // Return a more specific error if possible
    const message =
      error instanceof Error
        ? error.message
        : "Failed to process waitlist signup";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
