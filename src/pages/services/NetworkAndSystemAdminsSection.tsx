import Navbar from "@/components/Navbar";
import {
  Network,
  ServerCog,
  Server,
  Wifi,
  Shield,
  Cpu,
  Activity,
  Database,
  Globe,
  Zap,
  ChevronRight,
  Users,
  CheckCircle2,
  BarChart,
  Cloud,
  Settings,
  Router
} from "lucide-react";
import { useState } from "react";

export default function NetworkAndSystemAdminsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#191919] min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Network Pattern Background */}
      <div className="absolute inset-0">
        {/* Network-inspired Gradient Mesh */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, hsl(250, 84%, 60%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, hsl(215, 100%, 40%, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, hsl(220, 100%, 50%, 0.02) 0%, transparent 50%)
          `,
        }} />
        
        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(90deg, #0A66C2 1px, transparent 1px),
            linear-gradient(180deg, #0A66C2 1px, transparent 1px),
            linear-gradient(45deg, transparent 49%, #0A66C2 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #0A66C2 50%, transparent 51%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px',
        }} />
        
        {/* Animated Network Nodes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#0A66C2]/40"
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
            {/* Infrastructure Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-indigo-500/10 border border-[#0A66C2]/20 mb-6 animate-fade-up">
              <div className="relative">
                <Server className="w-4 h-4 text-[#0A66C2]" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0A66C2] to-indigo-500 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <span className="text-sm font-medium text-[#0A66C2] bg-clip-text bg-gradient-to-r from-[#0A66C2] to-indigo-500">
                Infrastructure Excellence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
              <span className="text-[#191919]">Network & System</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0A66C2] via-indigo-500 to-violet-500 animate-gradient-shift">
                Administrators
              </span>
            </h1>
            
            <p className="text-lg text-[#666666] leading-relaxed animate-fade-up animation-delay-200 max-w-2xl">
              Our network and system professionals ensure reliable, secure, and
              high-performing IT environments by managing infrastructure,
              networks, and enterprise systems.
            </p>
          </div>

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl animate-fade-up animation-delay-300">
            {[
              { value: "99.99%", label: "Uptime SLA", icon: Activity, color: "text-[#0A66C2]" },
              { value: "500+", label: "Networks Managed", icon: Globe, color: "text-indigo-500" },
              { value: "24/7", label: "Monitoring", icon: Shield, color: "text-violet-500" },
              { value: "<5min", label: "Response Time", icon: Zap, color: "text-[#004182]" },
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
              icon: <Network className="w-6 h-6" />,
              title: "Network Engineers",
              description: "Design, implement, monitor, and troubleshoot secure and scalable network systems and enterprise infrastructure.",
              skills: ["Cisco", "Juniper", "Firewalls", "VPN"],
              gradient: "from-[#0A66C2] via-[#378FE9] to-indigo-500",
              delay: "400ms"
            },
            {
              icon: <ServerCog className="w-6 h-6" />,
              title: "System Administrators",
              description: "Manage and maintain organizational IT systems, servers, and operating environments to ensure stability and uptime.",
              skills: ["Linux", "Windows", "Virtualization", "Backup"],
              gradient: "from-indigo-500 via-violet-500 to-[#0A66C2]",
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

      {/* Additional Infrastructure Roles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">
              Infrastructure Specializations
            </h2>
            <p className="text-lg text-[#666666]">
              Comprehensive IT infrastructure expertise across all domains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Cloud Administrators",
                description: "Manage and optimize cloud infrastructure across AWS, Azure, and GCP platforms.",
                count: "120+"
              },
              {
                icon: Database,
                title: "Storage Specialists",
                description: "Design and manage enterprise storage solutions and data protection systems.",
                count: "80+"
              },
              {
                icon: Router,
                title: "Network Security",
                description: "Implement and manage security infrastructure including firewalls and IDS/IPS.",
                count: "100+"
              },
              {
                icon: Settings,
                title: "Automation Engineers",
                description: "Automate infrastructure management using tools like Ansible, Terraform, and Puppet.",
                count: "90+"
              },
            ].map((role, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#0A66C2] to-indigo-500">
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

      {/* Technology & Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-6">
              Technology Expertise
            </h2>
            <p className="text-lg text-[#666666]">
              Proficiency across enterprise infrastructure technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {[
              "Cisco", "Juniper", "Palo Alto", "Fortinet", "VMware", 
              "Hyper-V", "AWS", "Azure", "GCP", "Linux", "Windows Server",
              "Ansible", "Terraform", "Docker", "Kubernetes", "Splunk",
              "SolarWinds", "Nagios", "Zabbix", "Backup Exec", "Veeam"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-br from-[#0A66C2]/5 to-indigo-500/5 border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-[#191919]">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Monitoring Dashboard Preview */}
          <div className="rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-[#0A66C2]" />
              <h3 className="text-xl font-bold text-[#191919]">Infrastructure Monitoring</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Network Health", value: "99.8%", status: "good" },
                { label: "Server Uptime", value: "99.99%", status: "good" },
                { label: "Incidents", value: "3", status: "warning" },
                { label: "Response Time", value: "2.1s", status: "good" },
              ].map((metric, index) => (
                <div key={index} className="p-4 rounded-xl border border-[#E0E0E0]">
                  <div className="text-sm text-[#666666] mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold text-[#191919]">{metric.value}</div>
                  <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
                    metric.status === 'good' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {metric.status === 'good' ? 'Optimal' : 'Monitoring'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] via-indigo-500 to-violet-500" />
          
          {/* Network Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />
          
          <div className="relative z-10 p-12 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <Server className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Infrastructure Excellence
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build Reliable IT Infrastructure
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with elite infrastructure professionals who can design, build, 
              and maintain high-performance, secure, and scalable IT environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 rounded-full bg-white text-[#0A66C2] font-semibold hover:bg-white/90 hover:text-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="flex items-center gap-2">
                  Find Infrastructure Experts
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-3.5 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Infrastructure Assessment
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Modern Infrastructure Card Component ---------- */

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
      {/* Infrastructure Glow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
          isHovered ? 'scale-100' : 'scale-50'
        }`}
      />
      
      {/* Card Container */}
      <div className={`relative p-8 rounded-2xl bg-white border border-[#E0E0E0] group-hover:border-transparent transition-all duration-500 h-full overflow-hidden ${
        isHovered ? `bg-gradient-to-br ${gradient}` : ''
      }`}>
        
        {/* Animated Infrastructure Border */}
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* Infrastructure Icon */}
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
          
          {/* Infrastructure Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-500 ${
                  isHovered
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-gradient-to-br from-[#0A66C2]/10 to-indigo-500/10 text-[#191919] border border-[#E0E0E0]'
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
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
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