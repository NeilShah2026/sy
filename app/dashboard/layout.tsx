"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Users, BarChart3, Calendar, Settings, LogOut, Menu, X, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      router.push("/login")
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1c1c1c] text-white">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-10 w-10 text-white mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-zinc-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Router will redirect to login
  }

  return (
    <div className="flex min-h-screen bg-[#1c1c1c] text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-zinc-800 bg-[#1c1c1c]">
        <div className="flex h-20 items-center border-b border-zinc-800 px-6">
          <Link href="/">
            <Image src="/images/logo.png" alt="S&Y Consulting" width={100} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/clients"
                className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Users className="h-5 w-5" />
                <span>Clients</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/appointments"
                className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Calendar className="h-5 w-5" />
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <span className="text-lg font-medium">{user.name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-zinc-400">{user.role}</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full justify-start gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-zinc-800 bg-[#1c1c1c]/90 backdrop-blur-md px-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="S&Y Consulting" width={80} height={32} className="h-8 w-auto" />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-64 bg-[#1c1c1c] border-l border-zinc-800 p-4">
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
              <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-lg font-medium">{user.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-zinc-400">{user.role}</p>
              </div>
            </div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/clients"
                    className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Users className="h-5 w-5" />
                    <span>Clients</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/appointments"
                    className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Appointments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-none px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Home className="h-5 w-5" />
                    <span>Back to Website</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-8">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-0 mt-16 md:mt-0">{children}</main>
    </div>
  )
}

