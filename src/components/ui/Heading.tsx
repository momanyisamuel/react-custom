import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl  font-extrabold lg:text-5xl",
      h2: "text-3xl mt-10 font-semibold pb-2 transition-colors first:mt-0",
      h3: "text-2xl mt-8 font-semibold first:mt-0",
      h4: "text-xl mt-8 font-semibold first:mt-0",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({className, variant, ...props}) => {
  return <h1 className={cn(headingVariants({variant,className}))} {...props} />;
};

export { Heading };
