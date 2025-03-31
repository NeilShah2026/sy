"use client"

import { useState, useEffect } from "react"
import { Save, User, Lock, Bell, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null)

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) return null

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light">Settings</h1>
        <p className="text-zinc-400 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none text-white bg-zinc-800 hover:bg-zinc-700"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Lock className="mr-2 h-4 w-4" />
            Password
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Globe className="mr-2 h-4 w-4" />
            Preferences
          </Button>
        </div>

        {/* Main content */}
        <div className="border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-xl font-light mb-6">Profile Information</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-light text-zinc-300 leading-none">
                  First name
                </label>
                <input
                  id="firstName"
                  defaultValue={user.name.split(" ")[0]}
                  className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-light text-zinc-300 leading-none">
                  Last name
                </label>
                <input
                  id="lastName"
                  defaultValue={user.name.split(" ")[1] || ""}
                  className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-light text-zinc-300 leading-none">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue={user.email}
                className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-light text-zinc-300 leading-none">
                Role
              </label>
              <input
                id="role"
                defaultValue={user.role}
                disabled
                className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white opacity-70"
              />
              <p className="text-xs text-zinc-500">Your role cannot be changed</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-light text-zinc-300 leading-none">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="flex w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Tell us about yourself"
              />
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-none">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

