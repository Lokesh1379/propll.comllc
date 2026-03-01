import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import PropllIntro from "./intro/PropllIntro";
import CompanyProfile from "@/components/WhoWeare";
import ClientsScroller from "@/components/ClientsScrollbar";
import ServicesProgressSection from "@/components/ServicesProgress";
import HowItWorks from "@/components/HowItsWork";
import OurMision from "@/components/OurMission";

const Index = () => {
  return (
    <div className=" w-screen overflow-x-hidden">
      <Navbar />
      <PropllIntro />
      <Hero />
      <CompanyProfile />
      <ServicesProgressSection />
      <HowItWorks />
      <OurMision />
      <ClientsScroller />
      <Footer />
    </div>
  );
};

export default Index;
