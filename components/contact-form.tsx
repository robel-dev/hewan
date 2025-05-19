"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from 'next-intl'
import { Loader2, ChevronRight } from "lucide-react"


//robelamare20@gmail.com web app url
const google_apps_script_web_api = 'https://script.google.com/macros/s/AKfycbxtvju82-MeORNLRrlRiJLSXogHQdxnTzTlN8QNdYouInVFFIVK0RqaCZqbgW98NpQLzQ/exec';
const deployment_id = 'AKfycbxB1gJkjj8kYs_Erij9-pokgeNnYDb2SLG3Nq5Bndndv6bb0ew_gLisV7BKjLtwyPNy8g';
export default function ContactForm() {
  const t = useTranslations();
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
    budget: "",
    dietaryRequirements: "",
    guestCount: "",
    preferredContactMethod: "",
    venue: "",
    additionalServices: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      // Log the complete form data being sent
      console.log('Sending complete form data:', formData);
      
      // Store form data in localStorage
      localStorage.setItem('contactFormData', JSON.stringify(formData))
      
      // Send data to Google Apps Script
      const response = await fetch(google_apps_script_web_api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      })
      
      // Show success message or handle response
      // You might want to add a success state and message here
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
        budget: "",
        dietaryRequirements: "",
        guestCount: "",
        preferredContactMethod: "",
        venue: "",
        additionalServices: ""
      })
      setFormStep(1) // Reset to first form
      
    } catch (err) {
      console.error('Error submitting form:', err)
      setError("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, eventType: value }))
  }

  const handleNext = () => {
    setFormStep(2);
  };

  const handlePrev = () => {
    setFormStep(1);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      {formStep === 1 ? (
        // First form (basic info)
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-normal">
                {t('contact.name')}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-normal">
                {t('contact.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-normal">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-xs font-normal">
                Event Type
              </Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="border-neutral-200 text-xs focus-visible:ring-neutral-300">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding" className="text-xs">
                    Wedding
                  </SelectItem>
                  <SelectItem value="engagement" className="text-xs">
                    Engagement
                  </SelectItem>
                  <SelectItem value="corporate" className="text-xs">
                    Corporate Event
                  </SelectItem>
                  <SelectItem value="other" className="text-xs">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-xs font-normal">
              Event Date
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-normal">
              {t('contact.message')}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[120px] border-neutral-200 text-xs focus-visible:ring-neutral-300"
              required
            />
          </div>

          <Button 
            type="button" 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      ) : (
        // Second form (additional details)
        <div className="space-y-6">
          <Button 
            type="button" 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6 rotate-180" />
          </Button>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-xs font-normal">
                Budget
              </Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guestCount" className="text-xs font-normal">
                Guest Count
              </Label>
              <Input
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietaryRequirements" className="text-xs font-normal">
              Dietary Requirements
            </Label>
            <Input
              id="dietaryRequirements"
              name="dietaryRequirements"
              value={formData.dietaryRequirements}
              onChange={handleChange}
              className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredContactMethod" className="text-xs font-normal">
              Preferred Contact Method
            </Label>
            <Input
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="venue" className="text-xs font-normal">
              Venue
            </Label>
            <Input
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalServices" className="text-xs font-normal">
              Additional Services
            </Label>
            <Input
              id="additionalServices"
              name="additionalServices"
              value={formData.additionalServices}
              onChange={handleChange}
              className="border-neutral-200 text-xs focus-visible:ring-neutral-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      )}
    </form>
  )
}
