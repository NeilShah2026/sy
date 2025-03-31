"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, Calendar, TrendingUp, Clock, ArrowRight, ArrowUpRight, ArrowDownRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setUserName(user.name.split(" ")[0]) // Get first name
    }
  }, [])

  // Demo data
  const stats = [
    {
      title: "Total Clients",
      value: "24",
      change: "+3",
      trend: "up",
      period: "from last month",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Upcoming Meetings",
      value: "8",
      change: "+2",
      trend: "up",
      period: "from last week",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Revenue Growth",
      value: "12%",
      change: "-2%",
      trend: "down",
      period: "from last quarter",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Avg. Response Time",
      value: "2.4h",
      change: "-0.5h",
      trend: "up",
      period: "improvement",
      icon: <Clock className="h-5 w-5" />,
    },
  ]

  const recentClients = [
    { id: 1, name: "Riverfront Retail", industry: "Retail", date: "Mar 28, 2025", status: "Active" },
    { id: 2, name: "Metro Healthcare", industry: "Healthcare", date: "Mar 25, 2025", status: "Active" },
    { id: 3, name: "Pinnacle Manufacturing", industry: "Manufacturing", date: "Mar 22, 2025", status: "Pending" },
  ]

  const upcomingMeetings = [
    {
      id: 1,
      client: "Riverfront Retail",
      date: "Apr 2, 2025",
      time: "10:00 AM",
      type: "Strategic Planning",
    },
    {
      id: 2,
      client: "New Prospect Inc.",
      date: "Apr 3, 2025",
      time: "2:30 PM",
      type: "Initial Consultation",
    },
    {
      id: 3,
      client: "Metro Healthcare",
      date: "Apr 5, 2025",
      time: "11:15 AM",
      type: "Financial Review",
    },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-light">Welcome back, {userName}</h1>
        <p className="text-zinc-400 mt-1">Here's what's happening with your clients today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400">{stat.title}</span>
              <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">{stat.icon}</div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-light">{stat.value}</p>
                <div className="flex items-center mt-2 text-sm">
                  {stat.trend === "up" ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      <span className="text-emerald-500">{stat.change}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">{stat.change}</span>
                    </>
                  )}
                  <span className="text-zinc-500 ml-1">{stat.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Clients */}
        <div className="border border-zinc-800 bg-zinc-900/30">
          <div className="border-b border-zinc-800 p-6 flex justify-between items-center">
            <h2 className="text-xl font-light">Recent Clients</h2>
            <Link href="/dashboard/clients">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="pb-3 text-left font-normal text-zinc-400 text-sm">Name</th>
                    <th className="pb-3 text-left font-normal text-zinc-400 text-sm">Industry</th>
                    <th className="pb-3 text-left font-normal text-zinc-400 text-sm">Date Added</th>
                    <th className="pb-3 text-left font-normal text-zinc-400 text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentClients.map((client) => (
                    <tr key={client.id} className="border-b border-zinc-800 last:border-0">
                      <td className="py-4 pr-4">{client.name}</td>
                      <td className="py-4 pr-4 text-zinc-400">{client.industry}</td>
                      <td className="py-4 pr-4 text-zinc-400">{client.date}</td>
                      <td className="py-4">
                        <span
                          className={`inline-block px-2 py-1 text-xs ${
                            client.status === "Active"
                              ? "bg-emerald-900/20 text-emerald-400"
                              : "bg-amber-900/20 text-amber-400"
                          }`}
                        >
                          {client.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="border border-zinc-800 bg-zinc-900/30">
          <div className="border-b border-zinc-800 p-6 flex justify-between items-center">
            <h2 className="text-xl font-light">Upcoming Meetings</h2>
            <Link href="/dashboard/appointments">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{meeting.client}</h3>
                    <span className="text-sm text-zinc-400">{meeting.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center text-sm text-zinc-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{meeting.time}</span>
                    </div>
                    <span className="text-sm text-zinc-400">{meeting.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

