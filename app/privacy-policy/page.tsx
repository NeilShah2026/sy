"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl mb-8">Privacy Policy</h1>
            <p className="text-zinc-400 mb-8">Last Updated: April 2, 2025</p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">1. Introduction</h2>
                <p className="text-zinc-300 mb-4">
                  S&Y Consulting ("we," "our," or "us") respects your privacy and is committed to protecting your
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our consulting services.
                </p>
                <p className="text-zinc-300">
                  Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
                  you have read, understood, and agree to be bound by all the terms outlined in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">2. Information We Collect</h2>
                <h3 className="text-lg font-light mb-2">Personal Information</h3>
                <p className="text-zinc-300 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                  <li>Fill out forms on our website</li>
                  <li>Register for consultations or meetings</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                  <li>Provide feedback or contact us</li>
                </ul>
                <p className="text-zinc-300 mb-4">This information may include:</p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and job title</li>
                  <li>Business address</li>
                  <li>Information about your business needs and challenges</li>
                </ul>

                <h3 className="text-lg font-light mb-2">Automatically Collected Information</h3>
                <p className="text-zinc-300 mb-4">
                  When you visit our website, we may automatically collect certain information about your device and
                  usage patterns. This information may include:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on those pages</li>
                  <li>Referring website or source</li>
                  <li>Geographic location (country or city level)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">
                  3. How We Use Your Information
                </h2>
                <p className="text-zinc-300 mb-4">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing and fulfilling your requests</li>
                  <li>Sending administrative information, such as confirmations and updates</li>
                  <li>Sending marketing communications, if you have opted in</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Protecting against unauthorized access and other security issues</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">
                  4. Cookies and Similar Technologies
                </h2>
                <p className="text-zinc-300 mb-4">
                  We use cookies and similar tracking technologies to collect and track information about your browsing
                  activities on our website. Cookies are small text files that are stored on your device when you visit
                  a website.
                </p>
                <p className="text-zinc-300 mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2 mb-4">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytical cookies: Help us understand how visitors interact with our website</li>
                  <li>Preference cookies: Allow the website to remember your preferences</li>
                  <li>Marketing cookies: Track your browsing habits to deliver targeted advertising</li>
                </ul>
                <p className="text-zinc-300">
                  You can control cookies through your browser settings. However, disabling certain cookies may limit
                  your ability to use some features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="text-zinc-300 mb-4">
                  We may share your information with third parties in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party vendors,
                    consultants, and other service providers who need access to such information to carry out work on
                    our behalf.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or
                    a portion of our assets, your information may be transferred as part of that transaction.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or
                    in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Protection of Rights:</strong> We may disclose your information to protect the rights,
                    property, or safety of S&Y Consulting, our clients, or others.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">6. Data Security</h2>
                <p className="text-zinc-300 mb-4">
                  We implement appropriate technical and organizational measures to protect the security of your
                  personal information. However, please be aware that no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-zinc-300">
                  We limit access to your personal information to those employees, agents, contractors, and third
                  parties who have a business need to know. They will only process your personal information on our
                  instructions, and they are subject to a duty of confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">7. Your Rights</h2>
                <p className="text-zinc-300 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate or incomplete information</li>
                  <li>The right to erasure (the "right to be forgotten")</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">8. Children's Privacy</h2>
                <p className="text-zinc-300">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If we learn that we have collected personal information from a
                  child, we will take steps to delete that information as soon as possible.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-zinc-300">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">10. Contact Us</h2>
                <p className="text-zinc-300 mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact
                  us at:
                </p>
                <div className="text-zinc-300">
                  <p>S&Y Consulting</p>
                  <p>123 Business Avenue</p>
                  <p>New York, NY 10001</p>
                  <p>Email: privacy@syconsulting.co</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </section>
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

