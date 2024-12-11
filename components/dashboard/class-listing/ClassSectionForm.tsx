import * as React from "react"
import { Button } from "@/components/ui/button"
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

interface ClassSectionFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; students?: number }) => void
  title: string
  description: string
  initialData?: { name: string; students?: number }
}

export function ClassSectionForm({
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

