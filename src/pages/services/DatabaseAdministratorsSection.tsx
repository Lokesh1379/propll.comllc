import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  Server,
  Cloud,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  MessageSquare,
  Target,
  Globe,
  Award,
  Cpu,
  Clock,
  Shield
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DatabaseAdministratorsSection() {
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
                  Database Management & Optimization
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Database
                <br />
                <span className="text-[#0077b5]">Administrators (DBAs)</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Expert administrators managing, securing, and optimizing enterprise databases
                across SQL, Windows, Unix, and Linux environments—ensuring high availability,
                performance, and data protection at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Connect with DBAs
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Database Solutions
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
                  <h3 className="text-xl font-bold text-gray-900">Database Excellence</h3>
                  <p className="text-gray-500 text-sm">Enterprise Grade</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">99.99% Database Uptime</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">100% Data Security Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">24/7 Monitoring & Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <PerformanceCard
              icon={<ShieldCheck />}
              value="99.99%"
              label="Database Uptime"
              color="text-green-600"
            />
            <PerformanceCard
              icon={<Clock />}
              value="<5 min"
              label="Recovery Time Objective"
              color="text-blue-600"
            />
            <PerformanceCard
              icon={<Zap />}
              value="65%"
              label="Query Performance Gain"
              color="text-orange-600"
            />
            <PerformanceCard
              icon={<Users />}
              value="40+"
              label="Certified DBAs"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Database Management</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  DBAs are responsible for installing, configuring, monitoring, and maintaining
                  databases such as SQL Server, Oracle, MySQL, and PostgreSQL. They ensure high
                  availability, implement backups and disaster recovery strategies, and enforce
                  security best practices across on-premise and cloud environments.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team specializes in proactive database management, performance optimization,
                  and implementing robust security measures to protect sensitive enterprise data
                  while ensuring optimal system performance.
                </p>
              </div>
            </motion.div>

            {/* Specializations Grid */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialized DBA Roles</h3>
                  <p className="text-gray-600">Expert administrators for every database platform</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RoleCard
                  icon={<Database size={24} />}
                  title="SQL DBAs"
                  description="Query optimization, replication strategies, indexing, and performance tuning for enterprise databases."
                  databases={["SQL Server", "MySQL", "PostgreSQL"]}
                  expertise={["Performance Tuning", "High Availability", "Backup & Recovery"]}
                />

                <RoleCard
                  icon={<Server size={24} />}
                  title="Windows DBAs"
                  description="Managing databases within Microsoft ecosystems including SQL Server, Active Directory integration, and Windows-based infrastructure."
                  databases={["SQL Server", "Active Directory"]}
                  expertise={["Cluster Management", "Security Patching", "Integration"]}
                />

                <RoleCard
                  icon={<Server size={24} />}
                  title="Unix / Linux DBAs"
                  description="Command-line database management, shell scripting, cron jobs, and system-level performance tuning on Unix/Linux systems."
                  databases={["Oracle", "MySQL", "PostgreSQL"]}
                  expertise={["Shell Scripting", "Performance Monitoring", "Automation"]}
                />

                <RoleCard
                  icon={<Cloud size={24} />}
                  title="Cross-Platform DBAs"
                  description="Security patching, failover clustering, and cloud database management using AWS RDS, Azure SQL, and Google Cloud SQL."
                  databases={["AWS RDS", "Azure SQL", "Google Cloud SQL"]}
                  expertise={["Cloud Migration", "Disaster Recovery", "Security Compliance"]}
                />
              </div>
            </motion.div>

            {/* Database Platforms */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Database Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <DatabasePlatform
                  name="Microsoft SQL Server"
                  version="2019, 2022"
                  category="Relational"
                />
                <DatabasePlatform
                  name="Oracle Database"
                  version="19c, 21c"
                  category="Enterprise"
                />
                <DatabasePlatform
                  name="MySQL / MariaDB"
                  version="8.0, 10.6"
                  category="Open Source"
                />
                <DatabasePlatform
                  name="PostgreSQL"
                  version="14, 15"
                  category="Advanced"
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
              <h3 className="font-bold text-lg mb-4 text-gray-900">Database Support</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006097] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Schedule DBA Consultation
                </button>
                <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Request Performance Audit
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
                  { industry: "Government", projects: "35+" },
                  { industry: "Financial Services", projects: "58+" },
                  { industry: "Healthcare", projects: "42+" },
                  { industry: "Education", projects: "28+" },
                  { industry: "Energy & Utilities", projects: "31+" },
                  { industry: "Technology", projects: "65+" }
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
                  <span className="text-sm text-gray-600">Microsoft Certified: Azure DBA</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Oracle Database Administrator</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">AWS Certified Database</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">PostgreSQL Professional</span>
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
            <ShieldCheck className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure & Optimize Your Data Foundation
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our certified Database Administrators to ensure high availability,
              performance, and security for your enterprise data infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Database size={20} />
                Explore DBA Roles
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Request Database Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Performance Card ---------- */
interface PerformanceCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function PerformanceCard({ icon, value, label, color }: PerformanceCardProps) {
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

/* ---------- Role Card ---------- */
interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  databases: string[];
  expertise: string[];
}

function RoleCard({ icon, title, description, databases, expertise }: RoleCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl hover:border-[#0077b5]/30 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#0077b5]">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Database size={14} />
            Key Databases
          </h4>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {db}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Target size={14} />
            Core Expertise
          </h4>
          <div className="space-y-1">
            {expertise.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full" />
                <span className="text-xs text-gray-600">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Database Platform ---------- */
function DatabasePlatform({ name, version, category }: { 
  name: string; 
  version: string;
  category: string;
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <div className="text-sm font-semibold text-gray-900 mb-2">{name}</div>
      <div className="text-xs text-gray-600 mb-1">Version: {version}</div>
      <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full inline-block">
        {category}
      </div>
    </div>
  );
}