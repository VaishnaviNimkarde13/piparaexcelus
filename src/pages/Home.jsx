import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { keyframes } from "@mui/system";

import banner from "../assets/images/Header-bg.jpg";

import otc from "../assets/images/OTC.jpg";
import lseg from "../assets/images/LSEG.jpg";
import nse from "../assets/images/nse.jpg";
import isle from "../assets/images/isle.jpg";
import nasdaq from "../assets/images/nasdaq.jpg";
import nyse from "../assets/images/NYSE.png";
import pcaob from "../assets/images/PCAOB.png";
import sec from "../assets/images/sec-logo-2x.png";
import bse from "../assets/images/bse.jpg";

// ============= ANIMATIONS =============
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Home = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [auditVisible, setAuditVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  
  const heroRef = useRef(null);
  const auditRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "hero-section") {
              setHeroVisible(true);
            } else if (entry.target.id === "audit-section") {
              setAuditVisible(true);
            } else if (entry.target.id === "work-section") {
              setWorkVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (auditRef.current) observer.observe(auditRef.current);
    if (workRef.current) observer.observe(workRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        id="home"
        sx={{
          minHeight: { xs: "85vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mt: { md: -10 },
        }}
      >
        <Container
          maxWidth="false"
          sx={{
            zIndex: 2,
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          <Box
            maxWidth="false"
            sx={{
              ml: { xs: "auto", sm: "auto", md: 0, lg: 2 }, // Less aggressive for md
              mr: { xs: "auto", md: 0 },
              mt: { xs: 5, sm: 5, md: -4, lg: -8 }, // Less aggressive for md
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                color: "#090d79",
                lineHeight: 1.1,
                fontSize: {
                  xs: "34px",
                  sm: "48px",
                  md: "55px", // Even smaller for md range
                  lg: "70px",
                },
                mb: 3,
                animation: `${fadeInUp} 1.2s ease-out`,
                transformOrigin: "center",
              }}
            >
              The Power of <br /> Good Advice
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#090d79",
                borderRadius: "40px",
                px: { xs: 4, md: 4.5, lg: 6 }, // Adjusted md padding
                py: { xs: 1.2, md: 1.3, lg: 1.8 }, // Adjusted md padding
                fontSize: { xs: 14, md: 14.5, lg: 16 }, // Adjusted md font
                textTransform: "none",
                fontWeight: 600,
                animation: `${scaleIn} 0.8s ease-out 0.5s both`,
                color: "#fff",
                boxShadow: "0 4px 15px rgba(9, 13, 121, 0.3)",
                "&:hover": {
                  backgroundColor: "#6b1717",
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 20px rgba(107, 23, 23, 0.4)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= AUDIT SECTION ================= */}
      <Box 
        id="audit-section"
        ref={auditRef}
        component="section"
        py={{ xs: 6, md: 10 }} 
        bgcolor="#fff"
      >
        <Container maxWidth="lg" sx={{ textAlign: "center", px: 2 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 33 },
              fontWeight: 700,
              color: "#8a1e1e",
              mb: 1,
              opacity: auditVisible ? 1 : 0,
              transform: auditVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
            }}
          >
            AUDIT AUTHORISATIONS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              color: "#8a1e1e",
              mb: 6,
              opacity: auditVisible ? 1 : 0,
              transform: auditVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1.2s ease-out 0.2s, transform 1.2s ease-out 0.2s",
            }}
          >
            (By Pipara ExcelUS and its related entities)
          </Typography>

          {/* LOGOS - Row on Desktop, Column on Mobile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              width: "100%",
            }}
          >
            {[otc, lseg, nse, isle, nasdaq, nyse, pcaob, sec, bse].map(
              (logo, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: 180, md: 140 },
                    height: { xs: 80, md: 90 },
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#f8f8f8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #e5e5e5",
                    transition: "all 0.3s ease",
                    opacity: auditVisible ? 1 : 0,
                    transform: auditVisible ? "scale(1)" : "scale(0.9)",
                    transition: `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                      borderColor: "#8a1e1e",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="logo"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: { xs: 50, md: 60 },
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )
            )}
          </Box>
        </Container>
      </Box>

      {/* ================= OUR WORK ================= */}
      <Box 
        id="work-section"
        ref={workRef}
        component="section"
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: "#f9eefb",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            sx={{
              fontSize: { xs: 36, md: 38 },
              fontWeight: 600,
              color: "#6d0d47",
              mb: { xs: 6, md: 8 },
              fontFamily: '"Work Sans", Sans-serif',
              letterSpacing: "2px",
              opacity: workVisible ? 1 : 0,
              transform: workVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
            }}
          >
            Our Work
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 6, md: 8 },
              textAlign: "center",
            }}
          >
            {/* Years of Experience */}
            <Box
              sx={{
                opacity: workVisible ? 1 : 0,
                transform: workVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 48, md: 72 },
                  fontWeight: 600,
                  color: "#6d0d47",
                  lineHeight: 1,
                  fontFamily: '"Work Sans", Sans-serif',
                  mb: 1,
                }}
              >
                42
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                  color: "#6d0d47",
                  fontFamily: '"Work Sans", Sans-serif',
                  letterSpacing: "0.5px",
                  maxWidth: "200px",
                  mx: "auto",
                }}
              >
                Years of Experience
              </Typography>
            </Box>

            {/* Qualified Experts */}
            <Box
              sx={{
                opacity: workVisible ? 1 : 0,
                transform: workVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 48, md: 72 },
                  fontWeight: 600,
                  color: "#6d0d47",
                  lineHeight: 1,
                  fontFamily: '"Work Sans", Sans-serif',
                  mb: 1,
                }}
              >
                36
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                  color: "#6d0d47",
                  fontFamily: '"Work Sans", Sans-serif',
                  letterSpacing: "0.5px",
                  maxWidth: "200px",
                  mx: "auto",
                }}
              >
                Qualified Experts
              </Typography>
            </Box>

            {/* Global Locations */}
            <Box
              sx={{
                opacity: workVisible ? 1 : 0,
                transform: workVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 48, md: 72 },
                  fontWeight: 600,
                  color: "#6d0d47",
                  lineHeight: 1,
                  fontFamily: '"Work Sans", Sans-serif',
                  mb: 1,
                }}
              >
                5
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                  color: "#6d0d47",
                  fontFamily: '"Work Sans", Sans-serif',
                  letterSpacing: "0.5px",
                  maxWidth: "200px",
                  mx: "auto",
                }}
              >
                Global Locations
              </Typography>
            </Box>

            {/* Partners */}
            <Box
              sx={{
                opacity: workVisible ? 1 : 0,
                transform: workVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 48, md: 72 },
                  fontWeight: 600,
                  color: "#6d0d47",
                  lineHeight: 1,
                  fontFamily: '"Work Sans", Sans-serif',
                  mb: 1,
                }}
              >
                15
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                  color: "#6d0d47",
                  fontFamily: '"Work Sans", Sans-serif',
                  letterSpacing: "0.5px",
                  maxWidth: "200px",
                  mx: "auto",
                }}
              >
                Partners Operating from 5 Global Locations
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;