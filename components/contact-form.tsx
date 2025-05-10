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
import { Loader2 } from "lucide-react"


//robelamare20@gmail.com web app url
const google_apps_script_web_api = 'https://script.google.com/macros/s/AKfycbyVJWJcDW0kTK_z2IxKvA4eoL9ULUocO8o6e_5f7a3o5izjjOzFW0z66MOaYLomHR3p1A/exec';
const deployment_id = 'AKfycbxB1gJkjj8kYs_Erij9-pokgeNnYDb2SLG3Nq5Bndndv6bb0ew_gLisV7BKjLtwyPNy8g';
export default function ContactForm() {
  const t = useTranslations();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      // Log the data being sent
      console.log('Sending form data:', formData);
      
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
      
      // Since we're using no-cors, we won't get a response to parse
      // Just proceed to the next page
      router.push('/messages-detail')
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {error && <p className="text-red-500 text-xs text-center">{error}</p>}

      <div className="text-center">
        <Button
          type="submit"
          variant="outline"
          className="border-neutral-300 bg-transparent px-8 text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('contact.submitting', { defaultValue: 'Submitting...' })}
            </>
          ) : (
            t('contact.send', { defaultValue: 'Send Message' })
          )}
        </Button>
      </div>
    </form>
  )
}
