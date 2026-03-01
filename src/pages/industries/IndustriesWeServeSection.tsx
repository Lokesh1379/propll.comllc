import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Cpu,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Radio,
  Factory,
  GraduationCap,
  Truck,
  ChevronRight,
  Globe,
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  BarChart,
  Building,
  Zap
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustriesWeServeSection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-white mt-10 border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b5]/5 to-[#00a0dc]/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#0077b5] rounded-full" />
              <span className="text-[#0077b5] text-sm font-medium uppercase tracking-wider">
                Cross-Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industries
              <br />
              <span className="text-[#0077b5]">We Serve</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We partner with organizations across diverse industries, delivering
              specialized IT talent and technology solutions tailored to each
              sector's unique challenges, regulatory requirements, and digital
              transformation goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                <Briefcase size={20} />
                Explore Industry Solutions
              </button>
              <button className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                Download Industry Reports
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Impact */}
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
              icon={<Globe />}
              value="15+"
              label="Industries Served"
              color="text-[#0077b5]"
            />
            <ImpactCard
              icon={<Users />}
              value="500+"
              label="Industry Clients"
              color="text-green-600"
            />
            <ImpactCard
              icon={<TrendingUp />}
              value="40%"
              label="Digital Transformation Impact"
              color="text-orange-600"
            />
            <ImpactCard
              icon={<Shield />}
              value="100%"
              label="Regulatory Compliance"
              color="text-purple-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Industry Grid */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Industry Expertise</h2>
              <p className="text-gray-600">Specialized solutions for every sector</p>
            </div>
            <button className="hidden lg:flex items-center gap-2 text-[#0077b5] hover:text-[#006097] font-medium">
              View All Industries
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              icon={<Cpu size={24} />}
              title="Information Technology"
              projects={85}
              focus={["Software Development", "Cloud Migration", "Cybersecurity"]}
            />

            <IndustryCard
              icon={<Landmark size={24} />}
              title="Financial Services"
              subtitle="Banking, Insurance & FinTech"
              projects={120}
              focus={["Regulatory Compliance", "Digital Banking", "Risk Management"]}
            />

            <IndustryCard
              icon={<HeartPulse size={24} />}
              title="Healthcare"
              subtitle="& Life Sciences"
              projects={75}
              focus={["HIPAA Compliance", "EHR Systems", "Telemedicine"]}
            />

            <IndustryCard
              icon={<ShoppingCart size={24} />}
              title="Retail & E-commerce"
              projects={68}
              focus={["Omnichannel", "Supply Chain", "Customer Analytics"]}
            />

            <IndustryCard
              icon={<Radio size={24} />}
              title="Telecommunications"
              projects={52}
              focus={["5G Networks", "IoT Solutions", "Customer Experience"]}
            />

            <IndustryCard
              icon={<Factory size={24} />}
              title="Manufacturing"
              projects={63}
              focus={["Industry 4.0", "Supply Chain", "Quality Control"]}
            />

            <IndustryCard
              icon={<GraduationCap size={24} />}
              title="Education"
              subtitle="& E-Learning"
              projects={48}
              focus={["EdTech Solutions", "LMS Platforms", "Digital Learning"]}
            />

            <IndustryCard
              icon={<Truck size={24} />}
              title="Logistics"
              subtitle="& Supply Chain"
              projects={56}
              focus={["Warehouse Automation", "Route Optimization", "Inventory Management"]}
            />
          </div>
        </motion.div>

        {/* Featured Solutions */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm border mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-[#0077b5]" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Cross-Industry Solutions</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              title="Digital Transformation"
              description="Modernize legacy systems and implement cloud-first strategies across all industries."
              industries={["Finance", "Healthcare", "Manufacturing"]}
            />
            <SolutionCard
              title="Cybersecurity & Compliance"
              description="Industry-specific security frameworks and regulatory compliance solutions."
              industries={["BFSI", "Healthcare", "Government"]}
            />
            <SolutionCard
              title="Data Analytics & AI"
              description="Advanced analytics and AI solutions to drive data-informed decision making."
              industries={["Retail", "Telecom", "Education"]}
            />
          </div>
        </motion.div>

        {/* Industry Case Studies */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="text-[#0077b5]" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Proven Industry Impact</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our industry-specific expertise delivers measurable results. From accelerating digital
                transformation in financial services to implementing secure healthcare systems, we
                partner with organizations to achieve their technology and business objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Industry-specific talent pools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Regulatory expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">Sector-specific technology stacks</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 whitespace-nowrap">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Industry Card ---------- */
interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  projects: number;
  focus: string[];
}

function IndustryCard({ icon, title, subtitle, projects, focus }: IndustryCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl hover:border-[#0077b5]/30 hover:shadow-md transition-all duration-300 bg-white">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#0077b5]">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {subtitle && (
            <p className="text-gray-500 text-sm">{subtitle}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Projects Completed</span>
            <span className="text-lg font-bold text-[#0077b5]">{projects}+</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Focus Areas</h4>
          <div className="space-y-2">
            {focus.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span className="text-xs text-gray-600">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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

/* ---------- Solution Card ---------- */
function SolutionCard({ title, description, industries }: { 
  title: string; 
  description: string;
  industries: string[];
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div>
        <div className="text-xs text-gray-500 mb-2">Key Industries:</div>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}