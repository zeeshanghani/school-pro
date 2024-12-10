import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus, Users } from "lucide-react";
import SingleStudentForms from "@/components/dashboard/forms/students/student-forms";
import BulkStudentForms from "@/components/dashboard/forms/students/bulk-student-forms";
import { InfoBanner } from "@/components/info-banner";

export default function StudentAdmissionTabs() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-primary">
        Student Admission
      </h1>
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 border-rounded-lg shadow-md">
          <TabsTrigger
            value="single"
            className="flex items-center justify-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <UserPlus className="w-4 h-4" />
            <span>Single Student</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center justify-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Users className="w-4 h-4" />
            <span>Bulk Admission</span>
          </TabsTrigger>
        </TabsList>
        <div className="mt-6 border-rounded-lg shadow-2xl p-4 space-y-4 border border-gray-200">
          <TabsContent value="single">
            <InfoBanner
              type="danger"
              message="Please Make Sure You have already Created the Parent, Class and Stream for the student."
            />
            <SingleStudentForms />
            {/* <Card>
              <CardHeader>
                <CardTitle>Single Student Admission</CardTitle>
                <CardDescription>Add a new student to the system one at a time.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Form for single student admission will be placed here.
                </p>
              </CardContent>
            </Card> */}
          </TabsContent>
          <TabsContent value="bulk">
            <BulkStudentForms />
            {/* <Card>
              <CardHeader>
                <CardTitle>Bulk Student Admission</CardTitle>
                <CardDescription>Add multiple students to the system at once.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Form for bulk student admission will be placed here.
                </p>
              </CardContent>
            </Card> */}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
