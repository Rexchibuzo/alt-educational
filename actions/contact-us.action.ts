"use server";

import { ContactUsFormSchema } from "@/lib/schemas";
import { PostgresError } from "postgres";
import { ZodError } from "zod";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import "../env.config";

const options: SMTPTransport.Options = {
  host: process.env.MAIL_HOST as string,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER as string,
    pass: process.env.MAIL_PASS as string,
  },
};

export async function sendEmail(prevState: unknown, formData: FormData) {
  try {
    const { email, message, name, subject } = ContactUsFormSchema.parse({
      email: formData.get("email"),
      message: formData.get("message"),
      name: formData.get("name"),
      subject: formData.get("subject"),
    });

    const transporter = nodemailer.createTransport(options);

    await transporter.sendMail({
      from: `"${name}" <info@alteducational.com>`,
      to: "info@alteducational.com",
      replyTo: email,
      subject,
      text: message,
    });

    return { message: "Message sent successfully", status: true };
  } catch (error) {
    console.error("-->Error", error);

    if (error instanceof ZodError) {
      return { message: error.errors[0].message, status: false };
    }

    const postgresError = error as PostgresError;

    if (postgresError.code === "23505") {
      return { message: "Email already exists", status: false };
    }

    return { message: "Something went wrong", status: false };
  }
}
