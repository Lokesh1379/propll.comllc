import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  BarChart,
  Database,
  Zap,
  Layers,
  TrendingUp,
  Users,
  Shield,
  ChevronRight,
  MessageSquare,
  Target,
  Globe,
  Award,
  PieChart,
  Cpu
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PowerBIDevelopersSection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2c811]/5 to-[#f2c811]/5" />
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
                <div className="w-3 h-3 bg-[#f2c811] rounded-full" />
                <span className="text-[#f2c811] text-sm font-medium uppercase tracking-wider">
                  Business Intelligence & Analytics
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Power BI
                <br />
                <span className="text-[#f2c811]">Analytics Experts</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert developers transforming complex data into interactive dashboards and
                actionable business intelligence, enabling leaders to make confident, data-driven
                decisions that drive growth and efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#f2c811] text-gray-900 font-semibold rounded-full hover:bg-[#d9b410] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with Analysts
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Analytics Portfolio
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
                <div className="w-16 h-16 bg-[#f2c811]/10 rounded-full flex items-center justify-center">
                  <BarChart className="text-[#f2c811]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data-Driven Impact</h3>
                  <p className="text-gray-500 text-sm">Actionable Insights</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">200+ Dashboard Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">40% Faster Decision Making</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">Certified Power BI Experts</span>
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
              icon={<BarChart />}
              value="200+"
              label="Dashboard Projects"
              color="text-[#f2c811]"
            />
            <ImpactCard
              icon={<TrendingUp />}
              value="40%"
              label="Faster Decision Making"
              color="text-green-600"
            />
            <ImpactCard
              icon={<Users />}
              value="95%"
              label="Stakeholder Satisfaction"
              color="text-blue-600"
            />
            <ImpactCard
              icon={<Shield />}
              value="100%"
              label="Data Security Compliance"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics Expertise</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Power BI developers work closely with business stakeholders to gather
                  requirements and convert raw data into meaningful visual insights. They design
                  scalable data models, optimize performance, and publish secure reports using
                  the Power BI Service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team specializes in building intuitive, interactive dashboards that
                  transform complex data into actionable intelligence, empowering organizations
                  to uncover insights, identify trends, and make informed strategic decisions.
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
                  <p className="text-gray-600">Comprehensive Power BI development capabilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={<BarChart size={20} />}
                  label="DAX & Power Query (M)"
                  description="Advanced calculations and data transformation"
                  level="Expert"
                />
                <SkillCard
                  icon={<Layers size={20} />}
                  label="Data Modeling"
                  description="Star schema and relationship design"
                  level="Expert"
                />
                <SkillCard
                  icon={<Database size={20} />}
                  label="Data Source Integration"
                  description="SQL, Excel, Azure, and cloud sources"
                  level="Advanced"
                />
                <SkillCard
                  icon={<Zap size={20} />}
                  label="Power BI Service"
                  description="Workspaces, gateways, and publishing"
                  level="Expert"
                />
                <SkillCard
                  icon={<Cpu size={20} />}
                  label="Performance Optimization"
                  description="Query optimization and dashboard tuning"
                  level="Advanced"
                />
                <SkillCard
                  icon={<PieChart size={20} />}
                  label="Visualization Design"
                  description="Custom visuals and user-friendly interfaces"
                  level="Expert"
                />
              </div>
            </motion.div>

            {/* Data Sources */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Data Sources</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <DataSource
                  title="Azure Services"
                  description="Synapse, SQL DB, Blob Storage"
                  icon="AZ"
                />
                <DataSource
                  title="SQL Databases"
                  description="SQL Server, MySQL, PostgreSQL"
                  icon="SQL"
                />
                <DataSource
                  title="Cloud Platforms"
                  description="AWS, Google Cloud, Snowflake"
                  icon="CL"
                />
                <DataSource
                  title="Business Apps"
                  description="Salesforce, Dynamics, SAP"
                  icon="BA"
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
              <h3 className="font-bold text-lg mb-4 text-gray-900">Get Analytics Insights</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#f2c811] text-gray-900 font-medium rounded-lg hover:bg-[#d9b410] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Schedule Demo
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Request Analytics Assessment
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  View Dashboard Examples
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
                <Globe className="text-[#f2c811]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Industries Served</h3>
              </div>
              <div className="space-y-3">
                {[
                  { industry: "Retail & E-commerce", projects: "45+" },
                  { industry: "Manufacturing", projects: "38+" },
                  { industry: "Financial Services", projects: "52+" },
                  { industry: "Healthcare", projects: "31+" },
                  { industry: "Telecommunications", projects: "28+" },
                  { industry: "Government", projects: "24+" }
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
                <Award className="text-[#f2c811]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">PL-300: Power BI Data Analyst</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">Azure Data Fundamentals</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">Data Analysis & Visualization</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#f2c811] rounded-full" />
                  <span className="text-sm text-gray-600">Business Intelligence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#f2c811] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TrendingUp className="mx-auto mb-6 text-gray-900" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Data into Decisions
            </h2>
            <p className="text-lg text-gray-900/90 mb-8 max-w-2xl mx-auto">
              Partner with our certified Power BI experts to build interactive dashboards that
              provide actionable insights and drive data-informed business strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                <Database size={20} />
                Explore Analytics Roles
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900/10 transition-all duration-300">
                Request Dashboard Demo
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
    Expert: "bg-[#f2c811]/10 text-[#f2c811]",
    Advanced: "bg-green-100 text-green-700",
    Intermediate: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#f2c811]/30 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#f2c811]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#f2c811]">
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

/* ---------- Data Source ---------- */
function DataSource({ title, description, icon }: { 
  title: string; 
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#f2c811]/30 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f2c811]/10 rounded-lg mb-3 mx-auto">
        <div className="text-[#f2c811] font-bold">
          {icon}
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  );
}