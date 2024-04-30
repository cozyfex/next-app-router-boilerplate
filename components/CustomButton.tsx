import { cva } from 'class-variance-authority'

import { ComponentProps, ReactNode } from 'react'

import { cn } from '@utils/css'

export const variants = {
  variant: {
    primary: 'bg-indigo-600 text-white',
    basic: 'bg-slate-50 text-indigo-600',
    inactive: 'bg-gray-100 text-zinc-500',
    success: 'bg-green-500 text-white',
    confirm: 'bg-emerald-50 text-green-500',
    danger: 'bg-red-500 text-white',
    delete: 'bg-rose-50 text-red-500',
    ghost: '',
  },
  size: {
    small: 'font-semibold h-8 px-3 py-1.5 ',
    medium: 'font-bold h-10 px-6',
    large: 'font-bold h-12 px-6',
  },
  hover: {
    default: 'hover:brightness-75 transition-all duration-300',
    none: '',
  },
}

const buttonVariants = cva(
  'text-sm rounded justify-center items-center gap-2 inline-flex leading-tight',
  {
    variants,
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      hover: 'default',
    },
  },
)

type ButtonType = {
  variant?: keyof typeof variants.variant
  size?: keyof typeof variants.size
  hover?: keyof typeof variants.hover
  children: ReactNode
} & ComponentProps<'button'>

const CustomButton = ({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonType) => {
  return (
    <button
      {...rest}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  )
}

export default CustomButton
