"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl mb-8">Terms of Service</h1>
            <p className="text-zinc-400 mb-8">Last Updated: April 2, 2025</p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">1. Introduction</h2>
                <p className="text-zinc-300 mb-4">
                  Welcome to S&Y Consulting. These Terms of Service ("Terms") govern your access to and use of our
                  website and services. By accessing or using our services, you agree to be bound by these Terms and our
                  Privacy Policy.
                </p>
                <p className="text-zinc-300">
                  Please read these Terms carefully before using our services. If you do not agree to these Terms, you
                  may not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">2. Definitions</h2>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>
                    <strong>"Services"</strong> refers to the consulting services, website, content, and other offerings
                    provided by S&Y Consulting.
                  </li>
                  <li>
                    <strong>"User," "you," and "your"</strong> refer to the individual or entity accessing or using our
                    Services.
                  </li>
                  <li>
                    <strong>"We," "us," and "our"</strong> refer to S&Y Consulting.
                  </li>
                  <li>
                    <strong>"Content"</strong> refers to all text, images, videos, documents, and other materials
                    available through our Services.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">3. Services Description</h2>
                <p className="text-zinc-300 mb-4">
                  S&Y Consulting provides strategic consulting services to local businesses, including but not limited
                  to:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Strategic planning and business development</li>
                  <li>Financial advisory services</li>
                  <li>Operational excellence consulting</li>
                  <li>Local market analysis</li>
                  <li>Digital transformation guidance</li>
                  <li>Risk management consulting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">4. User Accounts</h2>
                <p className="text-zinc-300 mb-4">
                  Some of our Services may require you to create an account. When you create an account, you agree to:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Be responsible for all activities that occur under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">5. User Responsibilities</h2>
                <p className="text-zinc-300 mb-4">When using our Services, you agree to:</p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not engage in any activity that could harm our Services or other users</li>
                  <li>Not use our Services for any illegal or unauthorized purpose</li>
                  <li>
                    Not attempt to gain unauthorized access to any portion of our Services or any related systems or
                    networks
                  </li>
                  <li>
                    Not use our Services to transmit any viruses, malware, or other harmful computer code, files, or
                    programs
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">6. Intellectual Property</h2>
                <p className="text-zinc-300 mb-4">
                  All content, features, and functionality of our Services, including but not limited to text, graphics,
                  logos, icons, images, audio clips, digital downloads, data compilations, and software, are the
                  exclusive property of S&Y Consulting or our licensors and are protected by copyright, trademark, and
                  other intellectual property laws.
                </p>
                <p className="text-zinc-300 mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any of the material on our Services, except as
                  follows:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>
                    Your computer may temporarily store copies of such materials incidental to your accessing and
                    viewing those materials
                  </li>
                  <li>
                    You may store files that are automatically cached by your web browser for display enhancement
                    purposes
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of pages of the website for your own
                    personal, non-commercial use and not for further reproduction, publication, or distribution
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">7. Confidentiality</h2>
                <p className="text-zinc-300 mb-4">
                  During the course of our Services, we may exchange confidential information. You agree to:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Maintain the confidentiality of any proprietary information shared by us</li>
                  <li>Not disclose confidential information to any third party without our prior written consent</li>
                  <li>Use confidential information only for the purpose of receiving our Services</li>
                  <li>Take reasonable measures to protect the confidentiality of such information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">8. Payment Terms</h2>
                <p className="text-zinc-300 mb-4">For paid Services, the following terms apply:</p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Fees are as stated at the time of engagement or as otherwise agreed in writing</li>
                  <li>Payment is due according to the terms specified in your service agreement or invoice</li>
                  <li>We reserve the right to change our fees with reasonable notice</li>
                  <li>
                    You are responsible for all taxes associated with the Services, except for taxes based on our net
                    income
                  </li>
                  <li>Late payments may incur interest charges as permitted by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">9. Limitation of Liability</h2>
                <p className="text-zinc-300 mb-4">
                  To the maximum extent permitted by law, S&Y Consulting and its officers, directors, employees, and
                  agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including but not limited to, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from:
                </p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                  <li>Your access to or use of or inability to access or use the Services</li>
                  <li>Any conduct or content of any third party on the Services</li>
                  <li>Any content obtained from the Services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="text-zinc-300 mt-4">
                  In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for
                  accessing or using our Services during the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">10. Disclaimer of Warranties</h2>
                <p className="text-zinc-300 mb-4">
                  Our Services are provided on an "as is" and "as available" basis, without any warranties of any kind,
                  either express or implied. We disclaim all warranties, including but not limited to, implied
                  warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className="text-zinc-300">
                  We do not warrant that our Services will be uninterrupted, timely, secure, or error-free, or that any
                  defects will be corrected. We do not warrant any specific outcomes or results from the use of our
                  Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">11. Indemnification</h2>
                <p className="text-zinc-300">
                  You agree to defend, indemnify, and hold harmless S&Y Consulting and its officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses,
                  costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
                  violation of these Terms or your use of the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">12. Termination</h2>
                <p className="text-zinc-300 mb-4">
                  We may terminate or suspend your access to our Services immediately, without prior notice or
                  liability, for any reason, including but not limited to a breach of these Terms.
                </p>
                <p className="text-zinc-300">
                  Upon termination, your right to use the Services will immediately cease. All provisions of these Terms
                  which by their nature should survive termination shall survive termination, including, without
                  limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">13. Governing Law</h2>
                <p className="text-zinc-300">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York,
                  without regard to its conflict of law provisions. Any legal action or proceeding arising out of or
                  relating to these Terms shall be brought exclusively in the federal or state courts located in New
                  York County, New York, and you consent to the personal jurisdiction of such courts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">14. Changes to Terms</h2>
                <p className="text-zinc-300">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any
                  material changes by posting the new Terms on this page and updating the "Last Updated" date. Your
                  continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-light mb-4 border-b border-zinc-800 pb-2">15. Contact Information</h2>
                <p className="text-zinc-300 mb-4">If you have any questions about these Terms, please contact us at:</p>
                <div className="text-zinc-300">
                  <p>S&Y Consulting</p>
                  <p>123 Business Avenue</p>
                  <p>New York, NY 10001</p>
                  <p>Email: legal@syconsulting.co</p>
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

