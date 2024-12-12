"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "Getting Started Guide",
    description: "Learn the basics of our platform and how to get started",
    category: "Basics",
  },
  {
    id: 2,
    title: "Account Management",
    description: "How to manage your account settings and preferences",
    category: "Account",
  },
  {
    id: 3,
    title: "Billing and Subscriptions",
    description: "Understanding your billing cycle and subscription options",
    category: "Billing",
  },
  // Add more articles as needed
]

export function SearchArticles() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filteredArticles, setFilteredArticles] = React.useState(articles)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = articles.filter(
      article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredArticles(filtered)
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Help Articles</h2>
        <p className="text-muted-foreground">
          Search our knowledge base to find the answers you need
        </p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="cursor-pointer hover:bg-muted/50">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{article.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

