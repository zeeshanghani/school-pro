"use client"

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bannerVariants = cva(
  "relative w-full py-2 px-4 mb-3 rounded-lg flex items-center justify-between shadow-4xl ",
  {
    variants: {
      type: {
        info: "bg-blue-100 text-blue-800",
        success: "bg-green-100 text-green-800 border border-orange-200 shadow-2xl",
        warning: "bg-orange-200 text-green-800 border border-orange-200 shadow-2xl",
        danger: "bg-red-200 text-green-800 border border-red-300 shadow-2xl",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
)

interface DismissableBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  message: string;
  type?:  "info" | "success" | "warning" | "danger" ;

}

export function InfoBanner({ message, type, className, ...props }: DismissableBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className={cn(bannerVariants({ type }), className)} role="alert" {...props}>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-600 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

