import { Rocket, Lock, TrendingUp, Headphones, Globe, Cpu, Users, BarChart, Shield, Zap, Award, Building } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Our team includes certified professionals with decades of experience across enterprise sectors.",
    stat: "15+ Years"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance standards protecting your most sensitive data.",
    stat: "SOC2 Certified"
  },
  {
    icon: TrendingUp,
    title: "Proven Scalability",
    description: "Architecture designed to grow with your business, from startup to enterprise scale.",
    stat: "1000% Growth"
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Round-the-clock expert support ensuring your systems run smoothly at all times.",
    stat: "<15 min Response"
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Distributed teams delivering consistent quality across time zones and geographies.",
    stat: "30+ Countries"
  },
  {
    icon: BarChart,
    title: "Data-Driven Results",
    description: "Forward-thinking solutions built on modern stacks that evolve with technology trends.",
    stat: "95% Success Rate"
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* LinkedIn-inspired Background */}
      <div className="absolute inset-0">
        {/* Main Blue Gradient */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0A66C2]/10 via-[#0A66C2]/5 to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(90deg, #0A66C2 1px, transparent 1px),
                            linear-gradient(180deg, #0A66C2 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#0A66C2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#378FE9]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 backdrop-blur-sm mb-6 group hover:bg-[#0A66C2]/15 transition-all duration-300 cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#0A66C2] animate-pulse" />
            <span className="text-sm font-semibold text-[#0A66C2]">
              Why Choose Us
            </span>
            <div className="w-px h-4 bg-[#0A66C2]/20" />
            <span className="text-xs font-medium text-[#666666]">
              Enterprise Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#191919] mb-6 leading-tight">
            Built for{" "}
            <span className="relative inline-block">
              <span className="text-[#0A66C2]">Enterprise Success</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 4C50 2 100 6 150 4C200 2 250 6 298 4" 
                      stroke="url(#underline-gradient)" 
                      strokeWidth="2" 
                      strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0A66C2" />
                    <stop offset="1" stopColor="#378FE9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            We combine deep technical expertise with a commitment to excellence, 
            delivering solutions that transform how modern businesses operate and scale.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* LinkedIn-style Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] via-[#378FE9] to-[#00A0DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon and Stat Container */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#378FE9] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Stat Badge */}
                <div className="px-3 py-1.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20">
                  <span className="text-xs font-semibold text-[#0A66C2]">
                    {feature.stat}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#191919] mb-3 group-hover:text-[#0A66C2] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-[#666666] leading-relaxed mb-8">
                {feature.description}
              </p>
              
              {/* Bottom Connection Indicator */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#F0F0F0]">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#378FE9]/20 border-2 border-white flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-[#0A66C2]" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[#666666]">Trusted by enterprise teams</span>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#0A66C2]/20 transition-all duration-300 pointer-events-none" />
              
              {/* Floating Elements on Hover */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0A66C2]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#378FE9]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-[#E0E0E0]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#191919] mb-3">
              Trusted Across Industries
            </h3>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Our solutions power innovation and efficiency across diverse sectors
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "ENTERPRISE", icon: Building, color: "text-[#0A66C2]" },
              { name: "FINTECH", icon: Zap, color: "text-[#378FE9]" },
              { name: "HEALTHCARE", icon: Shield, color: "text-[#00A0DC]" },
              { name: "RETAIL", icon: TrendingUp, color: "text-[#004182]" },
              { name: "MANUFACTURING", icon: Rocket, color: "text-[#0A66C2]" },
              { name: "TECH", icon: Cpu, color: "text-[#378FE9]" },
            ].map((industry, index) => (
              <div 
                key={index}
                className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-[#0A66C2]/10 to-[#378FE9]/10 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className={`w-5 h-5 ${industry.color}`} />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#191919] group-hover:text-[#0A66C2] transition-colors">
                      {industry.name}
                    </div>
                    <div className="text-xs text-[#666666] mt-1">Industry Solutions</div>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#0A66C2] to-[#378FE9] rounded-full group-hover:w-3/4 transition-all duration-300" />
              </div>
            ))}
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#E0E0E0]">
            {[
              { value: "500+", label: "Enterprise Clients", color: "from-[#0A66C2] to-[#378FE9]" },
              { value: "99.9%", label: "Uptime SLA", color: "from-[#378FE9] to-[#00A0DC]" },
              { value: "24/7", label: "Global Support", color: "from-[#00A0DC] to-[#0A66C2]" },
              { value: "15+", label: "Years Experience", color: "from-[#004182] to-[#0A66C2]" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#666666] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
// import { Rocket, Lock, TrendingUp, Headphones, Globe, Cpu, Users, ShieldCheck, Award, Clock, Zap, BarChart, ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// // Import company logo images
// import googleLogo from "@/assets/companies/google.svg";
// import microsoftLogo from "@/assets/companies/microsoft.svg";
// import amazonLogo from "@/assets/companies/amazon.svg";
// import salesforceLogo from "@/assets/companies/salesforce.svg";
// import ibmLogo from "@/assets/companies/ibm.svg";
// import oracleLogo from "@/assets/companies/oracle.svg";
// import metaLogo from "@/assets/companies/meta.svg";
// import appleLogo from "@/assets/companies/apple.svg";
// import adobeLogo from "@/assets/companies/adobe.svg";
// import intelLogo from "@/assets/companies/intel.svg";
// import ciscoLogo from "@/assets/companies/cisco.svg";
// import sapLogo from "@/assets/companies/sap.svg";
// import teslaLogo from "@/assets/companies/tesla.svg";
// import netflixLogo from "@/assets/companies/netflix.svg";
// import spotifyLogo from "@/assets/companies/spotify.svg";
// import uberLogo from "@/assets/companies/uber.svg";

// const features = [
//   {
//     icon: Users,
//     title: "Expert HR Professionals",
//     description: "Our team includes certified HR experts, recruiters, and talent specialists with decades of combined experience.",
//     stats: "50+ Experts"
//   },
//   {
//     icon: ShieldCheck,
//     title: "Enterprise Security",
//     description: "SOC2 & GDPR compliant platform with bank-grade security protecting your sensitive HR data.",
//     stats: "99.9% Uptime"
//   },
//   {
//     icon: TrendingUp,
//     title: "Proven Results",
//     description: "Consistently deliver measurable improvements in hiring efficiency and employee retention.",
//     stats: "40% Faster Hiring"
//   },
//   {
//     icon: Clock,
//     title: "24/7 Dedicated Support",
//     description: "Round-the-clock expert support ensuring your HR systems run smoothly at all times.",
//     stats: "<15 min Response"
//   },
//   {
//     icon: Globe,
//     title: "Global Implementation",
//     description: "Distributed teams delivering consistent quality across time zones and geographies.",
//     stats: "30+ Countries"
//   },
//   {
//     icon: BarChart,
//     title: "Data-Driven Insights",
//     description: "Advanced analytics and reporting for data-informed HR decisions and strategy planning.",
//     stats: "95% Accuracy"
//   },
// ];

// const companies = [
//   { name: "Google", logo: googleLogo, alt: "Google logo" },
//   { name: "Microsoft", logo: microsoftLogo, alt: "Microsoft logo" },
//   { name: "Amazon", logo: amazonLogo, alt: "Amazon logo" },
//   { name: "Salesforce", logo: salesforceLogo, alt: "Salesforce logo" },
//   { name: "IBM", logo: ibmLogo, alt: "IBM logo" },
//   { name: "Oracle", logo: oracleLogo, alt: "Oracle logo" },
//   { name: "Meta", logo: metaLogo, alt: "Meta logo" },
//   { name: "Apple", logo: appleLogo, alt: "Apple logo" },
//   { name: "Adobe", logo: adobeLogo, alt: "Adobe logo" },
//   { name: "Intel", logo: intelLogo, alt: "Intel logo" },
//   { name: "Cisco", logo: ciscoLogo, alt: "Cisco logo" },
//   { name: "SAP", logo: sapLogo, alt: "SAP logo" },
//   { name: "Tesla", logo: teslaLogo, alt: "Tesla logo" },
//   { name: "Netflix", logo: netflixLogo, alt: "Netflix logo" },
//   { name: "Spotify", logo: spotifyLogo, alt: "Spotify logo" },
//   { name: "Uber", logo: uberLogo, alt: "Uber logo" },
// ];

// const WhyUs = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const visibleCompanies = 6;
//   const totalSlides = Math.ceil(companies.length / visibleCompanies);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     if (isPaused) return;
    
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isPaused]);

//   return (
//     <section id="why-us" className="py-24 bg-white text-[#191919] relative overflow-hidden">
//       {/* LinkedIn Blue Background Effects */}
//       <div className="absolute inset-0">
//         {/* Main Blue Gradient */}
//         <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0A66C2]/10 to-transparent" />
        
//         {/* Subtle Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]" style={{
//           backgroundImage: `linear-gradient(90deg, #0A66C2 1px, transparent 1px),
//                             linear-gradient(180deg, #0A66C2 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }} />
        
//         {/* Decorative Orbs */}
//         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0A66C2]/5 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#378FE9]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container relative z-10 px-6">
//         {/* Section Header - LinkedIn Style */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 mb-6">
//             <div className="w-2 h-2 rounded-full bg-[#0A66C2] animate-pulse" />
//             <span className="text-sm font-semibold text-[#0A66C2]">
//               Why Choose Our Platform
//             </span>
//             <div className="w-px h-4 bg-[#0A66C2]/20" />
//             <span className="text-xs font-medium text-[#666666]">
//               Enterprise HR Solutions
//             </span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-[#191919] mb-6 leading-tight">
//             The Most Comprehensive{" "}
//             <span className="relative inline-block">
//               <span className="text-[#0A66C2]">HR Technology</span>
//               <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] to-[#378FE9] rounded-full" />
//             </span>
//           </h2>
          
//           <p className="text-lg text-[#666666] leading-relaxed">
//             We combine deep HR expertise with cutting-edge technology to deliver solutions 
//             that transform how organizations manage and develop their talent.
//           </p>
//         </div>

//         {/* Features Grid - LinkedIn Card Design */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative p-8 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               {/* LinkedIn-style top accent */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] via-[#378FE9] to-[#00A0DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               {/* Icon Container with Stats */}
//               <div className="flex items-start justify-between mb-6">
//                 <div className="p-3 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#378FE9] shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-7 h-7 text-white" />
//                 </div>
                
//                 {/* Stat Badge */}
//                 <div className="px-3 py-1.5 rounded-full bg-[#0A66C2]/10">
//                   <span className="text-xs font-semibold text-[#0A66C2]">
//                     {feature.stats}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <h3 className="text-xl font-bold text-[#191919] mb-3 group-hover:text-[#0A66C2] transition-colors duration-300">
//                 {feature.title}
//               </h3>
              
//               <p className="text-[#666666] leading-relaxed mb-6">
//                 {feature.description}
//               </p>
              
//               {/* LinkedIn-style Connection Dots */}
//               <div className="flex items-center gap-3 pt-4 border-t border-[#F0F0F0]">
//                 <div className="flex -space-x-2">
//                   {[...Array(3)].map((_, i) => (
//                     <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#378FE9]/20 border-2 border-white flex items-center justify-center">
//                       <Users className="w-4 h-4 text-[#0A66C2]" />
//                     </div>
//                   ))}
//                 </div>
//                 <span className="text-sm text-[#666666]">Trusted by 500+ HR teams</span>
//               </div>
              
//               {/* Hover Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#0A66C2]/20 transition-all duration-300 pointer-events-none" />
//             </div>
//           ))}
//         </div>

//         {/* Stunning Company Carousel Section */}
//         <div className="mt-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-[#191919] mb-4">
//               Trusted by Industry Leaders Worldwide
//             </h3>
//             <p className="text-[#666666] text-lg max-w-2xl mx-auto">
//               Join thousands of innovative companies transforming their HR with our platform
//             </p>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative max-w-6xl mx-auto">
//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white border border-[#E0E0E0] shadow-lg hover:shadow-xl hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all duration-300 flex items-center justify-center group"
//             >
//               <ChevronLeft className="w-5 h-5 text-[#666666] group-hover:text-[#0A66C2]" />
//             </button>

//             <button
//               onClick={nextSlide}
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white border border-[#E0E0E0] shadow-lg hover:shadow-xl hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all duration-300 flex items-center justify-center group"
//             >
//               <ChevronRight className="w-5 h-5 text-[#666666] group-hover:text-[#0A66C2]" />
//             </button>

//             {/* Carousel Track */}
//             <div 
//               ref={carouselRef}
//               className="overflow-hidden px-4"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               <div 
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                   <div key={slideIndex} className="w-full flex-shrink-0">
//                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//                       {companies
//                         .slice(slideIndex * visibleCompanies, (slideIndex + 1) * visibleCompanies)
//                         .map((company, index) => (
//                           <div
//                             key={`${slideIndex}-${index}`}
//                             className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E0E0E0] hover:border-[#0A66C2]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                           >
//                             {/* Company Logo Container */}
//                             <div className="relative h-24 flex items-center justify-center mb-6">
//                               <div className="absolute inset-0 flex items-center justify-center">
//                                 {/* Logo Background Glow */}
//                                 <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
//                                 {/* Company Logo Image */}
//                                 <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
//                                   <img 
//                                     src={company.logo} 
//                                     alt={company.alt}
//                                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
//                                     loading="lazy"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
                            
//                             {/* Company Name */}
//                             <h4 className="text-center text-base font-semibold text-[#191919] mb-2 group-hover:text-[#0A66C2] transition-colors">
//                               {company.name}
//                             </h4>
                            
//                             {/* Trust Badge */}
//                             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                               <div className="px-2 py-1 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20">
//                                 <span className="text-xs font-semibold text-[#0A66C2]">
//                                   Partner
//                                 </span>
//                               </div>
//                             </div>
                            
//                             {/* Hover Effect */}
//                             <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#0A66C2]/20 transition-all duration-300 pointer-events-none" />
                            
//                             {/* Corner Accents */}
//                             <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#0A66C2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#378FE9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="flex justify-center items-center gap-2 mt-8">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setIsPaused(true);
//                     setTimeout(() => setIsPaused(false), 3000);
//                   }}
//                   onMouseEnter={() => setIsPaused(true)}
//                   onMouseLeave={() => setIsPaused(false)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentIndex 
//                       ? 'w-8 bg-gradient-to-r from-[#0A66C2] to-[#378FE9]' 
//                       : 'bg-[#E0E0E0] hover:bg-[#0A66C2]/40'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Stats Section Below Carousel */}
//           <div className="mt-16 pt-12 border-t border-[#E0E0E0]">
//             <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//               {[
//                 { value: "500+", label: "Enterprise Clients", color: "text-[#0A66C2]" },
//                 { value: "95%", label: "Client Retention", color: "text-[#378FE9]" },
//                 { value: "40%", label: "Avg. Efficiency Gain", color: "text-[#00A0DC]" },
//                 { value: "24/7", label: "Support Coverage", color: "text-[#004182]" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center p-6 group">
//                   <div className={`text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-[#666666] font-medium group-hover:text-[#191919] transition-colors">
//                     {stat.label}
//                   </div>
//                   {/* Animated underline */}
//                   <div className="w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mt-3 group-hover:w-12 transition-all duration-500" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;