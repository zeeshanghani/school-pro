import React from 'react'
import { Badge } from "@/components/ui/badge"

export default function SmallTitle({title}:{title:string}) {
  return (
    <Badge variant="secondary" className="rounded-full px-4 py-1">
    <span className="text-sm font-medium"></span>
    {title}
  </Badge>
  )
}
