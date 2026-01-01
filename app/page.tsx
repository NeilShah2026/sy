"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, type FormEvent } from "react"
import { Calendar, ArrowRight, Mail, Phone, MapPin, ChevronRight, X, CheckCircle, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  const contactRef = useRef<HTMLDivElement>(null)

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = "auto"
    setFormSubmitted(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      businessType: formData.get("businessType"),
      message: formData.get("message"),
    }

    // In a real implementation, you would send this data to your backend
    // For example using fetch:

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recipient: 'neil@syconsulting.co'
        }),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }

    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      setFormSubmitting(false)
      setFormSubmitted(true)
      console.log("Form submitted with data:", data)
      console.log("Email would be sent to: neil@syconsulting.co")
    }, 1500)
  }

  const serviceInfo = {
    strategic: {
      title: "Strategic Planning",
      description:
        "Our strategic planning services help local businesses develop a clear vision for the future and actionable roadmaps to achieve their goals. We work closely with leadership teams to identify opportunities, analyze market conditions, and create comprehensive strategies that drive sustainable growth.",
      points: [
        "Long-term vision development",
        "Market opportunity analysis",
        "Competitive positioning strategy",
        "Growth roadmap creation",
        "Implementation planning and support",
      ],
    },
    financial: {
      title: "Financial Advisory",
      description:
        "Our financial advisory services provide local businesses with the insights and guidance needed to optimize financial performance. We analyze your financial data, identify areas for improvement, and develop strategies to enhance profitability and ensure long-term financial health.",
      points: [
        "Financial performance analysis",
        "Cash flow optimization",
        "Profitability enhancement strategies",
        "Investment planning and analysis",
        "Financial risk management",
      ],
    },
    operational: {
      title: "Operational Excellence",
      description:
        "Our operational excellence services help local businesses streamline processes, reduce inefficiencies, and maximize resource utilization. We identify bottlenecks, implement best practices, and develop systems that enhance productivity and quality across your organization.",
      points: [
        "Process mapping and optimization",
        "Efficiency improvement strategies",
        "Resource allocation analysis",
        "Quality management systems",
        "Operational cost reduction",
      ],
    },
    market: {
      title: "Local Market Analysis",
      description:
        "Our local market analysis services provide businesses with deep insights into their specific market dynamics. We research customer demographics, analyze competitive landscapes, and identify untapped opportunities to help you make informed decisions and target your efforts effectively.",
      points: [
        "Customer demographic analysis",
        "Competitive landscape mapping",
        "Market opportunity identification",
        "Trend analysis and forecasting",
        "Customer behavior insights",
      ],
    },
    digital: {
      title: "Digital Transformation",
      description:
        "Our digital transformation services help local businesses leverage technology to improve operations, enhance customer experiences, and drive growth. We develop tailored digital strategies and implement cost-effective solutions that address your specific business needs.",
      points: [
        "Digital needs assessment",
        "Technology solution selection",
        "Implementation planning and support",
        "Digital marketing strategy",
        "Data analytics and insights",
      ],
    },
    risk: {
      title: "Risk Management",
      description:
        "Our risk management services help local businesses identify, assess, and mitigate potential threats to their operations and growth. We develop comprehensive risk management frameworks and contingency plans to protect your business interests and ensure continuity.",
      points: [
        "Risk identification and assessment",
        "Mitigation strategy development",
        "Compliance management",
        "Business continuity planning",
        "Crisis management protocols",
      ],
    },
  }

  const ConsultationForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle className="h-16 w-16 text-white mb-4" />
          <h3 className="text-xl font-light mb-2">Thank You!</h3>
          <p className="text-zinc-400 font-light max-w-md">
            Your consultation request has been submitted. We'll contact you shortly to discuss how we can help your
            business.
          </p>
          <Button
            type="button"
            onClick={closeModal}
            className="mt-6 bg-zinc-800 hover:bg-zinc-700 text-white rounded-none"
          >
            Close
          </Button>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-light text-zinc-300 leading-none">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-light text-zinc-300 leading-none">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-light text-zinc-300 leading-none">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-light text-zinc-300 leading-none">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
              placeholder="Enter your company name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="businessType" className="text-sm font-light text-zinc-300 leading-none">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              defaultValue=""
              required
              className="flex h-10 w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
            >
              <option value="" disabled>
                Select your business type
              </option>
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant</option>
              <option value="professional">Professional Services</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-light text-zinc-300 leading-none">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="flex min-h-[120px] w-full rounded-none border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
              placeholder="Describe your business challenges or goals"
            />
          </div>
          <Button
            type="submit"
            disabled={formSubmitting}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-none flex items-center justify-center"
          >
            {formSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                Processing...
              </span>
            ) : (
              "Request Consultation"
            )}
          </Button>
        </>
      )}
    </form>
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c1c] text-white">
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#1c1c1c]/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="S&Y Consulting" width={100} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden gap-8 md:flex">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-light tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-sm font-light tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-light tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Contact
            </button>
          </nav>
          <Button
            onClick={() => window.location.href = "https://syconsulting.co/client"}
            className="bg-zinc-800 text-white hover:bg-zinc-700 border-none"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Client Login
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-36 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block">Strategic</span>
                  <span className="block font-extralight text-zinc-400">Solutions for</span>
                  <span className="block">Local Excellence</span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 text-lg font-light leading-relaxed">
                  S&Y Consulting delivers tailored strategic guidance to help local businesses navigate challenges and
                  achieve sustainable growth.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-4">
                  <Button
                    onClick={() => openModal("consultation")}
                    size="lg"
                    className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-none"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("services")}
                    size="lg"
                    className="bg-transparent border border-zinc-600 text-white hover:bg-zinc-800 hover:border-white rounded-none"
                  >
                    Explore Services
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  fill
                  alt="Business professionals in a meeting"
                  className="object-cover"
                  priority
                  style={{ opacity: 0.7 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-20 md:py-28 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[800px] flex-col items-start space-y-4">
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Our Services</h2>
              <p className="max-w-[600px] text-zinc-400 text-lg font-light">
                Comprehensive consulting solutions tailored to the unique needs of local businesses
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Strategic Planning</h3>
                <p className="text-zinc-400 font-light">
                  Long-term vision development and execution roadmaps for sustainable local business growth.
                </p>
                <button
                  onClick={() => openModal("strategic")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Financial Advisory</h3>
                <p className="text-zinc-400 font-light">
                  Optimize financial performance with data-driven analysis and recommendations for local market
                  conditions.
                </p>
                <button
                  onClick={() => openModal("financial")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Operational Excellence</h3>
                <p className="text-zinc-400 font-light">
                  Streamline processes and enhance efficiency to maximize resources for small and medium businesses.
                </p>
                <button
                  onClick={() => openModal("operational")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Local Market Analysis</h3>
                <p className="text-zinc-400 font-light">
                  Comprehensive local market research and competitive intelligence for targeted growth.
                </p>
                <button
                  onClick={() => openModal("market")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Digital Transformation</h3>
                <p className="text-zinc-400 font-light">
                  Navigate technological change and implement cost-effective digital solutions for local businesses.
                </p>
                <button
                  onClick={() => openModal("digital")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group border-t border-zinc-800 pt-6 transition-all hover:border-white">
                <h3 className="text-xl font-light mb-3">Risk Management</h3>
                <p className="text-zinc-400 font-light">
                  Identify, assess, and mitigate risks specific to your local business environment.
                </p>
                <button
                  onClick={() => openModal("risk")}
                  className="mt-6 flex items-center text-sm text-zinc-500 group-hover:text-white hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full py-20 md:py-28 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[800px] flex-col items-start space-y-4 mb-12">
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Our Clients</h2>
              <p className="max-w-[600px] text-zinc-400 text-lg font-light">
                Trusted by leading local businesses across various industries
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-items-center">
                <div className="border border-zinc-800 p-8 w-full h-full flex items-center justify-center hover:border-zinc-600 transition-all">
                  <Image
                    src="/clients/wagonwheel.png"
                    width={140}
                    height={70}
                    alt="Client Logo"
                    className="h-12 w-auto opacity-70 transition-all hover:opacity-100"
                  />
                </div>
                <div className="border border-zinc-800 p-8 w-full h-full flex items-center justify-center hover:border-zinc-600 transition-all">
                  <Image
                    src="/clients/merrygorounds.png"
                    width={140}
                    height={70}
                    alt="Client Logo"
                    className="h-12 w-auto opacity-70 transition-all hover:opacity-100"
                  />
                </div>
                <div className="border border-zinc-800 p-8 w-full h-full flex items-center justify-center hover:border-zinc-600 transition-all">
                  <Image
                    src="/clients/sakura.png"
                    width={140}
                    height={70}
                    alt="Client Logo"
                    className="h-12 w-auto opacity-70 transition-all hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-20 md:py-28 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[800px] flex-col items-start space-y-4 mb-12">
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Our Team</h2>
              <p className="max-w-[600px] text-zinc-400 text-lg font-light">Meet the experts behind S&Y Consulting</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              <div className="group flex flex-col items-center text-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-800 mb-6">
                  <Image
                    src="/neil-pfp.png"
                    width={400}
                    height={400}
                    alt="Neil Shah"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light">Neil Shah</h3>
                <p className="text-zinc-400 font-light mb-4">Co-Founder & Managing Partner</p>
                <p className="text-zinc-500 font-light max-w-sm">
                As the prior TYE Chairman and Business Development Manager, Neil drives growth strategies that deliver real impact for local businesses.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-800 mb-6">
                  <Image
                    src="/leyuan-pfp.png"
                    width={400}
                    height={400}
                    alt="Leyuan Yin"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light">Leyuan Yin</h3>
                <p className="text-zinc-400 font-light mb-4">Co-Founder & Managing Partner</p>
                <p className="text-zinc-500 font-light max-w-sm">
                  Leyuan brings deep expertise in market analysis and digital transformation strategies to help local
                  businesses thrive in competitive environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className="w-full py-20 md:py-28 bg-[#1c1c1c] border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
                <p className="max-w-[600px] text-zinc-400 text-lg font-light">
                  Schedule a consultation with our team to discuss your business challenges and goals.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-zinc-400" />
                    <span>admin@syconsulting.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-zinc-400" />
                    <span>+1 (617) 704-3116</span>
                  </div>
                </div>
              </div>
              <div className="rounded-none border border-zinc-800 bg-zinc-900/30 p-8">
                <h3 className="text-xl font-light mb-6">Request a Consultation</h3>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>
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
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} S&Y Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Service Modals */}
      {activeModal && activeModal !== "consultation" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c1c1c] border border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-2xl font-light">{serviceInfo[activeModal as keyof typeof serviceInfo].title}</h3>
              <button onClick={closeModal} className="text-zinc-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-zinc-300 font-light mb-6">
                {serviceInfo[activeModal as keyof typeof serviceInfo].description}
              </p>
              <h4 className="text-lg font-light mb-4">Our Approach</h4>
              <ul className="space-y-3">
                {serviceInfo[activeModal as keyof typeof serviceInfo].points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="text-zinc-400">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Button onClick={closeModal} className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-none">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {activeModal === "consultation" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c1c1c] border border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-2xl font-light">Book a Consultation</h3>
              <button onClick={closeModal} className="text-zinc-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <ConsultationForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

