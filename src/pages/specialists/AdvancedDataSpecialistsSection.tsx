import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Map,
  Layers,
  Database,
  Cloud,
  Shield,
  Workflow,
  Target,
  TrendingUp,
  Users,
  ChevronRight,
  MessageSquare,
  Globe,
  Award,
  Cpu,
  BarChart,
  Zap
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AdvancedDataSpecialistsSection() {
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
                  Specialized Data Engineering
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Advanced
                <br />
                <span className="text-[#0077b5]">Data Specialists</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert data engineers specializing in geospatial intelligence platforms and
                enterprise-scale analytical systems to deliver actionable insights from complex,
                mission-critical datasets.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with Experts
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Data Solutions
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
                  <Database className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Specialized Expertise</h3>
                  <p className="text-gray-500 text-sm">Mission-critical data systems</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">GIS & Geospatial Intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Palantir Foundry Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Enterprise Data Integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capability Stats */}
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
              icon={<Target />}
              value="200+"
              label="Geospatial Projects"
              color="text-[#0077b5]"
            />
            <CapabilityCard
              icon={<Shield />}
              value="99.9%"
              label="Data Accuracy"
              color="text-green-600"
            />
            <CapabilityCard
              icon={<TrendingUp />}
              value="60%"
              label="Insight Delivery Speed"
              color="text-orange-600"
            />
            <CapabilityCard
              icon={<Users />}
              value="40+"
              label="Specialized Engineers"
              color="text-purple-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* GIS Data Engineers */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white p-8 rounded-xl shadow-sm border mb-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#0077b5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Map className="text-[#0077b5]" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  GIS Data Engineers
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  GIS Data Engineers specialize in collecting, transforming, and managing geospatial
                  data to support mapping, location intelligence, and spatial analysis. They work
                  with both traditional data pipelines and spatial data formats across cloud and
                  on-premise environments.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap size={20} className="text-[#0077b5]" />
                  Key Skills & Tools
                </h3>
                <div className="space-y-4">
                  <SkillItem
                    icon={<Workflow size={18} />}
                    label="Programming"
                    description="Python, SQL, JavaScript"
                    level="Expert"
                  />
                  <SkillItem
                    icon={<Map size={18} />}
                    label="GIS Platforms"
                    description="ArcGIS, QGIS, GDAL, GeoPandas"
                    level="Expert"
                  />
                  <SkillItem
                    icon={<Layers size={18} />}
                    label="Data Pipelines"
                    description="Airflow, Spark, ETL Frameworks"
                    level="Advanced"
                  />
                  <SkillItem
                    icon={<Database size={18} />}
                    label="Spatial Databases"
                    description="PostGIS, Oracle Spatial, BigQuery GIS"
                    level="Expert"
                  />
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Target size={20} className="text-[#0077b5]" />
                  Core Responsibilities
                </h3>
                <ul className="space-y-3">
                  {[
                    "Design scalable geospatial data pipelines",
                    "Integrate GPS, IoT, and remote sensing data",
                    "Optimize queries for large spatial datasets",
                    "Collaborate with GIS analysts and data scientists",
                    "Ensure spatial data accuracy and compliance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Globe size={20} className="text-[#0077b5]" />
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Urban Planning", "Agriculture", "Telecom", "Transportation",
                    "Environmental Science", "Defense", "Real Estate"
                  ].map((industry, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Palantir Foundry Engineers */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#0077b5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="text-[#0077b5]" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Palantir Foundry Engineers
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-4xl">
                  Specialized engineers building large-scale data integration and analytical
                  workflows using the Palantir Foundry platform—commonly for government and
                  enterprise organizations managing complex, sensitive datasets.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Cpu size={20} className="text-[#0077b5]" />
                  Platform Expertise
                </h3>
                <div className="space-y-4">
                  <SkillItem
                    icon={<Layers size={18} />}
                    label="Foundry Platform"
                    description="Ontology, Contour, Pipelines"
                    level="Expert"
                  />
                  <SkillItem
                    icon={<Workflow size={18} />}
                    label="Development"
                    description="Python, Java, SQL"
                    level="Expert"
                  />
                  <SkillItem
                    icon={<Database size={18} />}
                    label="Data Modeling"
                    description="Integration & Architecture"
                    level="Advanced"
                  />
                  <SkillItem
                    icon={<Shield size={18} />}
                    label="Governance"
                    description="Access Control & Security"
                    level="Expert"
                  />
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <BarChart size={20} className="text-[#0077b5]" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {[
                    "Design and implement Foundry pipelines",
                    "Map business logic to data assets with Ontologies",
                    "Build analytical and operational workflows",
                    "Collaborate with end users for usability",
                    "Support real-time and batch data processing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Award size={20} className="text-[#0077b5]" />
                  Trusted By
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Government", "Defense", "Manufacturing", "Finance",
                    "Healthcare", "Logistics"
                  ].map((industry, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-[#0077b5]" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Ready to Scale Your Data Capabilities?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Connect with our specialized data engineers to build robust geospatial intelligence
                systems and enterprise-scale data platforms that deliver actionable insights and
                drive strategic decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Mission-critical data systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Real-time geospatial intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Enterprise data integration</span>
                </div>
              </div>
            </div>
            <button className="px-8 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
              <MessageSquare size={20} />
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
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

/* ---------- Skill Item ---------- */
interface SkillItemProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  level: string;
}

function SkillItem({ icon, label, description, level }: SkillItemProps) {
  const levelColors = {
    Expert: "bg-blue-100 text-blue-700",
    Advanced: "bg-green-100 text-green-700",
    Intermediate: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-3 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0077b5]/10 rounded flex items-center justify-center">
            <div className="text-[#0077b5]">
              {icon}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{label}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${levelColors[level as keyof typeof levelColors]}`}>
          {level}
        </span>
      </div>
    </div>
  );
}