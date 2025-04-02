import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface EmailData {
  email: string;
  name?: string;
  company?: string;
  message?: string;
}

// Helper function to get admin emails from environment variable
function getAdminEmails(): string[] {
  const adminEmails = process.env.ADMIN_EMAIL || "";
  return adminEmails.split(",").map((email) => email.trim());
}

export async function sendWaitlistEmail(data: EmailData) {
  const msg = {
    to: getAdminEmails(), // Array of admin emails
    from: process.env.SENDGRID_FROM_EMAIL || "", // Verified sender email
    subject: "New Waitlist Signup",
    text: `New waitlist signup from ${data.name || "Anonymous"} (${
      data.email
    })`,
    html: `
      <h2>New Waitlist Signup</h2>
      <p><strong>Name:</strong> ${data.name || "Anonymous"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    `,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error("Error sending waitlist email:", error);
    return false;
  }
}

export async function sendDemoRequestEmail(data: EmailData) {
  const msg = {
    to: getAdminEmails(), // Array of admin emails
    from: process.env.SENDGRID_FROM_EMAIL || "", // Verified sender email
    subject: "New Demo Request",
    text: `New demo request from ${data.name || "Anonymous"} (${data.email})`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${data.name || "Anonymous"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
    `,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error("Error sending demo request email:", error);
    return false;
  }
}
