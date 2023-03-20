import React,{HTMLAttributes} from 'react'
import cn from "classnames"
import { cva, VariantProps } from 'class-variance-authority'

const listVariants = cva('my-6 ml-6 [&>li]:mt-2',{variants:{
  type:{
    ul : "list-disc ",
    ol: "list-decimal"
  }
}})


interface Props extends HTMLAttributes<HTMLUListElement>, VariantProps<typeof listVariants> {}

export default function List({className, type, ...props}: Props) {
  return (
    <ul className={cn(listVariants({type,className}))} {...props}/>
  )
}