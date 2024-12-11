import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface NotificationProps {
  message: string
  onClose: () => void
}

export function Notification({ message, onClose }: NotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-md shadow-lg flex items-center justify-between">
      <span>{message}</span>
      <Button variant="ghost" size="sm" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

