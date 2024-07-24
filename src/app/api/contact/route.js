import { NextResponse } from "next/server";
import sendEmailFunction from "@/app/utils/contactmail/sendMail";

export async function POST(req) {
  try {
    const reqbody = await req.json();
    const { name, email, contact, description } = reqbody;

    if (!name) {
      return NextResponse.json({ message: "name required" }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ message: "email required" }, { status: 400 });
    }
    if (!description) {
      return NextResponse.json(
        { message: "description required" },
        { status: 400 }
      );
    }
    if (description.length < 30) {
      return NextResponse.json(
        {
          message: "description must be 30 chracters required",
        },
        { status: 400 }
      );
    }

    sendEmailFunction({
      name,
      email,
      contact,
      description,
    });

    return NextResponse.json(
      {
        message:
          "ThanK for considering me , Your message successfully sent to Faizan Rasheed",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.message });
  }
}
