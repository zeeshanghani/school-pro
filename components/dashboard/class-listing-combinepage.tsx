"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Plus, Pencil, Trash2, X } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

interface NotificationProps {
  message: string
  onClose: () => void
}

function Notification({ message, onClose }: NotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-md shadow-lg flex items-center justify-between">
      <span>{message}</span>
      <Button variant="ghost" size="sm" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
}

function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: ConfirmationDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

interface ClassSectionFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string, students?: number }) => void
  title: string
  description: string
  initialData?: { name: string, students?: number }
}

function ClassSectionForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  initialData,
}: ClassSectionFormProps) {
  const [name, setName] = React.useState(initialData?.name || "")
  const [students, setStudents] = React.useState(initialData?.students?.toString() || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      name,
      students: students ? parseInt(students, 10) : undefined,
    })
    setName("")
    setStudents("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          {initialData?.students !== undefined && (
            <div className="space-y-2">
              <Label htmlFor="students">Number of Students</Label>
              <Input
                id="students"
                type="number"
                value={students}
                onChange={(e) => setStudents(e.target.value)}
                placeholder="Enter number of students"
                min="1"
              />
            </div>
          )}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function ClassListing() {
  const [classes, setClasses] = React.useState(classData)
  const [selectedClass, setSelectedClass] = React.useState(classes[0])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
  const [isFormOpen, setIsFormOpen] = React.useState(false)
  const [formMode, setFormMode] = React.useState<'addClass' | 'editClass' | 'addSection' | 'editSection'>('addClass')
  const [itemToDelete, setItemToDelete] = React.useState<{ type: 'class' | 'section', id: number }>({ type: 'class', id: 0 })
  const [itemToEdit, setItemToEdit] = React.useState<{ type: 'class' | 'section', id: number }>({ type: 'class', id: 0 })
  const [notification, setNotification] = React.useState<string | null>(null)

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000)
  }

  const handleCreateClass = () => {
    setFormMode('addClass')
    setIsFormOpen(true)
  }

  const handleEditClass = (classId: number) => {
    setFormMode('editClass')
    setItemToEdit({ type: 'class', id: classId })
    setIsFormOpen(true)
  }

  const handleDeleteClass = (classId: number) => {
    setItemToDelete({ type: 'class', id: classId })
    setIsDeleteDialogOpen(true)
  }

  const handleAddSection = (classId: number) => {
    setFormMode('addSection')
    setItemToEdit({ type: 'class', id: classId })
    setIsFormOpen(true)
  }

  const handleEditSection = (classId: number, sectionId: number) => {
    setFormMode('editSection')
    setItemToEdit({ type: 'section', id: sectionId })
    setIsFormOpen(true)
  }

  const handleDeleteSection = (classId: number, sectionId: number) => {
    setItemToDelete({ type: 'section', id: sectionId })
    setIsDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    if (itemToDelete.type === 'class') {
      setClasses(classes.filter(c => c.id !== itemToDelete.id))
      if (selectedClass.id === itemToDelete.id) {
        setSelectedClass(classes[0])
      }
      showNotification("The class has been successfully deleted.")
    } else {
      const updatedClasses = classes.map(c => {
        if (c.id === selectedClass.id) {
          return {
            ...c,
            sections: c.sections.filter(s => s.id !== itemToDelete.id)
          }
        }
        return c
      })
      setClasses(updatedClasses)
      setSelectedClass(updatedClasses.find(c => c.id === selectedClass.id)!)
      showNotification("The section has been successfully deleted.")
    }
    setIsDeleteDialogOpen(false)
  }

  const handleFormSubmit = (data: { name: string, students?: number }) => {
    switch (formMode) {
      case 'addClass':
        const newClass = {
          id: Math.max(...classes.map(c => c.id)) + 1,
          name: data.name,
          sections: []
        }
        setClasses([...classes, newClass])
        showNotification("The new class has been successfully added.")
        break
      case 'editClass':
        const updatedClasses = classes.map(c => 
          c.id === itemToEdit.id ? { ...c, name: data.name } : c
        )
        setClasses(updatedClasses)
        setSelectedClass(updatedClasses.find(c => c.id === itemToEdit.id)!)
        showNotification("The class has been successfully updated.")
        break
      case 'addSection':
        const classToUpdate = classes.find(c => c.id === itemToEdit.id)!
        const newSection = {
          id: Math.max(...classToUpdate.sections.map(s => s.id), 0) + 1,
          name: data.name,
          students: data.students || 0
        }
        const updatedClassesWithNewSection = classes.map(c => 
          c.id === itemToEdit.id ? { ...c, sections: [...c.sections, newSection] } : c
        )
        setClasses(updatedClassesWithNewSection)
        setSelectedClass(updatedClassesWithNewSection.find(c => c.id === itemToEdit.id)!)
        showNotification("The new section has been successfully added.")
        break
      case 'editSection':
        const updatedClassesWithEditedSection = classes.map(c => {
          if (c.id === selectedClass.id) {
            return {
              ...c,
              sections: c.sections.map(s => 
                s.id === itemToEdit.id ? { ...s, name: data.name, students: data.students || s.students } : s
              )
            }
          }
          return c
        })
        setClasses(updatedClassesWithEditedSection)
        setSelectedClass(updatedClassesWithEditedSection.find(c => c.id === selectedClass.id)!)
        showNotification("The section has been successfully updated.")
        break
    }
    setIsFormOpen(false)
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
                  <span className="sr-only">Create new class</span>
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
                {classes.map((classItem) => {
                  const totalStudents = classItem.sections.reduce((sum, section) => sum + section.students, 0);

                  return (
                    <div key={classItem.id} className="flex flex-col gap-1 mb-2">
                      <div className="flex items-center gap-2">
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
                              <span className="sr-only">Edit class</span>
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
                              <span className="sr-only">Delete class</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete class</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground ml-2">
                        Total Students: {totalStudents}
                      </p>
                    </div>
                  );
                })}
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
                  <span className="sr-only">Add new section</span>
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
                              <span className="sr-only">Edit section</span>
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
                              <span className="sr-only">Delete section</span>
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
      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title={`Delete ${itemToDelete.type}`}
        description={`Are you sure you want to delete this ${itemToDelete.type}? This action cannot be undone.`}
      />
      <ClassSectionForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        title={formMode === 'addClass' ? 'Add Class' : formMode === 'editClass' ? 'Edit Class' : formMode === 'addSection' ? 'Add Section' : 'Edit Section'}
        description={formMode === 'addClass' ? 'Add a new class' : formMode === 'editClass' ? 'Edit class details' : formMode === 'addSection' ? 'Add a new section' : 'Edit section details'}
        initialData={formMode === 'editClass' ? { name: classes.find(c => c.id === itemToEdit.id)?.name || '' } :
                     formMode === 'editSection' ? selectedClass.sections.find(s => s.id === itemToEdit.id) :
                     undefined}
      />
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </TooltipProvider>
  )
}

