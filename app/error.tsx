"use client"
import Link from "next/link"
import { AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="bg-destructive w-16 h-16 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8 text-destructive-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter">500-Server Error</h1>
        <p className="text-muted-foreground">
          Something went wrong on our end. We&apos;re working to fix the issue. Please try again later.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()} >
            Try Again
          </Button>
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button onClick={() => window.history.back()} >
            Go Back
          </Button>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full p-4 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} SchoolPro. All rights reserved.
      </footer>
    </div>
  )
}

