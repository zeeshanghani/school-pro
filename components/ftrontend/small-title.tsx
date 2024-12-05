import React from 'react'
import { Badge } from '../ui/badge'

export default function SmallTitle({title}:{title:string}) {
  return (
    <Badge variant="secondary" className="h-8 px-4 py-0 gap-1.5 text-sm font-normal bg-white/80 backdrop-blur-sm border-gray-200/50">
            <span className="text-rose-500">◆</span>
            {title}
          </Badge>
  )
}
