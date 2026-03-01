import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Workflow,
  Rocket,
  Users,
  Shield,
  TrendingUp,
  ChevronRight,
  MessageSquare,
  Briefcase,
  Database,
  Target,
  Zap,
  Award,
  BarChart,
  Globe
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SalesforceDevelopersSection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a1e0]/5 to-[#00a1e0]/5" />
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
                <div className="w-3 h-3 bg-[#00a1e0] rounded-full" />
                <span className="text-[#00a1e0] text-sm font-medium uppercase tracking-wider">
                  Salesforce CRM Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Salesforce
                <br />
                <span className="text-[#00a1e0]">Platform Experts</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert developers customizing and extending the Salesforce CRM platform by
                building scalable applications, automating business processes, and delivering
                seamless workflows tailored to enterprise business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#00a1e0] text-white font-semibold rounded-full hover:bg-[#0086c0] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with Experts
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Salesforce Projects
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
                <div className="w-16 h-16 bg-[#00a1e0]/10 rounded-full flex items-center justify-center">
                  <Cloud className="text-[#00a1e0]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Salesforce Certified</h3>
                  <p className="text-gray-500 text-sm">Platform Developers</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">150+ Salesforce Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">Certified Developers & Architects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">Full-cycle Implementation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <ImpactCard
              icon={<TrendingUp />}
              value="150+"
              label="Salesforce Projects"
              color="text-[#00a1e0]"
            />
            <ImpactCard
              icon={<Users />}
              value="85%"
              label="User Adoption Rate"
              color="text-green-600"
            />
            <ImpactCard
              icon={<Zap />}
              value="60%"
              label="Process Efficiency Gain"
              color="text-orange-600"
            />
            <ImpactCard
              icon={<Shield />}
              value="99.9%"
              label="Platform Uptime"
              color="text-purple-600"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Expertise</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Salesforce developers leverage Apex, Lightning Web Components, and platform
                  automation tools to enhance CRM functionality. They ensure secure integrations,
                  optimized user experiences, and reliable deployments across Salesforce
                  environments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team specializes in building custom solutions on the Salesforce platform
                  that drive business growth, improve customer relationships, and streamline
                  enterprise operations through tailored CRM implementations.
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
                  <p className="text-gray-600">Comprehensive Salesforce development capabilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Code2 size={20} />}
                  label="Apex Programming & SOQL"
                  description="Server-side programming and database queries"
                  level="Expert"
                  badgeColor="bg-blue-100 text-blue-700"
                />
                <SkillCard
                  icon={<Cloud size={20} />}
                  label="Lightning Web Components"
                  description="Modern JavaScript framework for Salesforce UI"
                  level="Expert"
                  badgeColor="bg-blue-100 text-blue-700"
                />
                <SkillCard
                  icon={<Rocket size={20} />}
                  label="REST & SOAP APIs"
                  description="System integrations and external connectivity"
                  level="Advanced"
                  badgeColor="bg-green-100 text-green-700"
                />
                <SkillCard
                  icon={<Workflow size={20} />}
                  label="Flows & Automation"
                  description="Process Builder, Workflow Rules, and Flows"
                  level="Expert"
                  badgeColor="bg-blue-100 text-blue-700"
                />
                <SkillCard
                  icon={<Database size={20} />}
                  label="Salesforce Data Model"
                  description="Custom objects, relationships, and data architecture"
                  level="Advanced"
                  badgeColor="bg-green-100 text-green-700"
                />
                <SkillCard
                  icon={<Shield size={20} />}
                  label="Security & Governance"
                  description="Sharing rules, profiles, and permission sets"
                  level="Advanced"
                  badgeColor="bg-green-100 text-green-700"
                />
              </div>
            </motion.div>

            {/* Cloud Expertise */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Salesforce Cloud Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <CloudCard
                  title="Sales Cloud"
                  description="Sales automation and CRM"
                  icon="SC"
                />
                <CloudCard
                  title="Service Cloud"
                  description="Customer service platform"
                  icon="SV"
                />
                <CloudCard
                  title="Marketing Cloud"
                  description="Digital marketing automation"
                  icon="MC"
                />
                <CloudCard
                  title="Experience Cloud"
                  description="Portals and digital experiences"
                  icon="EC"
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
              <h3 className="font-bold text-lg mb-4 text-gray-900">Get Started</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#00a1e0] text-white font-medium rounded-lg hover:bg-[#0086c0] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Schedule Discovery Call
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Request Salesforce Assessment
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  View Case Studies
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
                <Globe className="text-[#00a1e0]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Industries Served</h3>
              </div>
              <div className="space-y-3">
                {[
                  { industry: "Financial Services", projects: "42+" },
                  { industry: "Healthcare", projects: "28+" },
                  { industry: "Real Estate", projects: "35+" },
                  { industry: "Education", projects: "24+" },
                  { industry: "Technology", projects: "55+" },
                  { industry: "Manufacturing", projects: "32+" }
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
                <Award className="text-[#00a1e0]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">Platform Developer I & II</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">Salesforce Administrator</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">App Builder</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full" />
                  <span className="text-sm text-gray-600">Sales Cloud Consultant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#00a1e0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Cloud className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your CRM Experience
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our certified Salesforce experts to build custom solutions that
              enhance customer relationships and drive business growth on the world's #1 CRM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#00a1e0] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Code2 size={20} />
                Explore Developer Roles
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Request Solution Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Impact Card ---------- */
interface ImpactCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function ImpactCard({ icon, value, label, color }: ImpactCardProps) {
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
  badgeColor: string;
}

function SkillCard({ icon, label, description, level, badgeColor }: SkillCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#00a1e0]/30 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#00a1e0]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#00a1e0]">
            {icon}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900">{label}</h4>
            <span className={`text-xs px-2 py-1 rounded ${badgeColor}`}>
              {level}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Cloud Card ---------- */
function CloudCard({ title, description, icon }: { 
  title: string; 
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#00a1e0]/30 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00a1e0]/10 rounded-lg mb-3 mx-auto">
        <div className="text-[#00a1e0] font-bold">
          {icon}
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  );
}