"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { ClassList } from "./class-listing/ClassList"
import { SectionList } from "./class-listing/SectionList"
import { ConfirmationDialog } from "./class-listing/ConfirmationDialog"
import { ClassSectionForm } from "./class-listing/ClassSectionForm"
import { Notification } from "./class-listing/Notification"
import { classData } from "@/lib/class-Listing-data"


export default function ClassListing() {
  const [classes, setClasses] = React.useState(classData || [])
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
        <ClassList
          classes={classes}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          onCreateClass={handleCreateClass}
          onEditClass={handleEditClass}
          onDeleteClass={handleDeleteClass}
        />
        <SectionList
          selectedClass={selectedClass}
          onAddSection={() => handleAddSection(selectedClass.id)}
          onEditSection={handleEditSection}
          onDeleteSection={handleDeleteSection}
        />
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

