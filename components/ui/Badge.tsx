import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary text-white hover:bg-brand-primary/80",
        secondary:
          "border-transparent bg-brand-neutral-dark/10 text-brand-neutral-dark dark:bg-brand-neutral-light/10 dark:text-brand-neutral-light hover:bg-brand-neutral-dark/20 dark:hover:bg-brand-neutral-light/20",
        destructive:
          "border-transparent bg-brand-accent-red text-brand-neutral-dark hover:bg-brand-accent-red/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
