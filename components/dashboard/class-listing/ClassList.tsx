import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Pencil, Plus, Trash2 } from 'lucide-react'

interface Class {
  id: number;
  name: string;
  sections: Array<{
    id: number;
    name: string;
    students: number;
  }>;
}

interface ClassListProps {
  classes: Class[];
  selectedClass: Class;
  setSelectedClass: (classItem: Class) => void;
  onCreateClass: () => void;
  onEditClass: (classId: number) => void;
  onDeleteClass: (classId: number) => void;
}

export function ClassList({
  classes,
  selectedClass,
  setSelectedClass,
  onCreateClass,
  onEditClass,
  onDeleteClass,
}: ClassListProps) {
  return (
    <Card className="w-full md:w-1/3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Classes</CardTitle>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={onCreateClass}>
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
              const totalStudents = classItem.sections.reduce((sum, section) => sum + section.students, 0)

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
                        <Button variant="outline" size="icon" onClick={() => onEditClass(classItem.id)}>
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
                        <Button variant="outline" size="icon" onClick={() => onDeleteClass(classItem.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete class</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete class</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-sm text-muted-foreground ml-2">Total Students: {totalStudents}</p>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

