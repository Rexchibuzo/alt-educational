import { z } from "zod";
import { ContactUsFormSchema } from "./schemas";

export type ContactUsFormRequest = z.infer<typeof ContactUsFormSchema>;
