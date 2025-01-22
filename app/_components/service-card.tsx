import { buttonVariants } from "@/components/ui/button";
import Stack from "@/components/ui/stack";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface ServiceCardsProps {
  image: StaticImageData;
  title: string;
  path: string;
}

function ServiceCard({ image, path, title }: Readonly<ServiceCardsProps>) {
  return (
    <Stack variant="vertical" className="shadow-md bg-card border rounded-lg">
      <div className="w-full relative h-40 rounded-t-lg object-center">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          className="rounded-t-lg"
          fill
          priority
        />
      </div>
      <div className="py-6 px-4 flex items-center justify-center">
        <Link
          href={`/our_services#${path}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out"
          )}
        >
          {title}
        </Link>
      </div>
    </Stack>
  );
}

export default ServiceCard;
