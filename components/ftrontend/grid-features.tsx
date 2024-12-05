import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "./section-header"
import Image from "next/image"

const features = [
        {
            title: "Student Information System",
            description: "Manage student information, enrollments, and reports with ease.",
            image:"/dashboard.jpg",
        },
        {
            title: "Academic Excellence Suite",
            description: "Streamline curriculum planning, examinations, grading, and report card generation in one unified system.",
            image:"/dashboard.jpg",

        },
        {
            title: "Communication Hub",
            description: "Integrated messaging system with multi-channel notifications for seamless school-wide communication.",
            image:"/dashboard.jpg",
        },
        {
            title: "Financial Management",
            description: "Complete fee management system with online payments, invoicing, and comprehensive financial reporting.",
            image:"/dashboard.jpg",
        },
        {
            title: "Staff and HR Management",
            description: "Efficiently manage staff and human resources with a user-friendly interface.",
            image:"/dashboard.jpg",
        },
        {
            title: "Transport and Safety Control",
            description: "Ensure student safety and optimize transportation operations with our advanced transport management system.",
            image:"/dashboard.jpg",
        },
        {
            title: "Resource Management",
            description: "Digital library system, inventory tracking, and facility scheduling in one integrated platform.",
            image:"/dashboard.jpg",
        },   
    ]
export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <SectionHeader 
          title="Features" 
          heading="All-in-one School Management Platform" 
          description="Streamline school operations with a comprehensive suite of features for efficient management of students, teachers, classes, and more." />
          
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">
                {features[0].title}
              </CardTitle>
              <p className="text-muted-foreground">
                {features[0].description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative bg-muted rounded-lg p-2">
                <Image
                  src={features[0].image}
                  width={600}
                  height={600} 
                  alt={features[0].title}
                  className="h-full w-full object-cover"
                />
                </div>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">
                {features[1].title}
              </CardTitle>
              <p className="text-muted-foreground">
                {features[1].description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative bg-muted rounded-lg p-2">
                <Image
                  src={features[0].image}
                  width={600}
                  height={600} 
                  alt={features[0].title}
                  className="rounded w-full"
                />
                </div>
            </CardContent>
          </Card>
          
        </div>
        </div>
      
    </section>
  )
}

