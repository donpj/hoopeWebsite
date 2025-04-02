import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// Update interface to include all possible fields from forms
interface EmailData {
  email: string;
  name?: string;
  company?: string; // Note: waitlist sends companyName as company here
  message?: string; // Only from demo request
  profession?: string; // From waitlist (individual)
  companySize?: string; // From waitlist (business)
  type?: "individual" | "business"; // From waitlist
  role?: string; // Add role from demo request
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
    subject: `New Waitlist Signup (${
      data.type === "business" ? "Business" : "Individual"
    })`, // Add type to subject
    text: `New waitlist signup from ${data.name || "Anonymous"} (${
      data.email
    })`,
    html: `
      <h2>New Waitlist Signup (${
        data.type === "business" ? "Business" : "Individual"
      })</h2>
      <p><strong>Name:</strong> ${data.name || "Anonymous"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${
        data.company
          ? `<p><strong>Company Name:</strong> ${data.company}</p>`
          : ""
      } 
      ${
        data.profession
          ? `<p><strong>Profession:</strong> ${data.profession}</p>`
          : ""
      }
      ${
        data.companySize
          ? `<p><strong>Company Size:</strong> ${data.companySize}</p>`
          : ""
      }
      <hr>
      <p><small>Form Type: ${data.type || "Unknown"}</small></p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Waitlist email sent successfully.");
    return true;
  } catch (error: any) {
    console.error("!!! Error sending waitlist email:");
    console.error(error);
    if (error.response) {
      console.error("SendGrid Response Body:", error.response.body);
      console.error("SendGrid Response Headers:", error.response.headers);
    }
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
      ${data.role ? `<p><strong>Role:</strong> ${data.role}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Demo request email sent successfully.");
    return true;
  } catch (error: any) {
    console.error("!!! Error sending demo request email:");
    console.error(error);
    if (error.response) {
      console.error("SendGrid Response Body:", error.response.body);
      console.error("SendGrid Response Headers:", error.response.headers);
    }
    return false;
  }
}
