import * as React from "react"
import { cn } from "@/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    label: string
    fullWidth: boolean
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, label, fullWidth, disabled,...props }, ref) => {
    return (
      <div id="pepper-ui_input">
        <label>{label}</label>
        <input
          type={type}
          className={cn(fullWidth ? `w-[100%]` : `w-fit`,
            "flex h-10 rounded-md border border-input bg-background px-3 py-2 outline-none text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
