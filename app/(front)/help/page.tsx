import { FaqSection } from "@/components/frontend/help-Section/faq-section";
import { ContactSection } from "@/components/frontend/help-Section/help-contact-section";
import { SearchArticles } from "@/components/frontend/help-Section/search-articles";


export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <SearchArticles />
      <FaqSection />
      <ContactSection />
    </div>
  )
}

