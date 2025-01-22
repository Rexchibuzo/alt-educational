"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactUsFormRequest } from "@/lib/types";
import { ContactUsFormSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Stack from "@/components/ui/stack";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { startTransition, useActionState, useEffect } from "react";
import { sendEmail } from "@/actions/contact-us.action";
import { toast } from "sonner";

function ContactUsForm() {
  const [state, dispatch, isPending] = useActionState(sendEmail, null);

  const form = useForm<ContactUsFormRequest>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(() => {
      const formData = new FormData();

      formData.set("email", form.getValues()["email"]);
      formData.set("message", form.getValues()["message"]);
      formData.set("name", form.getValues()["name"]);
      formData.set("subject", form.getValues()["subject"]);

      dispatch(formData);
    });
  });

  useEffect(() => {
    if (!state) return;

    if (state.status) {
      toast.success(state.message, {
        position: "top-right",
      });
      form.reset();
    } else {
      toast.error(state.message, {
        position: "top-right",
      });
    }
  }, [form, state]);

  return (
    <Form {...form}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* <form autoComplete="off" onSubmit={handleSubmit}> */}
        <Stack variant="vertical" className="gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="j.Doe@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-primary-foreground"
            disabled={isPending}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Form>
  );
}

export default ContactUsForm;
