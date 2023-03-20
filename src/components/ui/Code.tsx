import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { cva, VariantProps } from "class-variance-authority";

const styles = cva(
  "relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400"
);

interface Props
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof styles> {}

export default function Code({ className, ...props }: Props) {
  return (
    <code className={cn(styles({className}))} {...props}/>
  );
}
