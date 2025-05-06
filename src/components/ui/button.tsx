
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-accurate-blue-500 text-white hover:bg-accurate-blue-600 shadow-sm hover:shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-accurate-blue-500 text-accurate-blue-500 bg-transparent hover:bg-accurate-blue-50 hover:text-accurate-blue-600",
        secondary:
          "bg-accurate-purple-700 text-white hover:bg-accurate-purple-800 shadow-sm hover:shadow",
        ghost: "hover:bg-accurate-blue-50 hover:text-accurate-blue-500",
        link: "text-accurate-blue-500 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-accurate-blue-500 to-accurate-purple-700 text-white hover:from-accurate-blue-600 hover:to-accurate-purple-800 shadow-sm hover:shadow",
        sunset: "bg-accurate-yellow-400 text-accurate-purple-800 hover:bg-accurate-orange-400 shadow-sm hover:shadow",
        "sunset-gradient": "bg-gradient-to-r from-accurate-yellow-400 to-accurate-orange-400 text-accurate-purple-800 hover:from-accurate-yellow-500 hover:to-accurate-orange-500 shadow-sm hover:shadow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
