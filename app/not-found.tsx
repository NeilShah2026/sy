"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c1c] text-white">
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#1c1c1c]/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/images/logo.png" alt="S&Y Consulting" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <Button asChild className="bg-zinc-800 text-white hover:bg-zinc-700 border-none">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-40 w-40 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                <div className="relative">
                  <Search className="h-24 w-24 text-zinc-500" strokeWidth={1.5} />
                  <X
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-zinc-400"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-light tracking-tight mb-4">404</h1>
            <h2 className="text-3xl font-light tracking-tight mb-6">Page Not Found</h2>
            <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#4b4e59] text-white hover:bg-[#5a5d68] rounded-none">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Homepage
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100 hover:text-black rounded-none"
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-800 py-12 bg-[#1c1c1c]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
          <Image src="/images/logo.png" alt="S&Y Consulting" width={80} height={32} className="h-8 w-auto" />
          <div className="flex items-center justify-center space-x-8">
            <Link href="/privacy-policy" className="text-xs text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-zinc-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/#contact" className="text-xs text-zinc-500 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} S&Y Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

