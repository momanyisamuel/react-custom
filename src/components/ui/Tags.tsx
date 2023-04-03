import React, {HTMLAttributes} from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames"

const TagVariants = cva(
    /* button base style */
    "text-xs",
    {
      variants: {
        /* tag colors */
        intent: {
          primary: "bg-green-500 hover:bg-green-600",
          secondary: "bg-red-500 hover:bg-red-600",
          default: "bg-gray-500 hover:bg-gray-600",
        },
  
        /* tag roundness */
        roundness: {
          square: "rounded-none",
          round: "rounded",
          pill: "rounded-full",
        },
      },
  
      // defaults
      defaultVariants: {
        intent: "default",
        roundness: "round",
      },
    }
  );

interface TagProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof TagVariants> {}

function StatusTag({className,intent,roundness,...props}: TagProps) {
  return (
    <span className={cn(TagVariants({className,intent,roundness}))} {...props}/>
  )
}

export default StatusTag