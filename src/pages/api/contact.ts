import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  position: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, email, companyName, position } =
      req.body as ContactFormData;
    const formData: ContactFormData = {
      name,
      phone,
      email,
      companyName,
      position,
    };

    // Отправка электронной почты
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASS_NODEMAILER,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"${formData.name} " <${formData.email}>`,
        to: "dda3127@gmail.com",
        subject: "New message from site visitor",
        text: `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany name: ${formData.companyName}\nPosition: ${formData.position}`,
      });
      // console.log('Message sent: %s', info.messageId);
      res.status(200).end();
    } catch (error) {
      // console.log(error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
