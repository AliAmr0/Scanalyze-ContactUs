"use client"

import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-sky-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center">Contact Our Support Team</h1>
          <p className="mt-4 text-sky-700 text-center max-w-2xl mx-auto">
            Your health information matters to us. Contact our team anytime for help or information.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-sky-100">
            <h2 className="text-2xl font-semibold text-sky-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Live Support Section */}
          <div className="bg-sky-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-sky-900 mb-6">Live Support</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-sky-800 mb-2">Chat with us</h3>
                <p className="text-sky-700 mb-4">
                  Get immediate assistance from our support team through our live chat.
                </p>
                <Button
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                  onClick={() => alert("Opening live chat support...")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with Support
                </Button>
              </div>

              <div className="pt-4 border-t border-sky-200">
                <h3 className="text-lg font-medium text-sky-800 mb-2">Email Support</h3>
                <p className="text-sky-700 mb-2">Send us an email and we'll get back to you within 24 hours.</p>
                <a href="mailto:support@scanalyze.com" className="text-sky-600 font-medium hover:underline">
                  support@scanalyze.com
                </a>
              </div>

              <div className="pt-4 border-t border-sky-200">
                <h3 className="text-lg font-medium text-sky-800 mb-2">Support Hours</h3>
                <p className="text-sky-700">
                  Sunday - Thursday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday & Friday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
