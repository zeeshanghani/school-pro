import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import SmallTitle from "./small-title"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <SmallTitle title="Ghani School" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          Your Complete School Management Solution
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Try for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              See All features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

