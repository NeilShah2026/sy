"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password")
      setLoading(false)
      return
    }

    // For demo purposes, we're using hardcoded credentials
    // In a real app, you would validate against a backend
    const validCredentials = [
      { email: "neil@syconsulting.co", password: "admin" },
      { email: "leyuan@syconsulting.co", password: "admin" },
    ]

    const isValid = validCredentials.some((cred) => cred.email === email && cred.password === password)

    if (isValid) {
      // Store user info in localStorage for demo purposes
      // In a real app, you would use a proper auth solution
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          name: email.startsWith("neil") ? "Neil Shah" : "Leyuan Yin",
          role: "Admin",
        }),
      )

      // Simulate network delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } else {
      setError("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c1c] text-white">
      <div className="flex min-h-screen">
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] to-transparent z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="S&Y Consulting"
            fill
            className="object-cover"
            style={{ opacity: 0.7 }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8 flex justify-center">
              <Link href="/">
                <Image src="/images/logo.png" alt="S&Y Consulting" width={120} height={48} className="h-12 w-auto" />
              </Link>
            </div>

            <h1 className="text-3xl font-light mb-8 text-center">Admin Login</h1>

            {error && <div className="mb-6 p-4 border border-red-800 bg-red-900/20 text-red-200 text-sm">{error}</div>}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-light text-zinc-300 leading-none">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-light text-zinc-300 leading-none">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-none flex items-center justify-center"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <>
                    Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-zinc-400">
              <p>
                Return to{" "}
                <Link href="/" className="text-white hover:underline">
                  homepage
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

