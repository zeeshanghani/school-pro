import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Pencil, Plus, Trash2 } from 'lucide-react'

interface SectionListProps {
  selectedClass: {
    id: number
    name: string
    sections: Array<{ id: number; name: string; students: number }>
  }
  onAddSection: () => void
  onEditSection: (classId: number, sectionId: number) => void
  onDeleteSection: (classId: number, sectionId: number) => void
}

export function SectionList({ selectedClass, onAddSection, onEditSection, onDeleteSection }: SectionListProps) {
  return (
    <Card className="w-full md:w-2/3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{selectedClass.name} Sections</CardTitle>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={onAddSection}>
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
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onEditSection(selectedClass.id, section.id)}
                        >
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
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onDeleteSection(selectedClass.id, section.id)}
                        >
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
                  <p className="text-sm text-muted-foreground">Number of students: {section.students}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

