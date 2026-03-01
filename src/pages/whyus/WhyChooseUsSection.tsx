import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Clock,
  DollarSign,
  Sliders,
  CheckCircle2,
  HeartHandshake,
  Target,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Zap,
  BarChart,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#0077b5] rounded-full" />
            <span className="text-[#0077b5] text-sm font-medium uppercase tracking-wider">
              Our Competitive Advantage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Partner With Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We go beyond traditional staffing and consulting by delivering
            reliable, scalable, and business-aligned talent solutions that help
            organizations grow with confidence and achieve measurable outcomes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Target />}
              value="98%"
              label="Client Satisfaction Rate"
              color="text-green-600"
            />
            <StatCard
              icon={<Zap />}
              value="40%"
              label="Faster Hiring"
              color="text-orange-600"
            />
            <StatCard
              icon={<Shield />}
              value="99.9%"
              label="Placement Success"
              color="text-blue-600"
            />
            <StatCard
              icon={<Globe />}
              value="15+"
              label="Years Experience"
              color="text-purple-600"
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Users size={24} />}
            title="Extensive Talent Network"
            description="Access a broad pool of pre-vetted IT professionals across technologies, domains, and experience levels."
            metrics="5000+ Verified Professionals"
          />

          <FeatureCard
            icon={<Briefcase size={24} />}
            title="Industry Expertise"
            description="Deep understanding of industry-specific challenges enables us to deliver the right talent, faster."
            metrics="10+ Industry Verticals"
          />

          <FeatureCard
            icon={<Clock size={24} />}
            title="Faster Turnaround Time"
            description="Streamlined recruitment processes ensure quick deployment without compromising on quality."
            metrics="< 2 Weeks Average"
          />

          <FeatureCard
            icon={<DollarSign size={24} />}
            title="Cost-Effective Hiring"
            description="Optimized hiring models that reduce recruitment costs while maximizing long-term value."
            metrics="30% Cost Reduction"
          />

          <FeatureCard
            icon={<Sliders size={24} />}
            title="Customized Solutions"
            description="Tailored staffing and consulting approaches aligned with your unique business goals."
            metrics="100% Tailored Approach"
          />

          <FeatureCard
            icon={<CheckCircle2 size={24} />}
            title="End-to-End Process"
            description="Complete lifecycle management from sourcing and screening to onboarding and workforce support."
            metrics="Full-Cycle Management"
          />

          <div className="lg:col-span-3">
            <FeatureCard
              icon={<HeartHandshake size={24} />}
              title="Client-Centric Partnership"
              description="We prioritize long-term partnerships, transparency, and measurable outcomes for every client engagement."
              metrics="95% Repeat Business"
              fullWidth
            />
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#0077b5]" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Our Commitment to Excellence
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                We believe successful partnerships are built on trust,
                transparency, and delivering measurable business impact. Our
                approach combines deep industry expertise with innovative talent
                solutions to drive sustainable growth for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">
                    Guaranteed quality placements
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">
                    Dedicated relationship management
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0077b5] rounded-full" />
                  <span className="text-sm text-gray-700">
                    Continuous performance monitoring
                  </span>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 whitespace-nowrap">
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Feature Card ---------- */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics?: string;
  fullWidth?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  metrics,
  fullWidth,
}: FeatureCardProps) {
  return (
    <div
      className={`${
        fullWidth ? "col-span-3" : ""
      } p-6 border border-gray-200 rounded-xl hover:border-[#0077b5]/30 hover:shadow-md transition-all duration-300 bg-white`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="text-[#0077b5]">{icon}</div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
          {metrics && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700">{metrics}</p>
            </div>
          )}
        </div>
      </div>
    </div>
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
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
        <div className={color}>{icon}</div>
      </div>
      <div className={`text-2xl font-bold mb-2 ${color}`}>{value}</div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}
