import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { cva, VariantProps } from "class-variance-authority";

const paragraphVariants = cva("", {
    variants: {
      size: {
        default:"leading-7 [&:not(:first-child)]:mt-6",
        large: "text-lg font-semibold text-slate-900 dark:text-slate-50",
        small: "text-sm font-medium leading-none",
        subtle: "text-sm text-slate-500 dark:text-slate-400",
        lead: "text-xl text-slate-700 dark:text-slate-400",
      },
    },
    defaultVariants: {
      size: "default",
    },
  });

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

export default function Paragraph({className, size, ...props}: ParagraphProps) {
  return (
    <p className={cn(paragraphVariants({size}))} {...props} />
  )
}