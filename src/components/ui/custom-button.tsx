
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        base1: "bg-hotel-light-beige text-hotel-darkest-green hover:bg-hotel-dark-green hover:text-hotel-off-white",
        base2: "bg-hotel-dark-green text-hotel-off-white hover:bg-hotel-darker-green hover:text-hotel-off-white",
        small: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-green hover:border-hotel-dark-green hover:text-hotel-off-white",
        largeIcon: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-green hover:border-hotel-dark-green hover:text-hotel-off-white flex items-center gap-2",
        smallIcon: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-green hover:border-hotel-dark-green hover:text-hotel-off-white flex items-center gap-1",
        menu: "bg-hotel-dark-green text-hotel-off-white hover:bg-hotel-darker-green p-2 rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "base1",
      size: "default",
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button 
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
