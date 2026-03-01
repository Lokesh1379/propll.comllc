import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Cpu,
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  ChevronRight,
  Building,
  Globe,
  Target,
  Clock,
  MessageSquare,
  Linkedin
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ITConsultantsSection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b5]/5 to-[#00a0dc]/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#0077b5] rounded-full" />
                <span className="text-[#0077b5] text-sm font-medium uppercase tracking-wider">
                  Professional Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Strategic
                <br />
                <span className="text-[#0077b5]">IT Consulting</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert technology advisors guiding enterprises through digital transformation,
                system optimization, and scalable infrastructure design aligned with business goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Request Consultation
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3 bg-white p-8 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0077b5]/10 rounded-full flex items-center justify-center">
                  <Briefcase className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Enterprise Network</h3>
                  <p className="text-gray-500 text-sm">Trusted by 200+ companies</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Fortune 500 clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">15+ years industry experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Global delivery centers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <StatCard
              icon={<TrendingUp />}
              value="45%"
              label="Average Cost Reduction"
              color="text-green-600"
            />
            <StatCard
              icon={<Shield />}
              value="99.9%"
              label="Uptime Improvement"
              color="text-blue-600"
            />
            <StatCard
              icon={<Users />}
              value="200+"
              label="Enterprise Clients"
              color="text-purple-600"
            />
            <StatCard
              icon={<Clock />}
              value="3.2x"
              label="Performance Increase"
              color="text-orange-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Header */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Services</h2>
                  <p className="text-gray-600">Strategic IT consulting services designed for enterprise transformation</p>
                </div>
                <button className="hidden lg:flex items-center gap-2 text-[#0077b5] hover:text-[#006097] font-medium">
                  View All Services
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Service Cards */}
            <div className="space-y-6">
              <ServiceCard
                icon={<Lightbulb size={24} />}
                title="Technology Strategy & Advisory"
                description="Comprehensive technology roadmaps, digital transformation strategies, and IT governance frameworks designed to align technology investments with business objectives."
                expertise={[
                  "Digital Transformation",
                  "IT Governance",
                  "Technology Roadmapping",
                  "Vendor Selection"
                ]}
                clients={["Fortune 500", "Mid-market", "Startups"]}
              />

              <ServiceCard
                icon={<Cpu size={24} />}
                title="Systems & Architecture Consulting"
                description="End-to-end architecture design, system optimization, and infrastructure modernization services that enhance performance, scalability, and operational efficiency."
                expertise={[
                  "Cloud Architecture",
                  "System Integration",
                  "Infrastructure Design",
                  "Performance Optimization"
                ]}
                clients={["Enterprise", "Government", "Healthcare"]}
              />
            </div>

            {/* Featured Clients */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Clients</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Microsoft", color: "bg-green-500" },
                  { name: "IBM", color: "bg-blue-500" },
                  { name: "Deloitte", color: "bg-green-600" },
                  { name: "Accenture", color: "bg-red-500" }
                ].map((client, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}>
                      {client.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800">{client.name}</span>
                    <p className="text-sm text-gray-500">Strategic partner</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Get Started Card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">Get Started</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006097] transition-colors">
                  Schedule Discovery Call
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Download Capabilities PDF
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  View Consultant Profiles
                </button>
              </div>
            </motion.div>

            {/* Industry Expertise */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">Industry Expertise</h3>
              <div className="space-y-3">
                {[
                  { industry: "Finance & Banking", projects: "25+" },
                  { industry: "Healthcare", projects: "18+" },
                  { industry: "Retail & E-commerce", projects: "32+" },
                  { industry: "Manufacturing", projects: "15+" },
                  { industry: "Technology", projects: "40+" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="font-medium text-gray-700">{item.industry}</span>
                    <span className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded">{item.projects}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Consultant Network */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Consultant Network</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Senior Consultants</span>
                  <span className="font-medium">85+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Technical Architects</span>
                  <span className="font-medium">45+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry Specialists</span>
                  <span className="font-medium">60+</span>
                </div>
              </div>
              <button className="w-full mt-6 text-[#0077b5] hover:text-[#006097] font-medium text-sm flex items-center justify-center gap-1">
                Connect with Experts
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#0077b5] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Briefcase className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Technology Strategy
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our expert consultants to build a technology foundation that drives innovation and business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <MessageSquare size={20} />
                Start Conversation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Service Card ---------- */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  expertise: string[];
  clients: string[];
}

function ServiceCard({ icon, title, description, expertise, clients }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="text-[#0077b5]">
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target size={16} />
                  Key Expertise
                </h4>
                <div className="space-y-2">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building size={16} />
                  Client Types
                </h4>
                <div className="space-y-2">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span className="text-sm text-gray-700">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-8 py-4 bg-gray-50 border-t flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>Typically 8-12 week engagements</span>
        </div>
        <button className="px-6 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#006097] transition-colors text-sm font-medium flex items-center gap-2">
          Learn More
          <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

/* ---------- Stat Card ---------- */
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
        <div className={color}>
          {icon}
        </div>
      </div>
      <div className={`text-3xl font-bold mb-2 ${color}`}>
        {value}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}