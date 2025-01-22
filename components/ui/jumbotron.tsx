import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const jumbotronVariants = cva(
  "w-full relative min-h-80 lg:min-h-[600px] -mt-2 pt-2 bg-no-repeat bg-cover",
  {
    variants: {
      variant: {
        bgTop: "bg-top",
        bgBottom: "bg-bottom",
        bgCenter: "bg-center",
      },
      textWidth: {
        full: "w-full",
        small: "w-[45ch]",
      },
    },
    defaultVariants: {
      variant: "bgBottom",
      textWidth: "full",
    },
  }
);

interface JumbotronProps extends VariantProps<typeof jumbotronVariants> {
  imageUrl: string;
  title: string;
  subTitle?: string;
}

const Jumbotron = React.forwardRef<HTMLDivElement, JumbotronProps>(
  ({ variant, imageUrl, title, subTitle, textWidth }, ref) => {
    return (
      <div
        className={cn(jumbotronVariants({ variant }))}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="p-4 inset-0 absolute z-10 bg-black/40 flex flex-col items-center justify-center text-center">
          <div
            className={cn(
              "text-slate-50",
              textWidth === "small" ? "lg:w-[80ch]" : "w-full"
            )}
          >
            <h1>{title}</h1>
          </div>
          {subTitle && <p className="italic text-slate-50">{subTitle}</p>}
        </div>
      </div>
    );
  }
);

Jumbotron.displayName = "Jumbotron";

export default Jumbotron;
