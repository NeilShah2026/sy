"use client"

import { useState } from "react"
import { CalendarIcon, Plus, Search, Filter, Clock, User, MapPin, MoreHorizontal, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Demo data
  const appointments = [
    {
      id: 1,
      client: "Riverfront Retail",
      contact: "John Smith",
      date: "Apr 2, 2025",
      time: "10:00 AM - 11:30 AM",
      type: "Strategic Planning",
      location: "Client Office",
      status: "Confirmed",
    },
    {
      id: 2,
      client: "New Prospect Inc.",
      contact: "Amanda Lee",
      date: "Apr 3, 2025",
      time: "2:30 PM - 3:30 PM",
      type: "Initial Consultation",
      location: "Virtual Meeting",
      status: "Pending",
    },
    {
      id: 3,
      client: "Metro Healthcare",
      contact: "Sarah Johnson",
      date: "Apr 5, 2025",
      time: "11:15 AM - 12:45 PM",
      type: "Financial Review",
      location: "S&Y Office",
      status: "Confirmed",
    },
    {
      id: 4,
      client: "Coastal Restaurants",
      contact: "Lisa Chen",
      date: "Apr 7, 2025",
      time: "9:00 AM - 10:30 AM",
      type: "Operational Excellence",
      location: "Client Office",
      status: "Confirmed",
    },
    {
      id: 5,
      client: "Tech Innovations",
      contact: "Jessica Wong",
      date: "Apr 8, 2025",
      time: "1:00 PM - 2:30 PM",
      type: "Digital Transformation",
      location: "Virtual Meeting",
      status: "Pending",
    },
    {
      id: 6,
      client: "Summit Financial",
      contact: "Robert Wilson",
      date: "Apr 10, 2025",
      time: "3:00 PM - 4:30 PM",
      type: "Risk Management",
      location: "S&Y Office",
      status: "Confirmed",
    },
  ]

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.contact.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light">Appointments</h1>
          <p className="text-zinc-400 mt-1">Manage your upcoming meetings and consultations</p>
        </div>
        <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-none">
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      {/* Filters and search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
          />
        </div>
        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Calendar View
        </Button>
        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Appointments list */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-light">{appointment.client}</h3>
                <p className="text-zinc-400">{appointment.type}</p>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 text-sm ${
                    appointment.status === "Confirmed"
                      ? "bg-emerald-900/20 text-emerald-400"
                      : "bg-amber-900/20 text-amber-400"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center text-zinc-400">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <Clock className="h-4 w-4 mr-2" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{appointment.location}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
              <div className="flex items-center text-zinc-400">
                <User className="h-4 w-4 mr-2" />
                <span>{appointment.contact}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-white">
                  <Edit className="h-4 w-4 mr-1" />
                  <span>Edit</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-white">
                  <Trash2 className="h-4 w-4 mr-1" />
                  <span>Cancel</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {filteredAppointments.length === 0 && (
          <div className="border border-zinc-800 bg-zinc-900/30 p-8 text-center">
            <p className="text-zinc-400">No appointments found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

