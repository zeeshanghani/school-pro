import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SmallTitle from './small-title'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-50" />
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8">
          <SmallTitle title="agenious" />
        </div>
        
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
        Your Complete School Management Solution{" "}
          <span className="whitespace-nowrap">With Lucis</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-12">
        From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full"
          >
            Try for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-6 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-sm"
          >
            See features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

