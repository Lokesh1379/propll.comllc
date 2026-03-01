import Navbar from "@/components/Navbar";
import {
  Cloud,
  CloudCog,
  GitBranch,
  Server,
  Shield,
  Zap,
  ChevronRight,
  Database,
  Lock,
  Globe,
  Cpu,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

export default function CloudAndDevOpsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        {/* Cloud-inspired Gradient Mesh */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 30%, hsl(210, 100%, 40%, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 90% 60%, hsl(200, 100%, 50%, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, hsl(195, 100%, 45%, 0.05) 0%, transparent 50%)
          `,
        }} />
        
        {/* Animated Cloud Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #0A66C2 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>
        
        {/* Floating Cloud Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#0A66C2]/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 5}s ease-in-out infinite ${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-6 py-24">
        {/* Header with Cloud Theme */}
        <div className="max-w-3xl">
          {/* Cloud Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-[#378FE9]/10 border border-[#0A66C2]/20 mb-6 animate-fade-up group hover:scale-[1.02] transition-all duration-300">
            <div className="relative">
              <Cloud className="w-4 h-4 text-[#0A66C2]" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0A66C2] to-[#378FE9] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-medium text-[#0A66C2] bg-clip-text bg-gradient-to-r from-[#0A66C2] to-[#378FE9]">
              Cloud & DevOps Excellence
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
            <span className="text-[#191919]">Cloud & DevOps</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0A66C2] via-[#378FE9] to-[#00A0DC] animate-gradient-shift">
              Specialists
            </span>
          </h2>
          
          <p className="text-lg text-[#666666] leading-relaxed animate-fade-up animation-delay-200">
            Our cloud and DevOps professionals help organizations build scalable,
            secure, and resilient infrastructure while accelerating delivery
            through automation and modern cloud practices.
          </p>
        </div>

        {/* Cloud Platform Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 my-16 animate-fade-up animation-delay-300">
          {[
            { name: "AWS", color: "text-[#FF9900]" },
            { name: "Azure", color: "text-[#0089D6]" },
            { name: "GCP", color: "text-[#4285F4]" },
            { name: "Kubernetes", color: "text-[#326CE5]" },
            { name: "Docker", color: "text-[#2496ED]" },
            { name: "Terraform", color: "text-[#7B42BC]" },
          ].map((platform, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300"
            >
              <span className={`text-lg font-bold ${platform.color}`}>
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Cloud Architects",
              description: "Design and manage scalable, secure cloud infrastructures using platforms such as AWS, Microsoft Azure, and Google Cloud.",
              skills: ["AWS", "Azure", "GCP", "Security"],
              gradient: "from-[#0A66C2] via-[#378FE9] to-[#00A0DC]",
              delay: "400ms"
            },
            {
              icon: <CloudCog className="w-6 h-6" />,
              title: "Cloud Engineers",
              description: "Implement, monitor, and maintain cloud-based systems to ensure performance, reliability, and cost efficiency.",
              skills: ["Infrastructure", "Monitoring", "Cost Optimization", "Automation"],
              gradient: "from-[#378FE9] via-[#00A0DC] to-[#0A66C2]",
              delay: "500ms"
            },
            {
              icon: <GitBranch className="w-6 h-6" />,
              title: "DevOps Engineers",
              description: "Automate and streamline development and operations by managing CI/CD pipelines, infrastructure as code, and deployment workflows.",
              skills: ["CI/CD", "IaC", "Kubernetes", "Docker"],
              gradient: "from-[#00A0DC] via-[#0A66C2] to-[#378FE9]",
              delay: "600ms"
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

        {/* Additional Specializations */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#191919] mb-6">
              Additional Expertise
            </h3>
            <p className="text-lg text-[#666666]">
              Comprehensive cloud and infrastructure capabilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Cloud Security", count: "100+" },
              { icon: Database, title: "Database Admin", count: "150+" },
              { icon: Zap, title: "Site Reliability", count: "120+" },
              { icon: Globe, title: "Network Engineers", count: "80+" },
            ].map((spec, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#378FE9]">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#0A66C2]">
                    {spec.count}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#191919] group-hover:text-[#0A66C2] transition-colors">
                  {spec.title}
                </h4>
                <p className="text-sm text-[#666666] mt-2">Available specialists</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#0A66C2]/5 via-white to-[#378FE9]/5 border border-[#E0E0E0]">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#191919] mb-4">
              Transform Your Infrastructure
            </h3>
            <p className="text-[#666666] mb-8">
              Connect with top cloud and DevOps talent to build scalable, secure, 
              and efficient infrastructure solutions.
            </p>
            
            <button className="px-8 py-3.5 rounded-full bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span className="flex items-center gap-2">
                Find Cloud Experts
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Modern Card Component with White Text on Hover ---------- */

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
      {/* Cloud-like Glow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
          isHovered ? 'scale-100' : 'scale-50'
        }`}
      />
      
      {/* Card Container */}
      <div className={`relative p-8 rounded-2xl bg-white border border-[#E0E0E0] group-hover:border-transparent transition-all duration-500 h-full overflow-hidden ${
        isHovered ? `bg-gradient-to-br ${gradient}` : ''
      }`}>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* Icon with Cloud Animation */}
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
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-500 ${
                  isHovered
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-gradient-to-br from-[#0A66C2]/10 to-[#378FE9]/10 text-[#0A66C2] border border-[#0A66C2]/20'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Animated CTA - White on Hover */}
          <div className="flex items-center gap-2 transition-all duration-500 group-hover:translate-x-2">
            <span className={`text-sm font-medium transition-all duration-500 ${
              isHovered 
                ? 'text-white' 
                : `bg-clip-text bg-gradient-to-r ${gradient} text-transparent opacity-0 group-hover:opacity-100`
            }`}>
              View Profiles
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