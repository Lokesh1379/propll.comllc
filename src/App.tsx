import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Aboutus from "./pages/aboutus";
import SoftwareDevelopersSection from "./pages/services/SoftwareDevelopersSection";
import CloudAndDevOpsSection from "./pages/services/CloudAndDevOpsSection";
import CyberSecuritySection from "./pages/services/CyberSecuritySection";
import DataSpecialistsSection from "./pages/services/DataSpecialistsSection";
import NetworkAndSystemAdminsSection from "./pages/services/NetworkAndSystemAdminsSection";
import ITProjectManagersSection from "./pages/services/ITProjectManagersSection";
import QAAndTestEngineersSection from "./pages/services/QAAndTestEngineersSection";
import ITConsultantsSection from "./pages/services/ITConsultantsSection";
import TechnicalSupportSpecialistsSection from "./pages/services/TechnicalSupportSpecialistsSection";
import UIUXDesignersSection from "./pages/services/UIUXDesignersSection";
import MuleSoftDevelopersSection from "./pages/services/MuleSoftDevelopersSection";
import SalesforceDevelopersSection from "./pages/services/SalesforceDevelopersSection";
import PowerBIDevelopersSection from "./pages/services/PowerBIDevelopersSection";
import ETLDevelopersSection from "./pages/services/ETLDevelopersSection";
import DatabaseAdministratorsSection from "./pages/services/DatabaseAdministratorsSection";
import ServicesPage from "./pages/services/ServicesPage";
import WhyChooseUsSection from "./pages/whyus/WhyChooseUsSection";
import IndustriesWeServeSection from "./pages/industries/IndustriesWeServeSection";
import BlogPage from "./pages/blogs/Blogs";
import AdvancedDataSpecialistsSection from "./pages/specialists/AdvancedDataSpecialistsSection";
import ContactUs from "./pages/contact/ContactUs";
import ScrollToTop from "./components/ui/ScrolltoTop";
import PropllIntro from "./pages/intro/PropllIntro";
import AdminLogin from "./pages/admin/login/AdminLogin";
import AdminCreation from "./pages/admin/admins";
import JobListPage from "./pages/admin/jobs";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ToastPopup from "./components/ui/ToastMessage";
import LogoutModal from "./components/ui/LogoutModal";
import CreateAdminModal from "./pages/admin/admins/components/CreateAdminModal";
import CareersPage from "./pages/carrers";
import JobDetailsCard from "./pages/carrers/components/JobPost";
import Coretechnologies from "./pages/coreTechnologies";
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ToastPopup />
        <Sonner />
        <LogoutModal />
        <CreateAdminModal />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/intro" element={<PropllIntro />} />
            <Route path="/core-technologies" element={<Coretechnologies />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/software-services"
              element={<SoftwareDevelopersSection />}
            />
            <Route path="/cloud-services" element={<CloudAndDevOpsSection />} />
            <Route
              path="/cybersecurity-services"
              element={<CyberSecuritySection />}
            />
            <Route
              path="/dataspecialists-services"
              element={<DataSpecialistsSection />}
            />
            <Route
              path="/network-services"
              element={<NetworkAndSystemAdminsSection />}
            />
            <Route path="/it-services" element={<ITProjectManagersSection />} />
            <Route
              path="/qa-services"
              element={<QAAndTestEngineersSection />}
            />
            <Route
              path="/itconsulting-services"
              element={<ITConsultantsSection />}
            />
            <Route
              path="/technicalsupport-services"
              element={<TechnicalSupportSpecialistsSection />}
            />
            <Route path="/uiux-services" element={<UIUXDesignersSection />} />
            <Route
              path="/mulesoft-services"
              element={<MuleSoftDevelopersSection />}
            />
            <Route
              path="/salesforce-services"
              element={<SalesforceDevelopersSection />}
            />
            <Route
              path="/powerbi-services"
              element={<PowerBIDevelopersSection />}
            />
            <Route
              path="/etldeveloper-services"
              element={<ETLDevelopersSection />}
            />
            <Route
              path="/databaseadministration-services"
              element={<DatabaseAdministratorsSection />}
            />
            <Route path="/why-us" element={<WhyChooseUsSection />} />
            <Route path="/carrers-at-propll" element={<CareersPage />} />
            <Route
              path={`/carrers-at-propll/:id`}
              element={<JobDetailsCard />}
            />
            <Route path="/industries" element={<IndustriesWeServeSection />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route
              path="/specialists"
              element={<AdvancedDataSpecialistsSection />}
            />

            {/* Admin  Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admins" element={<AdminCreation />} />
            <Route path="/jobs" element={<JobListPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
