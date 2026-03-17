import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";

// Import all service pages
import IssuerAudits from "./pages/services/IssuerAudits";
import SurpriseExaminationAudits from "./pages/services/SurpriseExaminationAudits";
import InvestmentAdviserAudits from "./pages/services/InvestmentAdviserAudits.jsx";
import SmallBusinessAudits from "./pages/services/SmallBusinessAudits.jsx";
import CorporateAudits from "./pages/services/CorporateAudits";
import SocAudits from "./pages/services/SocAudits.jsx";
import ForensicInvestigation from "./pages/services/ForensicInvestigation.jsx";
import BusinessTurnaroundConsultancy from "./pages/services/BusinessTurnaroundConsultancy.jsx";

import DigitalAnalytics from "./pages/services/DigitalAnalytics";

import TaxService1 from "./pages/services/TaxService1.jsx";
import TaxService2 from "./pages/services/TaxService2.jsx";
import TaxService3 from "./pages/services/TaxService3.jsx";
import TaxService4 from "./pages/services/TaxService4.jsx";

import DueDiligence from "./pages/services/DueDiligence.jsx";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        "& .MuiContainer-root": {
          maxWidth: "none !important",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      }}
    >
      <Navbar />
      <Routes>
        {/* Main route - shows all components on one page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Service routes - show only the service page */}
        <Route path="/issuer-audits" element={<IssuerAudits />} />
        <Route
          path="/surprise-examination-audits"
          element={<SurpriseExaminationAudits />}
        />
        <Route
          path="/investment-adviser"
          element={<InvestmentAdviserAudits />}
        />
        <Route path="/small-business" element={<SmallBusinessAudits />} />
        <Route path="/corporate-audits" element={<CorporateAudits />} />
        <Route path="/soc-audits" element={<SocAudits />} />
        <Route
          path="/forensic-investigation"
          element={<ForensicInvestigation />}
        />
        <Route 
          path="/business-turnaround-consultancy"
          element={<BusinessTurnaroundConsultancy />}
        />

        <Route path="/digital-audits" element={<DigitalAnalytics />} />

        <Route path="/individual-federal-tax" element={<TaxService1 />} />
        <Route path="/estate-gift-tax" element={<TaxService2 />} />
        <Route path="/expat-tax" element={<TaxService3 />} />
        <Route path="/business-trust-tax" element={<TaxService4 />} />

        <Route path="/financial-due-diligence" element={<DueDiligence />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
