import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const stackVariants = cva("flex", {
  variants: {
    variant: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    variant: "horizontal",
  },
});

interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  children: React.ReactNode;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(stackVariants({ className, variant }))}>
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
