import Navbar from "@/components/Navbar";
import {
  ClipboardCheck,
  Users2,
  Target,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  GitBranch,
  CheckCircle2,
  ChevronRight,
  Zap,
  Globe,
  Award,
  Clock,
  DollarSign,
  Briefcase,
  Settings
} from "lucide-react";
import { useState } from "react";

export default function ITProjectManagersSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#191919] min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Project Management Pattern Background */}
      <div className="absolute inset-0">
        {/* Management-inspired Gradient Mesh */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 30%, hsl(270, 84%, 60%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, hsl(215, 100%, 40%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, hsl(220, 100%, 50%, 0.02) 0%, transparent 50%)
          `,
        }} />
        
        {/* Project Timeline Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, #0A66C2 2px, transparent 2px),
            linear-gradient(0deg, #0A66C2 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        {/* Animated Project Dots */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#0A66C2]/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `slide ${4 + Math.random() * 4}s linear infinite ${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Project Management Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-violet-500/10 border border-[#0A66C2]/20 mb-6 animate-fade-up">
              <div className="relative">
                <Target className="w-4 h-4 text-[#0A66C2]" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0A66C2] to-violet-500 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <span className="text-sm font-medium text-[#0A66C2] bg-clip-text bg-gradient-to-r from-[#0A66C2] to-violet-500">
                Project Leadership Excellence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
              <span className="text-[#191919]">IT Project</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0A66C2] via-violet-500 to-purple-500 animate-gradient-shift">
                Managers
              </span>
            </h1>
            
            <p className="text-lg text-[#666666] leading-relaxed animate-fade-up animation-delay-200 max-w-2xl">
              Our IT project leadership professionals ensure successful delivery
              by aligning technology initiatives with business goals, timelines,
              and budgets.
            </p>
          </div>

          {/* Project Management Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl animate-fade-up animation-delay-300">
            {[
              { value: "95%", label: "On-Time Delivery", icon: Clock, color: "text-[#0A66C2]" },
              { value: "$100M+", label: "Budget Managed", icon: DollarSign, color: "text-violet-500" },
              { value: "500+", label: "Projects Delivered", icon: CheckCircle2, color: "text-purple-500" },
              { value: "99%", label: "Client Satisfaction", icon: Award, color: "text-[#004182]" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Roles Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <ClipboardCheck className="w-6 h-6" />,
              title: "Project Managers",
              description: "Oversee IT projects end-to-end, ensuring delivery on time, within scope, and within budget while managing risks and stakeholders.",
              skills: ["PMP", "Risk Management", "Budgeting", "Stakeholder"],
              gradient: "from-[#0A66C2] via-[#378FE9] to-violet-500",
              delay: "400ms"
            },
            {
              icon: <Users2 className="w-6 h-6" />,
              title: "Scrum Masters",
              description: "Facilitate agile development teams, remove impediments, and ensure adherence to Scrum principles and continuous improvement.",
              skills: ["Agile/Scrum", "Team Facilitation", "Retrospectives", "CI/CD"],
              gradient: "from-violet-500 via-purple-500 to-[#0A66C2]",
              delay: "500ms"
            },
          ].map((role, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: role.delay }}
            >
              <RoleCard
                {...role}
                index={index}
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Additional Project Roles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">
              Extended Project Leadership
            </h2>
            <p className="text-lg text-[#666666]">
              Comprehensive project management expertise across methodologies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Program Managers",
                description: "Oversee multiple related projects and strategic initiatives across the organization.",
                count: "80+"
              },
              {
                icon: BarChart3,
                title: "Product Owners",
                description: "Define product vision, prioritize backlogs, and maximize product value.",
                count: "120+"
              },
              {
                icon: GitBranch,
                title: "Agile Coaches",
                description: "Train and mentor teams on agile methodologies and continuous improvement.",
                count: "60+"
              },
              {
                icon: PieChart,
                title: "Portfolio Managers",
                description: "Align project portfolios with organizational strategy and resource capacity.",
                count: "50+"
              },
            ].map((role, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#0A66C2] to-violet-500">
                    <role.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#0A66C2]">
                    {role.count}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-[#191919] mb-2 group-hover:text-[#0A66C2] transition-colors">
                  {role.title}
                </h3>
                
                <p className="text-sm text-[#666666]">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology & Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">
              Methodologies & Frameworks
            </h2>
            <p className="text-lg text-[#666666]">
              Expertise across industry-standard project management frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Traditional (Waterfall)",
                description: "PMP, PRINCE2 certified professionals with expertise in sequential project phases.",
                icon: Briefcase,
                color: "bg-[#0A66C2]/10"
              },
              {
                title: "Agile Frameworks",
                description: "Scrum, Kanban, SAFe certified professionals for iterative delivery.",
                icon: Zap,
                color: "bg-violet-500/10"
              },
              {
                title: "Hybrid Approaches",
                description: "Blended methodologies combining traditional and agile practices.",
                icon: Settings,
                color: "bg-purple-500/10"
              },
            ].map((method, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3.5 rounded-xl ${method.color} mb-6 inline-block`}>
                  <method.icon className="w-6 h-6 text-[#191919]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#191919] mb-3">
                  {method.title}
                </h3>
                
                <p className="text-[#666666] leading-relaxed text-sm mb-6">
                  {method.description}
                </p>
                
                <div className="flex items-center text-[#0A66C2] text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
                  <span>Explore Certifications</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "PMP", "PRINCE2", "Scrum Master", "SAFe", "ITIL", "Six Sigma",
              "Agile Coach", "P2M", "CMMI", "Lean", "DevOps", "Cloud"
            ].map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-br from-[#0A66C2]/5 to-violet-500/5 border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-[#191919]">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] via-violet-500 to-purple-500" />
          
          {/* Project Timeline Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 48%, white 50%, transparent 52%),
              linear-gradient(0deg, transparent 48%, white 50%, transparent 52%)
            `,
            backgroundSize: '60px 60px',
          }} />
          
          <div className="relative z-10 p-12 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Project Success Assurance
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lead Successful IT Projects
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with elite project management professionals who can ensure 
              the successful delivery of your technology initiatives on time and within budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 rounded-full bg-white text-[#0A66C2] font-semibold hover:bg-white/90 hover:text-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center gap-2">
                  Find Project Leaders
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-3.5 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60">
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Project Assessment
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Modern Project Management Card Component ---------- */

function RoleCard({
  icon,
  title,
  description,
  skills,
  gradient,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative group h-full"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Project Management Glow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
          isHovered ? 'scale-100' : 'scale-50'
        }`}
      />
      
      {/* Card Container */}
      <div className={`relative p-8 rounded-2xl bg-white border border-[#E0E0E0] group-hover:border-transparent transition-all duration-500 h-full overflow-hidden ${
        isHovered ? `bg-gradient-to-br ${gradient}` : ''
      }`}>
        
        {/* Animated Project Timeline Border */}
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* Project Management Icon */}
          <div className="relative mb-8">
            <div 
              className={`w-14 h-14 rounded-xl ${
                isHovered 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : `bg-gradient-to-br ${gradient}`
              } flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] ${
                isHovered ? 'shadow-2xl shadow-white/20' : 'shadow-lg'
              }`}
            >
              <div className={`transition-all duration-700 ${
                isHovered ? 'text-white transform group-hover:scale-110' : 'text-white'
              }`}>
                {icon}
              </div>
            </div>
            
            {/* Icon Glow */}
            <div 
              className={`absolute -inset-2 ${
                isHovered ? 'bg-white/10' : `bg-gradient-to-br ${gradient}`
              } rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-700`}
            />
          </div>
          
          {/* Title - White on Hover */}
          <h3 className="text-xl font-bold mb-4 transition-all duration-500">
            <span className={`transition-all duration-500 ${
              isHovered 
                ? 'text-white' 
                : `bg-clip-text text-transparent bg-gradient-to-r ${gradient}`
            }`}>
              {title}
            </span>
          </h3>
          
          {/* Description - White on Hover */}
          <p className={`leading-relaxed text-sm mb-6 transition-all duration-500 ${
            isHovered 
              ? 'text-white/90' 
              : 'text-[#666666]'
          }`}>
            {description}
          </p>
          
          {/* Project Management Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-500 ${
                  isHovered
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-gradient-to-br from-[#0A66C2]/10 to-violet-500/10 text-[#191919] border border-[#E0E0E0]'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* CTA - White on Hover */}
          <div className="flex items-center gap-2 transition-all duration-500 group-hover:translate-x-2">
            <span className={`text-sm font-medium transition-all duration-500 ${
              isHovered 
                ? 'text-white' 
                : `bg-clip-text bg-gradient-to-r ${gradient} text-transparent opacity-0 group-hover:opacity-100`
            }`}>
              View Leaders
            </span>
            <ChevronRight className={`w-4 h-4 transition-all duration-500 ${
              isHovered 
                ? 'text-white translate-x-2' 
                : 'text-transparent opacity-0 -translate-x-2'
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Add to your globals.css:
/*
@keyframes slide {
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(20px) translateY(-20px); }
  50% { transform: translateX(40px) translateY(0); }
  75% { transform: translateX(20px) translateY(20px); }
  100% { transform: translateX(0) translateY(0); }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}
*/