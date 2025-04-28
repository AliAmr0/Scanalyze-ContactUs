import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Scanalyze - Contact Us",
  description: "Contact our support team for assistance with your health information",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <nav className="bg-white border-b border-sky-100 py-4">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="text-sky-900 font-bold text-xl">Scanalyze</div>
                <div className="space-x-4">
                  <a href="/" className="text-sky-700 hover:text-sky-900">
                    Home
                  </a>
                  <a href="/contact" className="text-sky-700 hover:text-sky-900 font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow">{children}</main>
          <footer className="bg-sky-900 text-white py-6">
            <div className="container mx-auto px-4 text-center">
              <p>© {new Date().getFullYear()} Scanalyze. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
