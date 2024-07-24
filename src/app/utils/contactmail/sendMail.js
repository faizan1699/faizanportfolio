import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.USER;

export default async function sendEmailFunction(props) {
  try {
    const { name, email, description, contact } = props;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "programecodehub@gmail.com",
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "faizanrasheed169@gmail.com",
      subject: "Mail for faizan rasheed portfolio for inquiry",
      html: `
        <div style="max-width: 600px; margin: auto; border: 2px solid #02187e; border-radius: 25px; font-family: Arial, sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td style="padding: 30px 0; background: #01125e; border-top-left-radius: 20px; border-top-right-radius: 20px; text-align: center;">
                <h4 style="font-size: 25px; color: aliceblue; margin: 0;">from faizan rasheed portfolio</h4>
              </td>
            </tr>
            <tr>
              <td style="padding: 50px 20px;">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="font-size: 16px; padding-bottom: 10px;"><span style="font-weight: bold">client email</span> : ${email}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; padding-bottom: 10px;"><span style="font-weight: bold">client name</span> : ${name}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; padding-bottom: 10px;"><span style="font-weight: bold">client contact</span> : ${contact}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px;"><span style="font-weight: bold">description</bold> : ${description}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px; background: #01125e; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"></td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error("Error sending email:", error?.message);
    return NextResponse.json({ message: error?.message });
  }
}
