import Navbar from "@/components/Navbar";
import {
  Shield,
  Bug,
  Lock,
  Eye,
  Key,
  Network,
  AlertTriangle,
  FileLock,
  Server,
  Globe,
  CheckCircle2,
  ChevronRight,
  Zap,
  ShieldCheck,
  Users
} from "lucide-react";
import { useState } from "react";

export default function CyberSecuritySection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#191919] min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Security Pattern Background */}
      <div className="absolute inset-0">
        {/* Security-inspired Gradient Mesh */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(0, 84%, 60%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, hsl(215, 100%, 40%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, hsl(0, 0%, 0%, 0.02) 0%, transparent 50%)
          `,
        }} />
        
        {/* Security Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, #DC2626 1px, transparent 1px),
            linear-gradient(180deg, #DC2626 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        {/* Animated Security Dots */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#DC2626]/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Security Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#DC2626]/10 to-[#0A66C2]/10 border border-[#DC2626]/20 mb-6 animate-fade-up">
              <div className="relative">
                <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DC2626] to-[#0A66C2] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <span className="text-sm font-medium text-[#DC2626] bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#0A66C2]">
                Cybersecurity Excellence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
              <span className="text-[#191919]">Cybersecurity</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#DC2626] via-[#0A66C2] to-[#004182] animate-gradient-shift">
                Experts
              </span>
            </h1>
            
            <p className="text-lg text-[#666666] leading-relaxed animate-fade-up animation-delay-200 max-w-2xl">
              Our cybersecurity professionals safeguard digital assets by
              identifying threats, preventing breaches, and ensuring the
              confidentiality, integrity, and availability of critical systems.
            </p>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl animate-fade-up animation-delay-300">
            {[
              { value: "99.9%", label: "Threat Detection", icon: Eye, color: "text-[#DC2626]" },
              { value: "24/7", label: "Monitoring", icon: Network, color: "text-[#0A66C2]" },
              { value: "0-Day", label: "Vulnerability Response", icon: Zap, color: "text-[#004182]" },
              { value: "500+", label: "Secured Clients", icon: Shield, color: "text-[#DC2626]" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#DC2626]/40 hover:shadow-lg transition-all duration-300 group"
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

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Security Analysts",
              description: "Monitor systems and networks for security breaches, analyze incidents, and respond swiftly to mitigate potential threats.",
              skills: ["SIEM", "Threat Intel", "Incident Response", "SOC"],
              gradient: "from-[#DC2626] via-[#EF4444] to-[#F87171]",
              delay: "400ms"
            },
            {
              icon: <Bug className="w-6 h-6" />,
              title: "Penetration Testers",
              description: "Identify, exploit, and report vulnerabilities in applications and infrastructure to strengthen overall security posture.",
              skills: ["Pen Testing", "Red Teaming", "Vulnerability Assessment", "Ethical Hacking"],
              gradient: "from-[#0A66C2] via-[#378FE9] to-[#60A5FA]",
              delay: "500ms"
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Security Engineers",
              description: "Design and implement secure network architectures, security controls, and protocols to protect enterprise systems.",
              skills: ["Network Security", "Firewalls", "IAM", "Encryption"],
              gradient: "from-[#004182] via-[#1E40AF] to-[#3B82F6]",
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
      </section>

      {/* Additional Security Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-lg text-[#666666]">
              End-to-end cybersecurity solutions for modern enterprises
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileLock,
                title: "Compliance & Governance",
                description: "GDPR, HIPAA, SOC2, ISO 27001 compliance frameworks and security governance.",
                color: "bg-[#DC2626]/10"
              },
              {
                icon: Server,
                title: "Cloud Security",
                description: "AWS, Azure, GCP security architecture and configuration management.",
                color: "bg-[#0A66C2]/10"
              },
              {
                icon: Globe,
                title: "Application Security",
                description: "Secure SDLC, code review, and application penetration testing.",
                color: "bg-[#004182]/10"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#DC2626]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`p-3.5 rounded-xl ${service.color} mb-6 inline-block`}>
                  <service.icon className="w-6 h-6 text-[#191919]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#191919] mb-3 group-hover:text-[#DC2626] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#666666] leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-[#DC2626] text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626] via-[#0A66C2] to-[#004182]" />
          
          {/* Security Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 95%, white 100%),
              linear-gradient(-45deg, transparent 95%, white 100%)
            `,
            backgroundSize: '40px 40px',
          }} />
          
          <div className="relative z-10 p-12 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Secure Your Organization
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect Your Digital Assets
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with elite cybersecurity professionals who can build and maintain 
              robust security frameworks for your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 rounded-full bg-white text-[#DC2626] font-semibold hover:bg-white/90 hover:text-[#B91C1C] transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center gap-2">
                  Find Security Experts
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-3.5 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Assessment
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Modern Security Card Component ---------- */

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
      {/* Security Glow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
          isHovered ? 'scale-100' : 'scale-50'
        }`}
      />
      
      {/* Card Container */}
      <div className={`relative p-8 rounded-2xl bg-white border border-[#E0E0E0] group-hover:border-transparent transition-all duration-500 h-full overflow-hidden ${
        isHovered ? `bg-gradient-to-br ${gradient}` : ''
      }`}>
        
        {/* Animated Security Border */}
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* Security Icon */}
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
          
          {/* Security Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-500 ${
                  isHovered
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-gradient-to-br from-[#DC2626]/10 to-[#0A66C2]/10 text-[#191919] border border-[#E0E0E0]'
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
              View Experts
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
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
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