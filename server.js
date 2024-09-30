import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  const {
    firstName,
    lastName,
    mobile,
    email,
    message,
    persons,
    children,
    property,
    checkin,
    checkout,
  } = req.body;

  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saptechnoeditors@gmail.com", //  email address
      pass: "wvbxxayqrayoifoh", //  Gmail App Password
    },
  });

  // HTML Email to Admin
  const mailOptionsAdmin = {
    from: "saptechnoeditors@gmail.com",
    to: "digiworldnashik@gmail.com", // Admin email address
    subject: "New Enquiry | Zenith Hospitality Service",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
  <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://drive.google.com/uc?export=view&id=1pWnKp6xNMSBw-lrR4kRoIWe5jRUJ_T42" alt="Zenith Hospitality Service" style="max-width: 150px; animation: fadeIn 2s;">
  </div>
  
  <!-- Email Title -->
  <h2 style="color: #333; text-align: center; font-size: 24px;">New Contact Form Submission</h2>
  
  <!-- Information Fields -->
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 1.5s;">
    <p><strong>First Name:</strong> ${firstName}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 1.7s;">
    <p><strong>Last Name:</strong> ${lastName}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 1.9s;">
    <p><strong>Mobile:</strong> ${mobile}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 2.1s;">
    <p><strong>Email:</strong> ${email}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 2.3s;">
    <p><strong>Message:</strong> ${message}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 2.5s;">
    <p><strong>Persons:</strong> ${persons}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 2.7s;">
    <p><strong>Children:</strong> ${children}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 2.9s;">
    <p><strong>Property:</strong> ${property}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 3.1s;">
    <p><strong>Check-In:</strong> ${checkin}</p>
  </div>
  
  <div style="border: 1px solid #e0e0e0; padding: 10px 15px; border-radius: 6px; background-color: #fff; margin-bottom: 15px; animation: slideIn 3.3s;">
    <p><strong>Check-Out:</strong> ${checkout}</p>
  </div>
  
  <!-- Footer Section -->
  <div style="text-align: center; padding: 10px; margin-top: 20px; border-top: 1px solid #e0e0e0;">
    <p style="color: #777; font-size: 14px;">This email was sent from your contact form.</p>
    <p style="color: #aaa; font-size: 12px; margin-top: 10px;">Copyright @Zenith Hospitality Service, all rights reserved</p>
  </div>
</div>

<!-- Animations -->
<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>


    `,
  };

  // HTML Email to User

  const mailOptionsUser = {
    from: "saptechnoeditors@gmail.com",
    to: email,
    subject: "Thank you for contacting us!",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; background-color: #fafafa;">
      <!-- Logo Section -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://drive.google.com/uc?export=view&id=1pWnKp6xNMSBw-lrR4kRoIWe5jRUJ_T42" alt="Zenith Hospitality Service" style="max-width: 150px; animation: fadeIn 2s;">
  </div>
      <h2 style="color: #4CAF50; text-align: center;">Thank You for Contacting Us!</h2>
      <p style="font-size: 16px;">Dear ${firstName},</p>
      <p style="font-size: 16px;">Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
      <p style="font-size: 16px;"><strong>Here is the information you submitted:</strong></p>
      <ul style="font-size: 16px; list-style-type: none; padding: 0;">
        <li><strong>First Name:</strong> ${firstName}</li>
        <li><strong>Last Name:</strong> ${lastName}</li>
        <li><strong>Mobile:</strong> ${mobile}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
        <li><strong>Number of Persons:</strong> ${persons}</li>
        <li><strong>Number of Children:</strong> ${children}</li>
        <li><strong>Property Interested In:</strong> ${property}</li>
        <li><strong>Check-In Date:</strong> ${checkin}</li>
        <li><strong>Check-Out Date:</strong> ${checkout}</li>
      </ul>
      <p style="font-size: 16px;">We appreciate your interest and will respond promptly to your inquiry.</p>
      <p style="font-size: 16px;">Best regards,<br><strong>Zenith Hospitality Services</strong></p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
      <footer style="font-size: 14px; text-align: center; color: #888;">
        <p>Zenith Hospitaliyy Services, Mumbai, India</p>
        <p>Phone: +91 90040 95581 /+91 91468 55021</p>
        <a href="https://www.zenithhospitalityservices.com/">www.zenithhospitalityservices.com</a>
        <p style="color: #4CAF50;">Follow us on: <br>
          <a href="#" style="color: #4CAF50; text-decoration: none;">Facebook</a> | 
          <a href="#" style="color: #4CAF50; text-decoration: none;">Instagram</a>
        </p>
      </footer>
    </div>
  `,
  };

  try {
    // Send emails
    await transporter.sendMail(mailOptionsAdmin);
    console.log("Admin email sent successfully!");

    await transporter.sendMail(mailOptionsUser);
    console.log("User email sent successfully!");

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails: ", error);
    res
      .status(500)
      .json({ message: "Failed to send emails.", error: error.toString() });
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
