import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-electric text-white rounded-full hover:bg-electric-dark hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(0,102,255,0.3)]",
        secondary:
          "bg-transparent border border-current rounded-none hover:bg-neutral-950 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950",
        ghost:
          "bg-transparent link-underline text-current hover:text-electric",
        dark:
          "bg-neutral-950 text-white rounded-none hover:-translate-y-[1px] hover:shadow-lg",
      },
      size: {
        default: "h-11 px-7 text-sm tracking-wide",
        sm: "h-9 px-5 text-xs tracking-wider uppercase",
        lg: "h-14 px-10 text-base tracking-wide",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
