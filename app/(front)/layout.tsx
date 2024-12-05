import SiteFooter from '@/components/ftrontend/site-footer'
import SiteHeader from '@/components/site-header'
// import React from 'react'
import react, {ReactNode} from 'react'

export default function FrontLayout({children}:{children:ReactNode}) {
  return (
      <div>
        <SiteHeader />
        {children}
        <SiteFooter />
        </div>
  )
}
