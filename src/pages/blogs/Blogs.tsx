import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  MessageSquare,
  Share2,
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  Clock,
  Globe,
  ChevronLeft
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Navbar />

      {/* Blog Header */}
      <section className="relative bg-white border-b mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b5]/5 to-[#00a0dc]/5" />
        <div className="relative max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              IT Staffing & Recruitment Trends in 2025
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-[#0077b5]/10 text-[#0077b5] rounded-full text-sm font-medium">
                Recruitment
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                Technology
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                Future of Work
              </span>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As technology continues to evolve rapidly, the IT staffing landscape is undergoing
              major transformations. Businesses are rethinking how they attract, hire, and retain
              talent in an environment shaped by AI, remote work, and skill shortages.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#0077b5]">
                  <MessageSquare size={18} />
                  <span className="text-sm">24 comments</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#0077b5]">
                  <Share2 size={18} />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                Save for later
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <motion.article
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12 bg-white p-8 rounded-xl shadow-sm border"
            >
              <BlogSection
                title="1. AI-Powered Recruitment Is Mainstream"
                content={[
                  "Artificial intelligence is no longer just a buzzword in recruitment. AI is now widely adopted across the hiring lifecycle to improve speed, accuracy, and fairness."
                ]}
                bullets={[
                  "Screen resumes at scale",
                  "Analyze candidate behavior and communication styles",
                  "Match candidates with job roles using predictive analytics",
                  "Reduce bias and improve diversity outcomes"
                ]}
                stats={[
                  { label: "Time-to-Hire Reduction", value: "40%" },
                  { label: "Cost per Hire", value: "30%" }
                ]}
                footer="Recruiters who adopt AI-driven hiring tools are significantly reducing time-to-hire while enhancing the overall candidate experience."
              />

              <BlogSection
                title="2. Hybrid Workforces Are the New Normal"
                content={[
                  "Post-pandemic flexibility has shifted from a perk to an expectation. Hybrid and fully remote IT roles are now key drivers of talent attraction and retention.",
                  "Staffing firms are increasingly sourcing candidates across borders, enabling companies to tap into global talent pools without geographic limitations."
                ]}
                icon={<Globe size={24} className="text-[#0077b5]" />}
              />

              <BlogSection
                title="3. The Rise of Contract and Project-Based Hiring"
                content={[
                  "With digital transformation accelerating across industries, organizations are favoring agile and flexible hiring models."
                ]}
                bullets={[
                  "DevOps Engineers",
                  "Cloud Architects",
                  "Data Scientists",
                  "Cybersecurity Experts"
                ]}
                stats={[
                  { label: "Project-Based Hiring Growth", value: "45%" },
                  { label: "Contract Extension Rate", value: "75%" }
                ]}
                footer="Staffing agencies play a critical role in enabling businesses to scale project teams quickly and cost-effectively."
              />

              <BlogSection
                title="4. Tech Talent Shortage Intensifies"
                content={[
                  "Despite an increase in IT graduates, the gap between available skills and required expertise continues to widen.",
                  "Niche skill sets such as AI/ML, blockchain, cybersecurity, and cloud infrastructure remain in extremely high demand."
                ]}
                bullets={[
                  "Offer competitive salaries and benefits",
                  "Accelerate hiring timelines",
                  "Partner with specialized IT recruitment firms"
                ]}
                icon={<Users size={24} className="text-[#0077b5]" />}
              />

              <BlogSection
                title="5. Employer Branding Drives Hiring Success"
                content={[
                  "In today's candidate-driven market, IT professionals are selective about where they work.",
                  "Employer branding—including company culture, career growth opportunities, and work-life balance—has become a decisive factor in hiring success."
                ]}
                stats={[
                  { label: "Brand Impact on Applications", value: "60%" },
                  { label: "Candidate Experience Importance", value: "85%" }
                ]}
                footer="Recruitment teams are increasingly collaborating with marketing teams to craft compelling employer narratives that attract top IT talent."
              />

              {/* Author Bio */}
              <div className="pt-12 border-t border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  <div>
                    <h3 className="font-bold text-gray-900">Alex Johnson</h3>
                    <p className="text-sm text-gray-600">Head of Talent Strategy</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">15+ years in IT recruitment</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">Expert in tech talent trends</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Alex leads our talent strategy division, helping organizations navigate the evolving
                  landscape of IT staffing and recruitment. With deep expertise in technology talent
                  acquisition, Alex has advised Fortune 500 companies on building high-performing tech teams.
                </p>
              </div>
            </motion.article>

            {/* Comments Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 bg-white p-8 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">24 Comments</h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">Michael Chen</span>
                      <span className="text-sm text-gray-500">• 2 hours ago</span>
                    </div>
                    <p className="text-gray-600">
                      Great insights on AI in recruitment. We've seen a 50% reduction in screening
                      time since implementing AI tools.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">Sarah Williams</span>
                      <span className="text-sm text-gray-500">• 1 day ago</span>
                    </div>
                    <p className="text-gray-600">
                      The point about employer branding is crucial. We've completely revamped our
                      recruitment marketing strategy based on similar insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]/50"
                  rows={4}
                  placeholder="Add your comment..."
                />
                <div className="flex justify-end mt-4">
                  <button className="px-6 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] font-medium">
                    Post Comment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Related Articles */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={20} className="text-[#0077b5]" />
                <h3 className="font-bold text-lg text-gray-900">Related Articles</h3>
              </div>
              <div className="space-y-4">
                <RelatedArticle
                  title="Future of Remote Work in Tech"
                  date="Nov 28, 2024"
                  readTime="5 min"
                />
                <RelatedArticle
                  title="Building Diverse Tech Teams"
                  date="Oct 15, 2024"
                  readTime="6 min"
                />
                <RelatedArticle
                  title="AI's Impact on Talent Acquisition"
                  date="Sep 22, 2024"
                  readTime="7 min"
                />
                <RelatedArticle
                  title="Skills Gap in Cloud Computing"
                  date="Aug 10, 2024"
                  readTime="4 min"
                />
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0077b5] p-6 rounded-xl text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} />
                <h3 className="font-bold text-lg">Stay Updated</h3>
              </div>
              <p className="text-white/90 mb-6 text-sm">
                Get the latest insights on IT staffing, recruitment trends, and talent strategy delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full px-4 py-3 bg-white text-[#0077b5] font-semibold rounded-lg hover:bg-gray-100">
                  Subscribe Now
                </button>
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag size={20} className="text-[#0077b5]" />
                <h3 className="font-bold text-lg text-gray-900">Popular Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Recruitment", "AI", "Remote Work", "Tech Hiring", "Talent Strategy",
                  "Digital Transformation", "Employer Branding", "Future of Work"
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Briefcase className="mx-auto mb-6 text-[#0077b5]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help Navigating IT Hiring in 2025?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us to access top IT talent, faster hiring cycles, and
              tailored staffing solutions designed for today's evolving tech
              landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#0077b5] text-white font-semibold rounded-full hover:bg-[#006097] transition-all duration-300 flex items-center gap-2">
                <MessageSquare size={20} />
                Talk to Our Experts
              </button>
              <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                Download Hiring Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Blog Section ---------- */
interface BlogSectionProps {
  title: string;
  content: string[];
  bullets?: string[];
  stats?: { label: string; value: string }[];
  icon?: React.ReactNode;
  footer?: string;
}

function BlogSection({ title, content, bullets, stats, icon, footer }: BlogSectionProps) {
  return (
    <div className="pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
      <div className="flex items-start gap-3 mb-6">
        {icon && (
          <div className="w-10 h-10 bg-[#0077b5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      {content.map((text, idx) => (
        <p key={idx} className="text-gray-600 leading-relaxed mb-4">
          {text}
        </p>
      ))}
      
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#0077b5] rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      {stats && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#0077b5] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {footer && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-gray-500 italic">{footer}</p>
        </div>
      )}
    </div>
  );
}

/* ---------- Related Article ---------- */
function RelatedArticle({ title, date, readTime }: { title: string; date: string; readTime: string }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#0077b5]/30 transition-colors">
      <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{readTime} read</span>
      </div>
    </div>
  );
}