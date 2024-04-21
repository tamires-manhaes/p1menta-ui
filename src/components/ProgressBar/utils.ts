import { Variant } from "./types"

interface DictReturn {
  bg: string, 
  bar: string
}

export const getVariantStyles = (variant: Variant): DictReturn => {
  const variants = {
    default: {
      bg: 'bg-neutral-200',
      bar: 'bg-neutral-900'
    },
    brand: {
      bg: 'bg-brand-200',
      bar: 'bg-brand-500'
    },
    danger: {
      bg: 'bg-red-200',
      bar: 'bg-red-500'
    },
    warning: {
      bg: 'bg-yellow-200',
      bar: 'bg-yellow-500'
    },
    success: {
      bg: 'bg-emerald-200',
      bar: 'bg-emerald-500'
    }
  }

  return variants[variant];
}