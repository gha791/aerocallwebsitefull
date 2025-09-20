
import { Logo } from "@/components/logo";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone as PhoneIcon, Twitter } from "lucide-react";
import Link from "next/link";

const quickLinks = [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Support" },
];

const services = [
    { href: "/#features", label: "Cloud Calling" },
    { href: "/#features", label: "Team Collaboration" },
    { href: "/#features", label: "Call Analytics" },
    { href: "/#features", label: "Number Porting" },
    { href: "/#features", label: "24/7 Support" },
];

const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo and Description */}
            <div className="space-y-4">
                <Logo />
                <p className="text-muted-foreground text-sm max-w-xs">
                    Transforming business communications for small to mid-sized companies across USA and Canada with modern cloud calling solutions.
                </p>
                <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <Link key={index} href={social.href} className="text-muted-foreground hover:text-foreground">
                                <Icon className="h-5 w-5" />
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {quickLinks.map((link) => (
                        <li key={`${link.href}-${link.label}`}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:underline underline-offset-4">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Services */}
            <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                    {services.map((service) => (
                        <li key={service.label}>
                            <Link href={service.href} className="text-sm text-muted-foreground hover:underline underline-offset-4">
                                {service.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                        <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                        <a href="tel:1-800-CONNECT" className="text-muted-foreground hover:text-foreground">1-800-AEROCALL</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a href="mailto:hello@aerocall.net" className="text-muted-foreground hover:text-foreground">hello@aerocall.net</a>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                        <p className="text-muted-foreground">
                            8206 LOUISIANA BLVD NE<br/>
                            STE A ALBUQUERQUE, NM 87113
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">&copy; 2025 AEROCALL. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">Terms of Service</Link>
                <Link href="/refund-policy" className="text-sm text-muted-foreground hover:underline underline-offset-4">Refund Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
