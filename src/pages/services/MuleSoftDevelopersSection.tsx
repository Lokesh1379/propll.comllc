import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Plug,
  Share2,
  Cloud,
  Database,
  Server,
  Cpu,
  BarChart,
  Shield,
  ChevronRight,
  MessageSquare,
  Briefcase,
  Users,
  Globe,
  Target,
  Zap,
  Award
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MuleSoftDevelopersSection() {
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
                  Integration & API Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                MuleSoft
                <br />
                <span className="text-[#0077b5]">Integration Experts</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Specialized developers building robust enterprise integrations using MuleSoft's
                Anypoint Platform, enabling seamless data exchange, system connectivity, and
                process automation across complex IT landscapes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with Experts
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Integration Portfolio
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
                  <Plug className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">MuleSoft Certified</h3>
                  <p className="text-gray-500 text-sm">Expert Developers</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">250+ Integrations Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Certified MuleSoft Architects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <CapabilityCard
              icon={<Server />}
              value="250+"
              label="Integrations Delivered"
              color="text-blue-600"
            />
            <CapabilityCard
              icon={<Shield />}
              value="99.9%"
              label="Uptime Guarantee"
              color="text-green-600"
            />
            <CapabilityCard
              icon={<Users />}
              value="40+"
              label="MuleSoft Experts"
              color="text-purple-600"
            />
            <CapabilityCard
              icon={<Zap />}
              value="65%"
              label="Process Efficiency Gain"
              color="text-orange-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Expertise */}
          <div className="lg:col-span-2 space-y-8">
            {/* Core Overview */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Expertise</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our MuleSoft developers design, develop, test, and deploy APIs and integration
                  flows that connect diverse enterprise systems. Their work enables scalable
                  API-led connectivity across cloud and on-premise environments, improving
                  operational efficiency and business agility.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With deep expertise in MuleSoft's Anypoint Platform, our team delivers secure,
                  reliable integrations that modernize legacy systems, streamline data flow, and
                  accelerate digital transformation initiatives.
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Key Skills & Expertise</h3>
                  <p className="text-gray-600">Specialized capabilities in MuleSoft development</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Share2 size={20} />}
                  label="API-led Connectivity"
                  description="Design and implement scalable API architectures"
                  level="Expert"
                />
                <SkillCard
                  icon={<Cpu size={20} />}
                  label="RAML / API Design"
                  description="RESTful API modeling and specification"
                  level="Expert"
                />
                <SkillCard
                  icon={<Database size={20} />}
                  label="DataWeave Scripting"
                  description="Advanced data transformation and mapping"
                  level="Advanced"
                />
                <SkillCard
                  icon={<Plug size={20} />}
                  label="SOAP & REST Integrations"
                  description="Web service integrations and protocols"
                  level="Expert"
                />
                <SkillCard
                  icon={<Server size={20} />}
                  label="System Integrations"
                  description="Salesforce, SAP, Databases, and more"
                  level="Advanced"
                />
                <SkillCard
                  icon={<Cloud size={20} />}
                  label="Anypoint Platform"
                  description="Studio, CloudHub, and Runtime Manager"
                  level="Expert"
                />
              </div>
            </motion.div>

            {/* Platform Expertise */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">MuleSoft Platform Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <PlatformComponent
                  title="Anypoint Studio"
                  description="Development IDE for Mule applications"
                  status="Expert"
                />
                <PlatformComponent
                  title="API Manager"
                  description="API lifecycle management and governance"
                  status="Advanced"
                />
                <PlatformComponent
                  title="CloudHub"
                  description="Cloud-based integration platform"
                  status="Expert"
                />
                <PlatformComponent
                  title="Runtime Manager"
                  description="Deployment and management console"
                  status="Advanced"
                />
                <PlatformComponent
                  title="Exchange"
                  description="API and asset sharing platform"
                  status="Intermediate"
                />
                <PlatformComponent
                  title="Monitoring"
                  description="Performance and health monitoring"
                  status="Advanced"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Connect */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">Connect with Our Team</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006097] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Schedule Technical Consultation
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Request Integration Assessment
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  View Integration Case Studies
                </button>
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Industries Served</h3>
              </div>
              <div className="space-y-3">
                {[
                  { industry: "Finance & Banking", projects: "45+" },
                  { industry: "Healthcare", projects: "32+" },
                  { industry: "Retail & E-commerce", projects: "28+" },
                  { industry: "Manufacturing", projects: "36+" },
                  { industry: "Technology", projects: "52+" },
                  { industry: "Logistics", projects: "24+" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="font-medium text-gray-700">{item.industry}</span>
                    <span className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded">{item.projects}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">MuleSoft Certified Developer</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">MuleSoft Certified Architect</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">API Design & Management</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Integration & Platform</span>
                </div>
              </div>
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
            <Plug className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modernize Your Integration Landscape
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our certified MuleSoft experts to build scalable, secure integrations
              that connect your enterprise systems and accelerate digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Server size={20} />
                Explore Integration Solutions
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                View Developer Roles
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Capability Card ---------- */
interface CapabilityCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function CapabilityCard({ icon, value, label, color }: CapabilityCardProps) {
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

/* ---------- Skill Card ---------- */
interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  level: string;
}

function SkillCard({ icon, label, description, level }: SkillCardProps) {
  const levelColors = {
    Expert: "bg-blue-100 text-blue-700",
    Advanced: "bg-green-100 text-green-700",
    Intermediate: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#0077b5]">
            {icon}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900">{label}</h4>
            <span className={`text-xs px-2 py-1 rounded ${levelColors[level as keyof typeof levelColors]}`}>
              {level}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Platform Component ---------- */
function PlatformComponent({ title, description, status }: { 
  title: string; 
  description: string;
  status: string;
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-xs text-gray-600 mb-3">{description}</div>
      <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full inline-block">
        {status}
      </div>
    </div>
  );
}