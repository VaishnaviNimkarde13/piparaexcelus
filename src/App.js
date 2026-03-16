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
import CorporateAudits from "./pages/services/CorporateAudits";
import SocAudits from "./pages/services/SocAudits.jsx";

function App() {
  return (
    <Box sx={{ 
      width: "100%",
      '& .MuiContainer-root': {
        maxWidth: 'none !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
      }
    }}>
      <Navbar />
      <Routes>
        {/* Main route - shows all components on one page */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Testimonials />
            <Contact />
          </>
        } />
        
        {/* Service routes - show only the service page */}
        <Route path="/issuer-audits" element={<IssuerAudits />} />
        <Route path="/surprise-examination-audits" element={<SurpriseExaminationAudits />} />
        <Route path="/corporate-audits" element={< CorporateAudits/>} />
        <Route path="/soc-audits" element={<SocAudits />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;