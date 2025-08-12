import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-2 bg-transparent text-[hsl(221,83%,56%)] border-[hsl(221,83%,56%)] hover:border-[hsl(221,83%,56%)/0.8] hover:bg-[hsl(221,83%,56%)/0.05]",
        destructive:
          "bg-[hsl(0,84%,60%)] text-[hsl(0,0%,98%)] hover:bg-[hsl(0,84%,60%)/0.9]",
        outline:
          "border-2 bg-transparent text-[hsl(221,83%,56%)] border-[hsl(221,83%,56%)] hover:border-[hsl(221,83%,56%)/0.8] hover:bg-[hsl(221,83%,56%)/0.05]",
        secondary:
          "bg-[hsl(216,12%,84%)] text-[hsl(220,13%,20%)] hover:bg-[hsl(216,12%,84%)/0.8]",
        ghost: "hover:bg-[hsl(217,91%,60%)] hover:text-[hsl(0,0%,100%)]",
        link: "text-[hsl(221,83%,56%)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="transition-transform duration-100">{children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
