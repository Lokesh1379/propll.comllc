import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Palette,
  Sparkles,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  MessageSquare,
  Layout,
  Eye,
  Target,
  Globe,
  Award
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function UIUXDesignersSection() {
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
                  Digital Design Excellence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                UI/UX Design
                <br />
                <span className="text-[#0077b5]">Specialists</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Creative professionals who craft visually compelling, user-centric digital experiences
                that enhance usability, engagement, and brand consistency across all platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                  <MessageSquare size={20} />
                  View Design Portfolio
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                  Meet Our Designers
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
                  <Palette className="text-[#0077b5]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Design Impact</h3>
                  <p className="text-gray-500 text-sm">Proven results</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">40% increase in user engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">90% user satisfaction rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">50+ successful product launches</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Impact Stats */}
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
              value="40%"
              label="User Engagement Increase"
              color="text-green-600"
            />
            <StatCard
              icon={<Users />}
              value="90%"
              label="User Satisfaction"
              color="text-blue-600"
            />
            <StatCard
              icon={<Target />}
              value="85%"
              label="Task Success Rate"
              color="text-purple-600"
            />
            <StatCard
              icon={<Globe />}
              value="50+"
              label="Products Launched"
              color="text-orange-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Design Roles */}
          <div className="lg:col-span-2 space-y-8">
            {/* Roles Header */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Specialties</h2>
                  <p className="text-gray-600">Expert designers focused on creating exceptional digital experiences</p>
                </div>
                <button className="hidden lg:flex items-center gap-2 text-[#0077b5] hover:text-[#006097] font-medium">
                  View All Design Work
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Design Role Cards */}
            <div className="space-y-6">
              <DesignRoleCard
                icon={<Palette size={24} />}
                title="UI Designers"
                description="Focus on visual design, aesthetics, layout, typography, and brand consistency to create attractive, polished, and engaging user interfaces that align with business goals."
                skills={[
                  "Visual Design",
                  "Typography",
                  "Color Theory",
                  "Design Systems",
                  "Component Libraries",
                  "Brand Consistency"
                ]}
                tools={["Figma", "Adobe Creative Suite", "Sketch", "InVision"]}
                deliverables={["Mockups", "Style Guides", "Design Systems", "UI Components"]}
              />

             
            </div>

            {/* Design Process */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Design Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <ProcessStep
                  number="01"
                  title="Discover"
                  description="Research & Analysis"
                  icon={<Eye size={20} />}
                />
                <ProcessStep
                  number="02"
                  title="Define"
                  description="Strategy & Planning"
                  icon={<Target size={20} />}
                />
                <ProcessStep
                  number="03"
                  title="Design"
                  description="Create & Iterate"
                  icon={<Palette size={20} />}
                />
                <ProcessStep
                  number="04"
                  title="Deliver"
                  description="Test & Launch"
                  icon={<CheckCircle size={20} />}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Portfolio Preview */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">Featured Work</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#0077b5]/10 rounded flex items-center justify-center">
                      <Layout size={16} className="text-[#0077b5]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">E-commerce Redesign</h4>
                      <p className="text-sm text-gray-500">Mobile App</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Increased conversions by 35%</div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#0077b5]/10 rounded flex items-center justify-center">
                      <Sparkles size={16} className="text-[#0077b5]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">SaaS Dashboard</h4>
                      <p className="text-sm text-gray-500">Web Platform</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Improved user efficiency by 45%</div>
                </div>
                
                <button className="w-full text-center text-[#0077b5] hover:text-[#006097] font-medium text-sm pt-2">
                  View Full Portfolio →
                </button>
              </div>
            </motion.div>

            {/* Design Tools */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Core Tools</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-gray-700">Figma</span>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded">Expert</span>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-gray-700">Adobe Creative Cloud</span>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-gray-700">Sketch</span>
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded">Proficient</span>
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-gray-700">Prototyping Tools</span>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded">Expert</span>
                </div>
              </div>
            </motion.div>

            {/* Design Awards */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#0077b5]" size={20} />
                <h3 className="font-bold text-lg text-gray-900">Recognition</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Awwwards - Site of the Year Finalist</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Webby Awards - Honoree</span>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-600">Design Excellence Award 2023</span>
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
            <Sparkles className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Design Experiences That Matter
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team of creative designers and help shape digital products that users love
              and businesses trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0077b5] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <Palette size={20} />
                View Design Opportunities
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Request Design Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Design Role Card ---------- */
interface DesignRoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  deliverables: string[];
}

function DesignRoleCard({ icon, title, description, skills, tools, deliverables }: DesignRoleCardProps) {
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Core Skills</h4>
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
                <h4 className="font-semibold text-gray-900 mb-3">Primary Tools</h4>
                <div className="space-y-2">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span className="text-sm text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables</h4>
                <div className="space-y-2">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      <span className="text-sm text-gray-700">{item}</span>
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
          <CheckCircle size={14} />
          <span>User-centered design approach</span>
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

/* ---------- Process Step ---------- */
function ProcessStep({ number, title, description, icon }: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-center p-4">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0077b5]/10 rounded-full mb-4 mx-auto">
        <div className="text-[#0077b5]">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-300 mb-2">{number}</div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}