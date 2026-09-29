import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Ventures", href: "#ventures" },
    { label: "Iron Vault", href: "#ventures" },
  ],
  company: [
    { label: "Company", href: "#company" },
    { label: "Business Contact", href: "#business-contact" },
    { label: "Call 888-368-2502", href: "tel:8883682502" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-semibold text-zinc-100">
              IVT Media Group
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Media, technology, automation, and ventures built for the digital world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 grid gap-6 border-t border-zinc-900 pt-8 text-sm text-zinc-400 md:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold text-zinc-100">Phone and email</p>
            <p><a href="tel:+15203555616" className="hover:text-zinc-100">520-355-5616</a> · <a href="mailto:chris@ivtmediagroup.com" className="hover:text-zinc-100">chris@ivtmediagroup.com</a></p>
            <p><a href="tel:+18883682502" className="hover:text-zinc-100">888-368-2502</a> · <a href="mailto:support@ivtmediagroup.com" className="hover:text-zinc-100">support@ivtmediagroup.com</a></p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-zinc-100">Business mailing address</p>
            <address className="not-italic">5830 East 2nd Street<br />Suite 7000 #36157<br />Casper, Wyoming 82609</address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} IVT Media Group LLC. All rights reserved.{" "}
            <span className="text-zinc-500">888-368-2502</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
