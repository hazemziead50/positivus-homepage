import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
 
  "inline-flex items-center justify-center whitespace-nowrap text-base font-normal ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        
        outline:
          "border border-positivus-dark text-positivus-dark bg-transparent hover:bg-positivus-dark hover:text-white rounded-[14px]",
        dark:
          "bg-positivus-dark text-white hover:bg-positivus-dark/90 rounded-[14px]",
        green:
          "bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 rounded-[14px]",
    
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-[14px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-[14px]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-7 py-4 text-base",
        sm: "h-auto px-5 py-2.5 text-sm",
        lg: "h-auto px-9 py-5 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "outline",
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
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={asChild ? undefined : type} 
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }