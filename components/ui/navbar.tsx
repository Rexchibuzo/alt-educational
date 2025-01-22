"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import Link from "next/link";
import Stack from "./stack";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { AlignJustify } from "lucide-react";

export const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about_us",
  },
  {
    title: "Our Services",
    path: "/our_services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact_us",
  },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <AlignJustify />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <Stack variant="vertical" className="divide-y">
          {links.map((link) => (
            <Link
              className="transition-all duration-300 hover:font-semibold hover:text-primary hover:scale-105 ease-in-out py-4"
              key={link.title}
              href={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </SheetContent>
    </Sheet>
  );
}

function Navbar() {
  return (
    <nav className="w-full p-4 lg:p-6 flex justify-between items-center shadow-md border-b dark:border-b-primary">
      <Link href="/" className="h-14 relative object-center md:w-56 w-36">
        <Image
          src={logo}
          alt="Alt Education Limited Logo"
          objectFit="contain"
          sizes="(max-width: 144px)"
          className="dark:hidden"
          fill
          priority
        />
        <Image
          src={logoDark}
          alt="Alt Education Limited Logo"
          objectFit="contain"
          sizes="(max-width: 144px)"
          className="dark:block hidden dark:shadow-md"
          fill
          priority
        />
      </Link>

      <Stack className="gap-4 hidden md:flex">
        {links.map((link) => (
          <Link
            className="transition-all duration-300 hover:font-semibold hover:text-primary hover:scale-105 ease-in-out"
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
