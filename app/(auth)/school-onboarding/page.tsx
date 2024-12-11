import SchoolOnboardingForm from '@/components/dashboard/forms/school/school-onboarding-form'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2>Scho0l Onboarding Page</h2>
      <div className = " max-w-5xl mx-auto p-16 w-full my-5">
      <Card className='border-t-4 border-blue-600 shdow'>
        <CardContent className='p-6'>
        <SchoolOnboardingForm/>
        </CardContent>
      </Card>      
    </div>
    </div>
  )
}
