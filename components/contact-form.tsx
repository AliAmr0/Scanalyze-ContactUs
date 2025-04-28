"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real app, you would send the form data to your API here
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
      setFormData({ fullName: "", email: "", phone: "", message: "" })
    } catch (error) {
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success!</AlertTitle>
          <AlertDescription className="text-green-700">
            Your message has been sent. We'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert className="bg-red-50 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">Error</AlertTitle>
          <AlertDescription className="text-red-700">
            There was a problem sending your message. Please try again.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sky-800">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sky-800">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          required
          className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sky-800">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
          className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sky-800">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          className="min-h-[150px] border-sky-200 focus:border-sky-400 focus:ring-sky-400"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-sky-600 hover:bg-sky-700 text-white">
        {isSubmitting ? "Sending..." : "Submit Message"}
      </Button>
    </form>
  )
}
