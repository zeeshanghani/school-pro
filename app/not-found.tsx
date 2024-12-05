"use client"
import Link from "next/link"
import { AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-[500px]">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="default">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full p-4 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()}Ghani School managment system.
      </footer>
    </div>
  )
}

