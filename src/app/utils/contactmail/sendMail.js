import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

const femail = process.env.TO;

export default async function sendEmailFunction(props) {
  try {
    const { name, email, description, contact } = props;

    const transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "programecodehub@gmail.com",
       pass:"aeov nfxw scpo vyft",
      },
    });

    const mailOption = {
      from: email,
      to: femail,
      subject: "Mail from faizan rasheed portfolio for inquiry",
      html: `
      <div style="border: 2px solid #02187e; max-width: 600px; margin: auto; border-radius: 25px;">
        <div style="padding: 10px 0; background: #01125e; border-top-left-radius: 20px;border-top-right-radius: 20px;">
            <h4 style="text-align: center; font-size: 25px; color: aliceblue;"> 
            from faizan rasheed portfolio 
            </h4>
        </div>
        <div style="display: flex; justify-content: center; align-items-center flex-direction:column ; padding: 20px 10px">


        <p style="font-size:16px">client name : ${name}</p>
        <br>
        <p style="font-size:16px">client contact : ${contact}</p>
        <br>
        <p style="font-size:16px">description : ${description}</p>
          
        </div>
        <div
            style="padding: 40px; background: #01125e; border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;">
        </div>
    </div>
      `,
    };

    await transpoter.sendMail(mailOption);
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.response?.data?.message });
  }
}
