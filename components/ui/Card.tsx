import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden bg-neutral-950 transition-all duration-500",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
