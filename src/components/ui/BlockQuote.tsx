import React, {FC,HTMLAttributes} from 'react'
import cn from "classnames"
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva("mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200")

interface BlockQuoteProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof styles> {}

export default function BlockQuote({className, ...props}: BlockQuoteProps) {
  return (
    <p className={cn(styles())} {...props} />
  )
}