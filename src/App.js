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
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;