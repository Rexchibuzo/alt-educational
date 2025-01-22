import Jumbotron from "@/components/ui/jumbotron";

import contactUsImg from "@/assets/contact_us.jpg";
import Stack from "@/components/ui/stack";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Phone } from "lucide-react";
import ContactUsForm from "./_components/contact-us-form";
import { Metadata } from "next";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us - Alt Educational Consult Limited",
  description: "Send us a Message. We would love to hear from you!",
  openGraph: {
    type: "website",
    title: "Contact Us - Alt Educational Consult Limited",
    description: "Send us a Message. We would love to hear from you!",
  },
  twitter: {
    title: "Contact Us - Alt Educational Consult Limited",
    description: "Send us a Message. We would love to hear from you!",
  },
};

function ContactUsPage() {
  return (
    <div className="w-full flex flex-col gap-6 justify-center pb-6">
      <Jumbotron
        variant="bgTop"
        title="Contact Us"
        imageUrl={contactUsImg.src}
      />

      <div className="container grid md:grid-cols-[1fr_2fr] gap-6">
        <Stack variant="vertical" className="gap-2">
          <div className="hover:shadow-md min-w-[20%] p-2 border-b">
            <Stack className="items-center gap-8">
              <div className="rounded-full flex items-center justify-center size-11 bg-secondary p-2">
                <Phone className="size-10" />
              </div>
              <p>+2348038614110</p>
            </Stack>
          </div>
          <div className="hover:shadow-md min-w-[20%] p-2 border-b">
            <Stack className="items-center gap-8 relative">
              <div className="rounded-full flex items-center justify-center size-11 bg-secondary p-2">
                <MessageSquare className="size-10" />
              </div>
              <p>info@alteducational.com</p>
              <a
                href="mailto:info@alteducational.com"
                className="absolute inset-0 cursor-pointer"
                aria-label="info@alteducational.com"
              />
            </Stack>
          </div>
          <Stack variant="horizontal" className="gap-2 pt-6 pl-4">
            <Link
              href="https://www.instagram.com/alt.educationalconsult/profilecard/?igsh=MXQzZjExZ2p3cjdtcA=="
              target="_blank"
            >
              <FaInstagramSquare className="size-8" />
            </Link>
            <Link
              href="https://x.com/consultalt?s=21&t=2izlpzyqJ3lVrY118ViSNQ"
              target="_blank"
            >
              <FaXTwitter className="size-8" />
            </Link>
          </Stack>
        </Stack>

        <div className="flex justify-center">
          <Card className="w-full md:w-4/5">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>We would love to hear from you!</CardDescription>
            </CardHeader>

            <CardContent>
              <ContactUsForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
