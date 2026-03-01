"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Users, Target } from "lucide-react";
import aboutHero from "@/assets/team2.jpeg";
export default function AboutSection() {
  return (
    <>
      <Navbar />
      <div className="relative h-[450px] mt-20 w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="About Propll"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Propll.com LLC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 max-w-3xl text-lg"
          >
            Delivering comprehensive IT staffing and consulting solutions that
            empower businesses to innovate and grow.
          </motion.p>
        </div>
      </div>
      <section className="w-full bg-[#f4f8fc] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>

            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
              Propll.com LLC is a trusted partner in delivering comprehensive IT
              staffing and consulting solutions across diverse industries. We
              empower organizations to build high-performance teams by
              connecting them with precisely matched IT professionals.
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 mb-20"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              With a strong grasp of evolving technology trends and business
              demands, we bridge the gap between exceptional IT talent and
              businesses seeking innovation, agility, and sustainable growth.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Leveraging our expansive network of qualified IT experts and a
              deeply client-focused approach, we support organizations of all
              sizes — from agile start-ups to global enterprises — in finding
              the right talent, exactly when it’s needed.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our capabilities span software development, cloud computing,
              cybersecurity, data analytics, artificial intelligence, and
              beyond.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0A66C2] text-white rounded-3xl p-10 md:p-14 mb-20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="leading-relaxed text-white/90">
              Our mission is to empower businesses with tailored recruitment
              solutions and comprehensive IT services that drive growth,
              efficiency, and innovation. We are committed to fostering
              long-lasting partnerships and ensuring our clients excel in their
              industries.
            </p>
          </motion.div>

          {/* What We Do + Why Choose Us */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What We Do
              </h3>

              <ul className="space-y-6">
                <li>
                  <strong className="text-[#0A66C2]">
                    IT Recruitment Solutions:
                  </strong>{" "}
                  Identifying and placing highly qualified IT professionals
                  across multiple technology domains.
                </li>

                <li>
                  <strong className="text-[#0A66C2]">
                    Managed IT Services:
                  </strong>{" "}
                  Infrastructure management, cloud solutions, cybersecurity
                  consulting, and support.
                </li>

                <li>
                  <strong className="text-[#0A66C2]">Custom Solutions:</strong>{" "}
                  Tailored recruitment and IT services aligned with strategic
                  business goals.
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Why Choose Us
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Users className="text-[#0A66C2]" />
                  <div>
                    <h4 className="font-semibold">Industry Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Experienced recruiters and IT specialists with proven
                      delivery success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <ShieldCheck className="text-[#0A66C2]" />
                  <div>
                    <h4 className="font-semibold">Commitment to Quality</h4>
                    <p className="text-gray-600 text-sm">
                      Integrity and excellence across recruitment and IT
                      services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Globe className="text-[#0A66C2]" />
                  <div>
                    <h4 className="font-semibold">Global Reach</h4>
                    <p className="text-gray-600 text-sm">
                      Connecting talent and clients worldwide for the perfect
                      match.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Shaping the Future
            </h3>

            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Whether you are a business seeking top IT talent or a professional
              exploring new opportunities, Propll.com LLC is your trusted
              partner in building the future of technology.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
