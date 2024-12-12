"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How do I start exporting with Agrikloom?",
    answer: "To start exporting with Agrikloom, you'll need to create an account and complete our verification process. Our team will guide you through the necessary documentation and requirements.",
  },
  {
    question: "What types of fruits and vegetables do you export?",
    answer: "We export a wide variety of fresh fruits and vegetables, including but not limited to citrus fruits, tropical fruits, leafy greens, and root vegetables. All our produce meets international quality standards.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer: "We maintain strict quality control measures throughout our supply chain. This includes regular inspections, proper storage conditions, and adherence to international food safety standards.",
  },
  {
    question: "Do you offer organic produce?",
    answer: "Yes, we offer certified organic produce. All our organic products are grown according to organic farming principles and are certified by relevant authorities.",
  },
  {
    question: "What agricultural engineering services do you provide?",
    answer: "Our agricultural engineering services include soil analysis, irrigation system design, crop monitoring, and technical consulting for optimal farming practices.",
  },
  {
    question: "How can I become a supplier for Agrikloom?",
    answer: "To become a supplier, please contact our supplier relations team. We'll evaluate your facilities, products, and certifications to ensure they meet our quality standards.",
  },
  {
    question: "Do you have any terms & conditions?",
    answer: "Yes, we have comprehensive terms and conditions that cover all aspects of our services. You can find the full document on our website or request a copy from our support team.",
  },
]

export function FaqSection() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-muted-foreground">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-4xl font-bold">
          You ask? We <span className="italic">answer</span>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-center gap-2 pt-6">
        <span className="text-sm text-muted-foreground">Need further support?</span>
        <Button variant="default" className="bg-[#8BC34A] hover:bg-[#7CB342]">
          Contact us
        </Button>
      </div>
    </section>
  )
}

