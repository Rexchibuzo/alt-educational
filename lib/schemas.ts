import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  subject: z.string().min(3, { message: "Subject is required" }),
  email: z.string().email(),
  message: z.string().min(3, "Message is required"),
});
