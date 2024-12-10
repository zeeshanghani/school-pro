"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Plus, Pencil, Trash2 } from 'lucide-react'

// Mock data for classes and sections
const classData = [
  { id: 1, name: "Class 1", sections: [
    { id: 1, name: "1A", students: 25 },
    { id: 2, name: "1B", students: 28 },
  ]},
  { id: 2, name: "Class 2", sections: [
    { id: 3, name: "2A", students: 30 },
    { id: 4, name: "2B", students: 27 },
    { id: 5, name: "2C", students: 26 },
  ]},
  { id: 3, name: "Class 3", sections: [
    { id: 6, name: "3A", students: 29 },
    { id: 7, name: "3B", students: 31 },
  ]},
  { id: 4, name: "Class 4", sections: [
    { id: 8, name: "4A", students: 24 },
    { id: 9, name: "4B", students: 26 },
    { id: 10, name: "4C", students: 25 },
  ]},
  { id: 5, name: "Class 5", sections: [
    { id: 11, name: "5A", students: 28 },
    { id: 12, name: "5B", students: 27 },
  ]},
]

export function ClassSectionUI() {
  const [selectedClass, setSelectedClass] = React.useState(classData[0])

  const handleCreateClass = () => {
    console.log("Create new class")
  }

  const handleEditClass = (classId: number) => {
    console.log("Edit class", classId)
  }

  const handleDeleteClass = (classId: number) => {
    console.log("Delete class", classId)
  }

  const handleAddSection = (classId: number) => {
    console.log("Add section to class", classId)
  }

  const handleEditSection = (classId: number, sectionId: number) => {
    console.log("Edit section", sectionId, "in class", classId)
  }

  const handleDeleteSection = (classId: number, sectionId: number) => {
    console.log("Delete section", sectionId, "from class", classId)
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <Card className="w-full md:w-1/3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Classes</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={handleCreateClass}>
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create new class</p>
              </TooltipContent>
            </Tooltip>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="flex flex-col gap-2">
                {classData.map((classItem) => (
                  <div key={classItem.id} className="flex items-center gap-2">
                    <Button
                      variant={selectedClass.id === classItem.id ? "default" : "outline"}
                      onClick={() => setSelectedClass(classItem)}
                      className="justify-start flex-grow"
                    >
                      {classItem.name}
                    </Button>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => handleEditClass(classItem.id)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit class</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => handleDeleteClass(classItem.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete class</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="w-full md:w-2/3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>{selectedClass.name} Sections</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => handleAddSection(selectedClass.id)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new section</p>
              </TooltipContent>
            </Tooltip>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedClass.sections.map((section) => (
                  <Card key={section.id}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle>{section.name}</CardTitle>
                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => handleEditSection(selectedClass.id, section.id)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit section</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => handleDeleteSection(selectedClass.id, section.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete section</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Number of students: {section.students}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}

