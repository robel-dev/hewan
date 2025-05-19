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
import { Loader2, ChevronRight, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"


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

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd")
      setFormData(prev => ({ ...prev, date: formattedDate }))
    }
  }

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
                    Weddings
                  </SelectItem>
                  <SelectItem value="catering" className="text-xs">
                    Catering
                  </SelectItem>
                  <SelectItem value="birthday" className="text-xs">
                    Birthdays
                  </SelectItem>
                  <SelectItem value="memorial" className="text-xs">
                    Memorials
                  </SelectItem>
                  <SelectItem value="baptism" className="text-xs">
                    Baptism
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-xs font-normal">
              Event Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-neutral-200 text-xs"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(new Date(formData.date), "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date ? new Date(formData.date) : undefined}
                  onSelect={handleDateSelect}
                  initialFocus
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
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

          <div className="flex justify-end mt-4">
            <Button 
              type="button" 
              onClick={handleNext}
              className="rounded-full w-10 h-10 bg-white shadow-md hover:bg-gray-50 flex items-center justify-center p-0 border border-gray-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      ) : (
        // Second form (additional details)
        <div className="space-y-6">
          <div className="flex justify-start mb-4">
            <Button 
              type="button" 
              onClick={handlePrev}
              className="rounded-full w-10 h-10 bg-white shadow-md hover:bg-gray-50 flex items-center justify-center p-0 border border-gray-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 rotate-180" />
            </Button>
          </div>
          
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
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, preferredContactMethod: value }))}>
              <SelectTrigger className="border-neutral-200 text-xs focus-visible:ring-neutral-300">
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email" className="text-xs">
                  Email
                </SelectItem>
                <SelectItem value="phone" className="text-xs">
                  Phone
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="venue" className="text-xs font-normal">
              Venue
            </Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, venue: value }))}>
              <SelectTrigger className="border-neutral-200 text-xs focus-visible:ring-neutral-300">
                <SelectValue placeholder="Select venue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kista" className="text-xs">
                  Kista
                </SelectItem>
                <SelectItem value="Skarholmen" className="text-xs">
                  Skarholmen
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalServices" className="text-xs font-normal">
              Additional Services
            </Label>
            <Textarea
              id="additionalServices"
              name="additionalServices"
              value={formData.additionalServices}
              onChange={handleChange}
              className="min-h-[100px] border-neutral-200 text-xs focus-visible:ring-neutral-300"
              placeholder="Tell us about any additional services you need"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full mt-6"
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
