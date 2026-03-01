import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  DatabaseZap,
  Shuffle,
  Cloud,
  CalendarClock,
  TrendingUp,
  Shield,
  Users,
  ChevronRight,
  MessageSquare,
  Database,
  Target,
  Globe,
  Award,
  Cpu,
  Zap
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ETLDevelopersSection() {
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
                  Data Integration & Engineering
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ETL & Data Pipeline
                <br />
                <span className="text-[#0077b5]">Specialists</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert developers designing and maintaining robust data pipelines that extract,
                transform, and load data into enterprise data warehouses and data lakes—ensuring
                accuracy, scalability, and reliability for business intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with Experts
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Integration Projects
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
                  <DatabaseZap className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Engineering</h3>
                  <p className="text-gray-500 text-sm">Pipeline Excellence</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">300+ Data Pipelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">99.9% Data Accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Real-time Processing</span>
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
              icon={<Database />}
              value="300+"
              label="Data Pipelines Built"
              color="text-[#0077b5]"
            />
            <ImpactCard
              icon={<Shield />}
              value="99.9%"
              label="Data Accuracy"
              color="text-green-600"
            />
            <ImpactCard
              icon={<Zap />}
              value="70%"
              label="Processing Efficiency Gain"
              color="text-orange-600"
            />
            <ImpactCard
              icon={<Users />}
              value="50+"
              label="Enterprise Clients"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Integration Excellence</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  ETL developers build and optimize data integration workflows that move data from
                  disparate source systems into centralized analytics platforms. Their work ensures
                  data consistency, performance, and business-ready insights across on-premise and
                  cloud environments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team specializes in designing scalable, resilient data pipelines that handle
                  massive volumes of data with precision, enabling real-time analytics and driving
                  data-driven decision-making across organizations.
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
                  <p className="text-gray-600">Comprehensive ETL and data integration capabilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Shuffle size={20} />}
                  label="ETL Tools"
                  description="Informatica, Talend, SSIS, Apache NiFi"
                  level="Expert"
                />
                <SkillCard
                  icon={<DatabaseZap size={20} />}
                  label="SQL & Scripting"
                  description="Advanced SQL queries and stored procedures"
                  level="Expert"
                />
                <SkillCard
                  icon={<Database size={20} />}
                  label="Data Warehousing"
                  description="Star schema, snowflake, and dimensional modeling"
                  level="Advanced"
                />
                <SkillCard
                  icon={<CalendarClock size={20} />}
                  label="Job Orchestration"
                  description="Scheduling, monitoring, and error handling"
                  level="Expert"
                />
                <SkillCard
                  icon={<Cloud size={20} />}
                  label="Cloud Data Services"
                  description="AWS Glue, Azure Data Factory, Google Dataflow"
                  level="Advanced"
                />
                <SkillCard
                  icon={<Cpu size={20} />}
                  label="Performance Tuning"
                  description="Query optimization and pipeline performance"
                  level="Expert"
                />
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <TechStackItem
                  title="Informatica"
                  category="Enterprise ETL"
                  proficiency="Expert"
                />
                <TechStackItem
                  title="Apache NiFi"
                  category="Data Flow Automation"
                  proficiency="Advanced"
                />
                <TechStackItem
                  title="Azure Data Factory"
                  category="Cloud Integration"
                  proficiency="Expert"
                />
                <TechStackItem
                  title="AWS Glue"
                  category="Serverless ETL"
                  proficiency="Advanced"
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
              <h3 className="font-bold text-lg mb-4 text-gray-900">Start Your Data Journey</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006097] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Schedule Technical Consultation
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Request Data Integration Assessment
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
                <Globe className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Industries Served</h3>
              </div>
              <div className="space-y-3">
                {[
                  { industry: "Healthcare", projects: "42+" },
                  { industry: "Banking & Finance", projects: "55+" },
                  { industry: "E-commerce", projects: "38+" },
                  { industry: "Insurance", projects: "31+" },
                  { industry: "Manufacturing", projects: "46+" },
                  { industry: "Telecommunications", projects: "29+" }
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
                  <span className="text-sm text-gray-600">Informatica Certified Professional</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Azure Data Engineer</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">AWS Data Analytics</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Data Engineering Specialization</span>
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
            <DatabaseZap className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Build Scalable Data Foundations
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our certified ETL experts to create robust data pipelines that
              transform raw data into actionable insights and drive intelligent decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Shuffle size={20} />
                Explore ETL Roles
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Request Pipeline Demo
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

/* ---------- Tech Stack Item ---------- */
function TechStackItem({ title, category, proficiency }: { 
  title: string; 
  category: string;
  proficiency: string;
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-xs text-gray-600 mb-3">{category}</div>
      <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full inline-block">
        {proficiency}
      </div>
    </div>
  );
}