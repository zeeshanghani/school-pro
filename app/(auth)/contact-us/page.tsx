import ContactUs from '@/components/frontend/contact-us'
import SectionHeader from '@/components/ftrontend/section-header'
import Logo from '@/components/logo'
import React from 'react'

export default function page() {
  return (
    <div className="p-10">
      <div className='py-6'>
        <div className="flex items-center justify-center pb-6">
          <Logo />
        </div>
       <SectionHeader
          title=""
          heading="Powerful Features for Your Success"
          description="Discover our comprehensive suite of tools designed to elevate your online presence and streamline your digital operations."
        />
    </div>
      <ContactUs />
    </div>
  )
}
