"use client";

import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Stack from "./stack";
import { links } from "./navbar";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Button } from "./button";
import { OUR_SERVICES } from "@/lib/constants";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { subscribeToNewsletter } from "@/actions/newsletter.action";
import { toast } from "sonner";

function EmailSubscriptionForm() {
  const [state, dispatch, isPending] = useActionState(
    subscribeToNewsletter,
    null
  );
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    startTransition(() => {
      if (!emailRef.current) return;

      const formData = new FormData();
      formData.set("email", emailRef.current.value);
      dispatch(formData);
    });
  };

  useEffect(() => {
    if (!state) return;

    if (state.status) {
      toast.success(state.message, {
        position: "top-right",
      });
      emailRef.current!.value = "";
    } else {
      toast.error(state.message, {
        position: "top-right",
      });
    }
  }, [state]);

  return (
    <Stack>
      <Input
        type="email"
        className="flex-1 rounded-none rounded-l-lg text-slate-800"
        placeholder="Email address"
        ref={emailRef}
      />
      <Button
        className="rounded-none rounded-r-lg"
        onClick={handleSubmit}
        disabled={isPending}
      >
        Subscribe
      </Button>
    </Stack>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t flex flex-col">
      <div className="w-full items-center justify-center bg-slate-800 text-slate-100 px-4 py-12">
        <div className="grid md:grid-cols-[repeat(2,auto)] lg:grid-cols-[65ch_auto_auto_auto] gap-6">
          <p className="text-sm w-full">
            At ALT Educational Consult, we specialize in helping students like
            you realize their dreams of studying abroad. With our years of
            experience and a team of dedicated experts, we have successfully
            assisted numerous students in gaining admission into...
            <Link href="/about_us" className="hover:font-bold">
              Read More
            </Link>
          </p>

          <Stack variant="vertical" className="gap-2 w-full">
            <h4 className="text-left">Company</h4>

            <Stack className="gap-1 text-left md:text-right flex-col text-xs">
              {links
                .filter((link) => link.path !== "/our_services")
                .map((link, idx) => (
                  <Stack
                    key={`footer_link-${link.title}`}
                    className={cn(
                      "items-center gap-2",
                      idx !== links.length - 1 && "pr-2"
                    )}
                  >
                    <div className="size-1 rounded-full bg-slate-100" />
                    <Link href={link.path}>{link.title}</Link>
                  </Stack>
                ))}
            </Stack>
          </Stack>

          <Stack variant="vertical" className="gap-2 w-full">
            <h4 className="text-left">Our Services</h4>

            <Stack className="gap-1 text-left text-xs flex-col">
              {OUR_SERVICES.map((service, idx) => (
                <Stack
                  key={`footer_our-service_link_${service.path}`}
                  className={cn(
                    "items-center gap-2",
                    idx !== links.length - 1 && "pr-2"
                  )}
                >
                  <div className="size-1 rounded-full bg-slate-100" />
                  <Link href={`/our_services#${service.path}`}>
                    {service.title}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack variant="vertical">
            <h5 className="font-semibold text-lg">Socials</h5>
            <Stack variant="horizontal" className="gap-2">
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

            <Stack variant="vertical" className="mt-4">
              <h6 className="font-medium">Get Our Latest Updates</h6>
              <Stack variant="vertical" className="gap-2">
                <p className="md:text-xs">
                  Subscribe to get our updates &amp; deals delivered to you
                </p>
                <EmailSubscriptionForm />
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
      <div className="w-full py-6 text-center bg-slate-900 text-slate-100 text-sm italic">
        <p>ALT Educational Consult Limited &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
