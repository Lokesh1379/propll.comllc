import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Headphones,
  Wrench,
  Clock,
  Users,
  Shield,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  Building,
  CheckCircle,
  Zap,
  Phone,
  Monitor,
  Globe
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechnicalSupportSpecialistsSection() {
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
                  Support & Operations
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Technical Support
                <br />
                <span className="text-[#0077b5]">Specialists</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Our dedicated support professionals ensure smooth day-to-day operations by
                resolving user issues efficiently and maintaining optimal system reliability
                across organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Contact Support Team
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  View Support Roles
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
                  <Headphones className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-500 text-sm">Global coverage</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">98% customer satisfaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600"> {"<"}15 min response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">95% first-contact resolution</span>
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
            <StatCard
              icon={<Clock />}
              value="<15 min"
              label="Avg. Response Time"
              color="text-green-600"
            />
            <StatCard
              icon={<Shield />}
              value="98%"
              label="Customer Satisfaction"
              color="text-blue-600"
            />
            <StatCard
              icon={<Zap />}
              value="95%"
              label="First-Contact Resolution"
              color="text-purple-600"
            />
            <StatCard
              icon={<Users />}
              value="24/7"
              label="Global Support Coverage"
              color="text-orange-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
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
            <Shield className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Reliable Support You Can Trust
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team of dedicated support specialists and help organizations maintain
              seamless operations with exceptional technical assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Headphones size={20} />
                Apply for Support Roles
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Learn About Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Support Role Card ---------- */
interface SupportRoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  level: string;
}

function SupportRoleCard({ icon, title, description, skills, tools, level }: SupportRoleCardProps) {
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
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {level}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Key Skills
                </h4>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full" />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Wrench size={16} />
                  Common Tools
                </h4>
                <div className="space-y-2">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span className="text-sm text-gray-700">{tool}</span>
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
          <Users size={14} />
          <span>Team-based support structure</span>
        </div>
        <button className="px-6 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#006097] transition-colors text-sm font-medium flex items-center gap-2">
          View Role Details
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
