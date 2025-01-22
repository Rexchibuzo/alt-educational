"use server";

import { z, ZodError } from "zod";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { newsletterSubscriptions } from "@/db/schema";
import { PostgresError } from "postgres";

const formSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(
  prevState: unknown,
  formData: FormData
) {
  try {
    const { email } = formSchema.parse({
      email: formData.get("email"),
    });
    await db.insert(newsletterSubscriptions).values({ email });
    revalidatePath("/");
    return { message: "You have sucessfully subscribed", status: true };
  } catch (error) {
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
