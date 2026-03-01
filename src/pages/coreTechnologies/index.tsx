import CoreServices from "@/components/CoreTechnologies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TalentExpertise from "@/components/RolesOffering";

const Coretechnologies = () => {
  return (
    <div className="min-h-screen grid items-start justify-center">
      <Navbar />
      <CoreServices />
      <TalentExpertise />
      <Footer />
    </div>
  );
};
export default Coretechnologies;
