// src/app/api/demo-request/route.ts
import { NextResponse } from "next/server";
import { sendDemoRequestEmail } from "@/lib/sendgrid";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client

console.log("Demo Request Route Loaded.");
console.log("Supabase URL Loaded:", !!process.env.NEXT_PUBLIC_SUPABASE_URL); // Log if URL is present
console.log(
  "Supabase Key Loaded:",
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
); // Log if Key is present

interface DemoRequestFormData {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string; // Matches the field name from the demo form log
  message?: string;
  // Include other fields if needed
  role?: string;
}

export async function POST(request: Request) {
  console.log("--- Demo Request POST received ---");
  try {
    console.log("Parsing request data...");
    const data = (await request.json()) as DemoRequestFormData;
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

    // Prepare data for Supabase insertion AND Email
    const fullName =
      [data.firstName, data.lastName].filter(Boolean).join(" ") || undefined;
    const companyValue = data.company; // Use the field name from the interface
    const messageValue = data.message;
    const roleValue = data.role; // Get role from incoming data

    const processedData = {
      email: data.email,
      name: fullName,
      company: companyValue,
      message: messageValue,
      role: roleValue, // Include role
    };

    console.log(
      `Prepared for DB & Email - Email: ${processedData.email}, Name: ${processedData.name}, Company: ${processedData.company}, Message: ${processedData.message}, Role: ${processedData.role}`
    );

    // Insert data into Supabase using correct fields
    console.log("Attempting Supabase insert...");
    const { error: dbError } = await supabase.from("demo_requests").insert([
      {
        email: processedData.email,
        name: processedData.name,
        company: processedData.company,
        message: processedData.message,
      },
    ]);
    console.log("Supabase insert attempt finished.");
    if (dbError) {
      console.error("Supabase INSERT Error:", dbError);
      // Log the error but continue to send the email
      // throw new Error("Failed to save demo request to database");
    } else {
      console.log("Supabase insert successful.");
    }

    // Send email notification using SendGrid with FULL processed data
    console.log("Attempting to send email...");
    const emailSent = await sendDemoRequestEmail(processedData);
    console.log("Email send attempt finished. Result:", emailSent);

    if (!emailSent) {
      // Consider how to handle email failure if DB insert succeeded
      throw new Error("Failed to send email notification");
    }

    // Log the request
    console.log("Demo request (DB & Email) processing complete:", data);

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully!",
    });
  } catch (error) {
    console.error("!!! Critical Error processing demo request:", error);
    // Return a more specific error if possible
    const message =
      error instanceof Error ? error.message : "Failed to process demo request";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
