import Navbar from "@/components/Navbar";
import {
  Code2,
  Server,
  Layers,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function SoftwareDevelopersSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, hsl(215, 100%, 40%, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, hsl(205, 90%, 55%, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, hsl(200, 100%, 45%, 0.05) 0%, transparent 40%)
          `,
        }} />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 99%, #0A66C2 100%)`,
            backgroundSize: '100px 100px',
            animation: 'slideRight 20s linear infinite',
          }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#0A66C2]/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-6 py-24">
        {/* Header with Stagger Animation */}
        <div className="max-w-3xl">
          {/* Badge with Glow Effect */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A66C2]/10 to-[#378FE9]/10 border border-[#0A66C2]/20 mb-6 animate-fade-up group hover:scale-[1.02] transition-all duration-300">
            <div className="relative">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0A66C2] to-[#378FE9] animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0A66C2] to-[#378FE9] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-medium text-[#0A66C2] bg-clip-text bg-gradient-to-r from-[#0A66C2] to-[#378FE9]">
              Elite Talent Pool
            </span>
          </div>
          
          {/* Headline with Gradient Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
            <span className="text-[#191919]">Software Developers &</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0A66C2] via-[#378FE9] to-[#00A0DC] animate-gradient-shift">
              Engineers
            </span>
          </h2>
          
          <p className="text-lg text-[#666666] leading-relaxed animate-fade-up animation-delay-200">
            We provide highly skilled software professionals who design, build,
            and maintain modern digital solutions across platforms, industries,
            and technologies.
          </p>
        </div>

        {/* Cards Grid with Modern Animations */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Front-End Developers",
              description: "Experts in building intuitive, responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
              gradient: "from-[#0A66C2] via-[#378FE9] to-[#00A0DC]",
              delay: "300ms"
            },
            {
              icon: <Server className="w-6 h-6" />,
              title: "Back-End Developers",
              description: "Specialists in server-side logic, databases, and APIs using technologies such as Python, Java, Node.js, and PHP.",
              gradient: "from-[#378FE9] via-[#00A0DC] to-[#0A66C2]",
              delay: "400ms"
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Full-Stack Developers",
              description: "Versatile professionals skilled in both front-end and back-end development, capable of delivering complete, end-to-end applications.",
              gradient: "from-[#00A0DC] via-[#0A66C2] to-[#378FE9]",
              delay: "500ms"
            },
            {
              icon: <Smartphone className="w-6 h-6" />,
              title: "Mobile App Developers",
              description: "Focused on building high-performance mobile applications for iOS (Swift) and Android (Kotlin, Java).",
              gradient: "from-[#004182] via-[#0A66C2] to-[#378FE9]",
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
      </div>
    </section>
  );
}

/* ---------- Modern Card Component with White Text on Hover ---------- */

function RoleCard({
  icon,
  title,
  description,
  gradient,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
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
      {/* Background Glow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${
          isHovered ? 'scale-100' : 'scale-50'
        }`}
      />
      
      {/* Card Container with Gradient Background on Hover */}
      <div className={`relative p-8 rounded-2xl bg-white border border-[#E0E0E0] group-hover:border-transparent transition-all duration-500 h-full overflow-hidden ${
        isHovered ? `bg-gradient-to-br ${gradient}` : ''
      }`}>
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-2xl p-[2px]">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isHovered ? 'animate-spin-slow' : ''
            }`}
            style={{ animationPlayState: isHovered ? 'running' : 'paused' }}
          />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          {/* Floating Icon Animation */}
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
              } rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-all duration-700 ${
                isHovered ? 'scale-125' : 'scale-100'
              }`}
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
              : 'text-[#666666] group-hover:text-[#191919]'
          }`}>
            {description}
          </p>
          
          {/* Animated CTA - White on Hover */}
          <div className="flex items-center gap-2 transition-all duration-500 group-hover:translate-x-2">
            <span className={`text-sm font-medium transition-all duration-500 ${
              isHovered 
                ? 'text-white' 
                : `bg-clip-text bg-gradient-to-r ${gradient} text-transparent opacity-0 group-hover:opacity-100`
            }`}>
              Explore Talent
            </span>
            <ChevronRight className={`w-4 h-4 transition-all duration-500 ${
              isHovered 
                ? 'text-white translate-x-2' 
                : 'text-transparent opacity-0 -translate-x-2'
            }`} />
          </div>
        </div>
        
        {/* Floating Elements on Hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                isHovered ? 'bg-white/10' : `bg-gradient-to-br ${gradient}`
              } opacity-0 group-hover:opacity-10 transition-all duration-1000 ${
                isHovered ? 'scale-100' : 'scale-0'
              }`}
              style={{
                width: `${20 + i * 15}px`,
                height: `${20 + i * 15}px`,
                top: `${20 + i * 20}%`,
                left: `${70 + i * 10}%`,
                animationDelay: `${i * 200}ms`,
                animation: isHovered ? 'float 3s ease-in-out infinite' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Add to your globals.css:
/*
@keyframes slideRight {
  from { transform: translateX(-100px); }
  to { transform: translateX(100px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(10px); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
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