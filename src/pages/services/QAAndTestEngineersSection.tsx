import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Bot,
  Shield,
  BarChart3,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  Clock,
  Globe,
  Award,
  Zap,
  ChevronRight,
  Search,
  Filter,
  Building,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Linkedin
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function QAAndTestEngineersSection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#0077b5] via-[#00a0dc] to-[#0095c8] text-white">
        <div className="absolute inset-0 bg-[url('/linkedin-pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Briefcase size={18} />
                <span className="text-sm font-medium">Engineering & QA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Quality Assurance &<br />
                <span className="text-cyan-200">Test Engineering</span> Talent
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Connect with top-tier QA professionals who ensure software excellence through
                rigorous testing methodologies and automation frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  <Linkedin size={20} />
                  Connect with Talent
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  View Open Roles
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Premium Network</h3>
                    <p className="text-white/80 text-sm">250+ QA Professionals</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-cyan-300" />
                    <span className="text-sm">Verified credentials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-cyan-300" />
                    <span className="text-sm">Active in industry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-cyan-300" />
                    <span className="text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-20 z-10 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search QA skills, roles, or technologies..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0077b5]/50 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Filter size={18} />
                <span>Filters</span>
              </button>
              <button className="px-6 py-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006097] transition-colors font-medium">
                Show Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Industry Insights Card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-[#0077b5]" />
                Industry Insights
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">QA Demand</span>
                    <span className="text-sm font-semibold text-green-600">+32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="pb-4 border-b">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Automation Skills</span>
                    <span className="text-sm font-semibold text-blue-600">+45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Remote Roles</span>
                    <span className="text-sm font-semibold text-purple-600">+28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Skills Card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Target size={20} className="text-[#0077b5]" />
                Top In-Demand Skills
              </h3>
              <div className="space-y-3">
                {[
                  { skill: "Selenium/Cypress", level: "Expert" },
                  { skill: "API Testing", level: "Advanced" },
                  { skill: "Performance Testing", level: "Advanced" },
                  { skill: "CI/CD Integration", level: "Expert" },
                  { skill: "Security Testing", level: "Intermediate" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{item.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Column - Role Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Role Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <RoleCard
                icon={<ClipboardCheck size={24} />}
                title="Senior QA Analyst"
                company="TechCorp Inc."
                location="San Francisco, CA • Remote"
                type="Full-time"
                experience="5+ years"
                skills={["Manual Testing", "Test Planning", "JIRA", "Agile"]}
                posted="2 days ago"
                connections="3 connections work here"
              />
              <RoleCard
                icon={<Bot size={24} />}
                title="Automation Engineer"
                company="InnovateSoft"
                location="Austin, TX • Hybrid"
                type="Contract"
                experience="3+ years"
                skills={["Selenium", "Python", "Jenkins", "API Testing"]}
                posted="1 week ago"
                connections="5 connections work here"
              />
              <RoleCard
                icon={<Shield size={24} />}
                title="Security QA Lead"
                company="SecureSystems"
                location="New York, NY • On-site"
                type="Full-time"
                experience="7+ years"
                skills={["Pen Testing", "OWASP", "Compliance", "Security"]}
                posted="3 days ago"
                connections="2 connections work here"
              />
              <RoleCard
                icon={<BarChart3 size={24} />}
                title="Performance Test Engineer"
                company="ScaleTech"
                location="Remote • Global"
                type="Full-time"
                experience="4+ years"
                skills={["LoadRunner", "JMeter", "Cloud", "Monitoring"]}
                posted="5 days ago"
                connections="8 connections work here"
              />
            </div>

            {/* Featured Companies */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <h3 className="font-bold text-lg mb-6">Companies Hiring QA Talent</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Google", logo: "G", color: "bg-blue-500" },
                  { name: "Microsoft", logo: "M", color: "bg-green-500" },
                  { name: "Amazon", logo: "A", color: "bg-yellow-500" },
                  { name: "Meta", logo: "M", color: "bg-blue-600" }
                ].map((company, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${company.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}>
                      {company.logo}
                    </div>
                    <span className="font-medium">{company.name}</span>
                    <p className="text-sm text-gray-500">15+ openings</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-2xl p-10 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your QA Team?</h2>
            <p className="text-lg mb-8 text-white/90">
              Post your job opening and connect with pre-vetted QA professionals in our network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Briefcase size={20} />
                Post a Job
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <MessageSquare size={20} />
                Contact Recruiter
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Calendar size={20} />
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Enhanced Role Card ---------- */
interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  posted: string;
  connections?: string;
}

function RoleCard({
  icon,
  title,
  company,
  location,
  type,
  experience,
  skills,
  posted,
  connections
}: RoleCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="group bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:border-[#0077b5]/30 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0077b5]">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-[#0077b5] transition-colors">{title}</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <Building size={14} />
                <span className="text-sm">{company}</span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-[#0077b5]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 3a1 1 0 00-1-1H2a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V3z" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{type}</span>
            <span className="px-3 py-1 bg-blue-50 text-[#0077b5] rounded-full text-sm">{experience}</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1">
              <Globe size={12} />
              {location.split("•")[1]}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gray-400" />
                <span className="text-sm text-gray-500">{posted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-gray-400" />
                <span className="text-sm text-gray-500">{connections}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
        <button className="text-[#0077b5] hover:text-[#006097] font-medium text-sm">
          Save • More
        </button>
        <button className="px-4 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#006097] transition-colors text-sm font-medium flex items-center gap-1">
          Apply
          <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}