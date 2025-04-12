"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formData)
    alert("Thank you for your inquiry. We will contact you shortly.")
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

      <div className="text-center">
        <Button
          type="submit"
          variant="outline"
          className="border-neutral-300 bg-transparent px-8 text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
        >
          {t('contact.submit')}
        </Button>
      </div>
    </form>
  )
}
