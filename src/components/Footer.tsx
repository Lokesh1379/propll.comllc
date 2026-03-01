import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-navy w-screen overflow-hidden text-white"
    >
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-electric to-teal rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold">Propll LLC</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Empowering enterprises with innovative technology solutions that
                drive digital transformation and sustainable growth.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">
                Core Technologies
              </h4>
              <ul className="space-y-3">
                {[
                  "Software Development",
                  "AI Engineering",
                  "Cloud Strategy",
                  "Cybersecurity",
                  "Digital Transformation",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="core-technologies"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "Services", href: "services" },
                  { label: "About Us", href: "about-us" },
                  { label: "Careers", href: "carrers-at-propll" },
                  { label: "Contact Us", href: "contact-us" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-white/60 text-sm">hr@propll.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-white/60 text-sm">
                    +1 (512) 9753-668{" "}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-white/60 text-sm">
                    548 Market Place, 854707,
                    <br />
                    San Francisco, CA 94104
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Propll LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
