import { motion } from "framer-motion";
import { Briefcase, Users, Globe, TrendingUp } from "lucide-react";
import OpenRolesPage from "./components/OpenRolesPage";
import { useEffect, useRef } from "react";
import axios from "axios";
import { setAllJobs } from "@/features/jobs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CareersPage = () => {
  const dispatch = useDispatch();
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const { allJobs } = useSelector((state: RootState) => state.jobData);
  const jobsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const customergetAllJobsData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/jobs/get-all-jobs`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          dispatch(setAllJobs(response.data.data));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    customergetAllJobsData();
  }, []);
  const handleScrollToJobs = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    handleScrollToJobs();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#0a66c2] via-[#0a5aad] to-[#084a8f] text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Build Your Career With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Join a team that values innovation, collaboration, and growth. We're
            creating meaningful technology that connects professionals
            worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleScrollToJobs}
              className="mt-10 bg-white text-[#0a66c2] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Join Us?</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We're building something special, and we're looking for people who
            want to make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: Users,
              title: "Collaborative Culture",
              description:
                "Work alongside driven professionals who value teamwork and shared success.",
            },
            {
              icon: TrendingUp,
              title: "Career Growth",
              description:
                "Continuous learning opportunities and clear advancement paths.",
            },
            {
              icon: Globe,
              title: "Global Impact",
              description:
                "Help build solutions used by professionals across the globe.",
            },
            {
              icon: Briefcase,
              title: "Work Flexibility",
              description:
                "Remote-friendly policies and balanced work-life culture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl hover:bg-gray-50 transition-all"
            >
              <div className="w-12 h-12 bg-[#0a66c2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                <item.icon
                  className="text-[#0a66c2] group-hover:text-white"
                  size={24}
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section ref={jobsRef} className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Roles
            </h2>
            <p className="text-lg text-gray-600">
              Join us in shaping the future of professional networking
            </p>
          </div>

          {/* Jobs Component */}
          <OpenRolesPage jobsData={allJobs} />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a66c2] to-[#084a8f] opacity-5" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-gray-500">
            Even if you don't see a perfect match, we'd love to hear from you.
            Send your resume and let's explore opportunities together.
          </p>
          <button className="mt-8 bg-[#0a66c2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#004182] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
            Send Resume
          </button>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default CareersPage;
