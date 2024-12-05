import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-6xl ">
        <Card className="w-full">  
      <CardContent className="mt-2">
        <Image
          src="/dashboard.jpg"
          alt="dashboard"
          width={2016}
          height={1210}
          className="w-full rounded-lg"
          />
      </CardContent>
      
    </Card>
        </div>
    </div>
  )
}
