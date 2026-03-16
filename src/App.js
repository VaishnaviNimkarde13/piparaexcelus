import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ 
      width: "100%",
      '& .MuiContainer-root': {
        maxWidth: 'none !important', // Override all MUI Containers
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
      }
    }}>
      <Navbar />
      <Home />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
