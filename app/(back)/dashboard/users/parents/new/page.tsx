import { Card, CardContent} from "@/components/ui/card"
import ParentForm from "@/components/dashboard/forms/parents/parent-forms"

export default function StudentAdmissionTabs() {
  return (
    <div className='w-full max-w-5xl mx-auto p-6'>
            <Card className='border-t-4 border-blue-600 shadow'>
                <CardContent>
                    <ParentForm />
                </CardContent>

            </Card>
        </div>
  )
}

