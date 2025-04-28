"use client"

import { useEffect, useState } from "react"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  message: string
  // Additional fields for the detailed form
  guestCount?: string
  venue?: string
  budget?: string
  dietaryRequirements?: string
  additionalServices?: string
  preferredContactMethod?: string
}

export default function MessagesDetail() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
    guestCount: "",
    venue: "",
    budget: "",
    dietaryRequirements: "",
    additionalServices: "",
    preferredContactMethod: "email"
  })

  useEffect(() => {
    // Retrieve the stored form data when the component mounts
    const storedData = localStorage.getItem('contactFormData')
    if (storedData) {
      setFormData(prev => ({
        ...prev,
        ...JSON.parse(storedData)
      }))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the complete form data to your backend
    console.log(formData)
    alert("Thank you for providing additional details. We will be in touch soon!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-[#faf9f8] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
          Additional Details
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 shadow-sm">
          {/* Display existing information in disabled fields */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-normal">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                disabled
                className="border-neutral-200 text-xs bg-neutral-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-normal">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                disabled
                className="border-neutral-200 text-xs bg-neutral-50"
              />
            </div>
          </div>

          {/* New additional fields */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="guestCount" className="text-xs font-normal">Expected Guest Count</Label>
              <Input
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
                placeholder="Enter expected number of guests"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="venue" className="text-xs font-normal">Preferred Venue</Label>
              <Input
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
                placeholder="Enter venue preference if any"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-xs font-normal">Budget Range</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
                placeholder="Enter your budget range"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredContactMethod" className="text-xs font-normal">Preferred Contact Method</Label>
              <Select 
                onValueChange={(value) => handleSelectChange('preferredContactMethod', value)}
                value={formData.preferredContactMethod}
              >
                <SelectTrigger className="border-neutral-200 text-xs focus-visible:ring-neutral-300">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email" className="text-xs">Email</SelectItem>
                  <SelectItem value="phone" className="text-xs">Phone</SelectItem>
                  <SelectItem value="whatsapp" className="text-xs">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietaryRequirements" className="text-xs font-normal">Dietary Requirements</Label>
            <Textarea
              id="dietaryRequirements"
              name="dietaryRequirements"
              value={formData.dietaryRequirements}
              onChange={handleChange}
              className="min-h-[100px] border-neutral-200 text-xs focus-visible:ring-neutral-300"
              placeholder="Please list any dietary requirements or restrictions"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalServices" className="text-xs font-normal">Additional Services Required</Label>
            <Textarea
              id="additionalServices"
              name="additionalServices"
              value={formData.additionalServices}
              onChange={handleChange}
              className="min-h-[100px] border-neutral-200 text-xs focus-visible:ring-neutral-300"
              placeholder="Please list any additional services you might need (e.g., photography, catering, decoration)"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="outline"
              className="border-neutral-300 bg-transparent px-8 text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
            >
              Submit Details
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
} 