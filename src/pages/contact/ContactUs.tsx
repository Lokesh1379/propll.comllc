import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Building } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  const linkedinBlue = "#0A66C2";

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
            alt="Modern office building"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight"
          >
            Let’s Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-white max-w-xl leading-relaxed"
          >
            Reach out to discuss IT staffing, consulting, or custom technology
            solutions.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-6"
          />
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Our Office</h2>

            <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition">
              <div className="flex items-start gap-4">
                <Building className="mt-1" style={{ color: linkedinBlue }} />
                <div>
                  <p className="font-semibold text-lg">Propll Headquarters</p>
                  <div className="flex items-start gap-3 mt-3 text-slate-400">
                    <MapPin className="mt-1" style={{ color: linkedinBlue }} />
                    <p className="leading-relaxed">
                      548 Market Place
                      <br />
                      San Francisco, CA 94104
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Contact Details</h2>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 transition">
                <Mail className="mt-1" style={{ color: linkedinBlue }} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:contact@propll.com"
                    className="text-blue-400 hover:underline font-medium"
                  >
                    contact@propll.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 transition">
                <Phone className="mt-1" style={{ color: linkedinBlue }} />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href="tel:+14155550123"
                    className="text-blue-400 hover:underline font-medium"
                  >
                    +1 (415) 555-0123
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAP */}
        <div className="mt-14 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-lg">
          <div className="p-4 border-b border-slate-800 flex items-center gap-2 font-semibold">
            <MapPin style={{ color: linkedinBlue }} />
            Our Location
          </div>

          <div className="h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225116434582!2d-122.4002977!3d37.7905147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c75c8d795%3A0x8a6a11d9d776c2c9!2s548%20Market%20St%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1690834371555!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
