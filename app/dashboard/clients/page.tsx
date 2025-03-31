"use client"

import { useState } from "react"
import { Search, Plus, Filter, MoreHorizontal, ArrowUpDown, Download, Trash2, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Demo data
  const clients = [
    {
      id: 1,
      name: "Riverfront Retail",
      industry: "Retail",
      location: "New York, NY",
      contact: "John Smith",
      email: "john@riverfrontretail.com",
      status: "Active",
      date: "Mar 28, 2025",
    },
    {
      id: 2,
      name: "Metro Healthcare",
      industry: "Healthcare",
      location: "Boston, MA",
      contact: "Sarah Johnson",
      email: "sarah@metrohealthcare.com",
      status: "Active",
      date: "Mar 25, 2025",
    },
    {
      id: 3,
      name: "Pinnacle Manufacturing",
      industry: "Manufacturing",
      location: "Chicago, IL",
      contact: "Michael Brown",
      email: "michael@pinnaclemfg.com",
      status: "Pending",
      date: "Mar 22, 2025",
    },
    {
      id: 4,
      name: "Coastal Restaurants",
      industry: "Restaurant",
      location: "Miami, FL",
      contact: "Lisa Chen",
      email: "lisa@coastalrestaurants.com",
      status: "Active",
      date: "Mar 20, 2025",
    },
    {
      id: 5,
      name: "Summit Financial",
      industry: "Financial Services",
      location: "Denver, CO",
      contact: "Robert Wilson",
      email: "robert@summitfinancial.com",
      status: "Inactive",
      date: "Mar 15, 2025",
    },
    {
      id: 6,
      name: "Urban Architecture",
      industry: "Professional Services",
      location: "Seattle, WA",
      contact: "Emily Davis",
      email: "emily@urbanarchitecture.com",
      status: "Active",
      date: "Mar 10, 2025",
    },
    {
      id: 7,
      name: "Greenfield Energy",
      industry: "Energy",
      location: "Austin, TX",
      contact: "David Miller",
      email: "david@greenfieldnrg.com",
      status: "Active",
      date: "Mar 5, 2025",
    },
    {
      id: 8,
      name: "Tech Innovations",
      industry: "Technology",
      location: "San Francisco, CA",
      contact: "Jessica Wong",
      email: "jessica@techinnovations.com",
      status: "Pending",
      date: "Mar 1, 2025",
    },
  ]

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light">Clients</h1>
          <p className="text-zinc-400 mt-1">Manage and view all client information</p>
        </div>
        <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-none">
          <Plus className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      {/* Filters and search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
          />
        </div>
        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Clients table */}
      <div className="border border-zinc-800 bg-zinc-900/30">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">
                  <div className="flex items-center">
                    <span>Client Name</span>
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">
                  <div className="flex items-center">
                    <span>Industry</span>
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">Location</th>
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">Contact</th>
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">Status</th>
                <th className="p-4 text-left font-normal text-zinc-400 text-sm">Date Added</th>
                <th className="p-4 text-center font-normal text-zinc-400 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/30">
                  <td className="p-4">{client.name}</td>
                  <td className="p-4 text-zinc-400">{client.industry}</td>
                  <td className="p-4 text-zinc-400">{client.location}</td>
                  <td className="p-4">
                    <div>
                      <p>{client.contact}</p>
                      <p className="text-sm text-zinc-400">{client.email}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs ${
                        client.status === "Active"
                          ? "bg-emerald-900/20 text-emerald-400"
                          : client.status === "Pending"
                            ? "bg-amber-900/20 text-amber-400"
                            : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-400">{client.date}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredClients.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-zinc-400">No clients found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

