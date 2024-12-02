import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({title,heading,description}:{title:string,heading:string,description:string}) {
  return (
    <div className="text-center mb-12">
    <SmallTitle title={title} />
  <h2 className="text-3xl font-bold mb-4">{heading}</h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    {description}
  </p>
</div>
  )
}
