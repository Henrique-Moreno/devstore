import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Skeloton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('bg-zinc-500/10 animate-pulse rounded-md', className)} {...props}/>
  )
}
