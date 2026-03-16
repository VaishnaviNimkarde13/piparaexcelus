import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import journeyBg from "../assets/images/about-bg.png";

const AboutSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "row", // Always row, never column
        width: "100%",
        mb: { xs: 8, md: 12 },
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* ================= LEFT SIDE ================= */}
      <Box
        sx={{
          width: "50%", // Always 50% width
          backgroundColor: "rgb(255, 254, 254)",
          px: { xs: 2, sm: 3, md: 8 }, // Reduced padding for mobile
          py: { xs: 4, sm: 5, md: 10 }, // Reduced padding for mobile
        }}
      >
        <Typography
          sx={{
            color: "#2f4da1",
            letterSpacing: { xs: "4px", md: "2px" },
            fontSize: { xs: 12, sm: 14, md: 14 },
            fontWeight: 500,
            mb: { xs: 1.5, md: 2 },
          }}
        >
          ABOUT
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 22, sm: 26, md: 36 },
            fontWeight: 600,
            color: "#203c8a",
            lineHeight: { xs: 1.5, md: 1.15 }, // Increased from 1.3 to 1.5
            letterSpacing: { xs: "1px", md: "normal" },
            mb: { xs: 2.5, md: 4 },
            maxWidth: 520,
          }}
        >
          Our Experts are <br /> the Finest
        </Typography>

        {/* Mobile/Tablet Version - EXACT TEXT FROM IMAGE */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            sx={{
              fontSize: 13,
              lineHeight: 2.2, // Increased from 1.8 to 2.2
              letterSpacing: "0.8px",
              color: "#7a1f4d",
              mb: 3, // Increased from 2.5 to 3
              maxWidth: 600,
            }}
          >
            Welcome to Pipara, a trusted name in the audit and forensics arena with a legacy spanning over 40 years. With a dedicated team of over 250 enthusiasts, we stand as a beacon of excellence in the financial industry. We stand united as a team, committed to delivering superlative services to our clients that transcend expectations, one sophisticated assignment at a time.
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.5, // Increased from 1.8 to 2.2
              letterSpacing: "1.2px",
              color: "#7a1f4d",
              mb: 3, // Increased from 2.5 to 3
              maxWidth: 600,
              fontWeight: 580,
            }}
          >
            Global Presence and Commitment to Excellence
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              lineHeight: 2.2, // Increased from 1.8 to 2.2
              letterSpacing: "0.8px",
              color: "#7a1f4d",
              mb: 3, // Increased from 2.5 to 3
              maxWidth: 600,
            }}
          >
            As a PCAOB registered firm, our distinguished track record includes the successful execution of over 16 engagements, showcasing our prowess in delivering exceptional results.
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              lineHeight: 2.2, // Increased from 1.8 to 2.2
              letterSpacing: "0.8px",
              color: "#7a1f4d",
              mb: 3, // Increased from 2.5 to 3
              maxWidth: 600,
            }}
          >
            Specializing in a myriad of services such as 401k audits, corporate audits, Management audits, Surprise examinations, SOC Audits, Corporate audits, issuer audits and Forensic investigations, we extend our expertise to encompass comprehensive taxation services. This includes intricate areas of filing of corporate tax, individual taxation and estate taxation, where we navigate the complexities to offer tailored solutions for our esteemed US clients.
          </Typography>
        </Box>

        {/* Desktop Version - Full Original Text */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#7a1f4d",
              mb: 3,
              maxWidth: 600,
            }}
          >
            Welcome to Pipara, a trusted name in the audit and forensics arena with a legacy spanning over 40 years.
            With a dedicated team of over 250 enthusiasts, we stand as a beacon of excellence in the financial industry.
            We stand united as a team, committed to delivering superlative services to our clients that transcend expectations, one sophisticated assignment at a time.
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#7a1f4d",
              mb: 3,
              maxWidth: 600,
            }}
          >
            <strong>Global Presence and Commitment to Excellence</strong>
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#7a1f4d",
              mb: 3,
              maxWidth: 600,
            }}
          >
            Our practice has expanded globally, catering to clients from various corners of the world through our offices in Singapore, Dubai, London, and New York under Pipara ExcelUS LLC.
            Our widespread international presence underscores our dedication to delivering excellence, making us the preferred choice for clients in search of trusted industry experts.
            Additionally, we take pride in being among the select group of 18 auditors registered with IOM FSA in the Isle of Man.
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#7a1f4d",
              mb: 3,
              maxWidth: 600,
            }}
          >
            <strong>Proven Track Record</strong>
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#7a1f4d",
              maxWidth: 600,
            }}
          >
            As a PCAOB registered firm, our distinguished track record includes the successful execution of over 16 engagements, showcasing our prowess in delivering exceptional results.
            Specializing in 401k audits, corporate audits, management audits, SOC audits, issuer audits, forensic investigations, and comprehensive taxation services.
          </Typography>
        </Box>
      </Box>

      {/* ================= RIGHT SIDE ================= */}
      <Box
        sx={{
          width: "50%", // Always 50% width
          px: { xs: 2, sm: 3, md: 8 }, // Reduced padding for mobile
          py: { xs: 4, sm: 5, md: 10 }, // Reduced padding for mobile
          // Different backgrounds for mobile vs desktop
          backgroundImage: { 
            xs: "none", // No image on mobile
            md: `url(${journeyBg})` // Image on desktop
          },
          backgroundColor: "#f9eefb", // Light purple/pink from screenshot
          backgroundSize: { md: "contain" },
          backgroundRepeat: { md: "no-repeat" },
          backgroundPosition: { md: "right center" },
          backgroundAttachment: { md: "fixed" },
        }}
      >
        <Box
          sx={{
            maxWidth: 620,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, sm: 26, md: 32 },
              fontWeight: 600,
              color: "#203c8a",
              lineHeight: { xs: 1.5, md: 1.2 }, // Increased from 1.3 to 1.5
              letterSpacing: { xs: "1px", md: "normal" },
              mb: { xs: 3, md: 4 }, // Increased from 2.5 to 3
            }}
          >
            Our Journey
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: { xs: 2.2, md: 1.7 }, // Increased from 1.8 to 2.2
              letterSpacing: { xs: "0.8px", md: "normal" },
              color: "#5a005a",
              mb: { xs: 3, md: 3 }, // Increased from 2.5 to 3
            }}
          >
            We started with a coworking space in 2021 with no visibility on how our professional journey would unfold over a short span of 4 years.
            Pipara has received an exceptional response from its clientele, built on trust, commitment to quality, and delivering projects at promised times.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: { xs: 2.2, md: 1.7 }, // Increased from 1.8 to 2.2
              letterSpacing: { xs: "0.8px", md: "normal" },
              color: "#5a005a",
              mb: { xs: 3, md: 3 }, // Increased from 2.5 to 3
            }}
          >
            Today we operate from Rockefeller Center (New York), Mazaya Center (Dubai), Shenton House (Singapore), Bishopsgate (London), and marquee India offices.
            It's the people who have joined us at every step of the journey and contributed to the growth story.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: { xs: 2.2, md: 1.7 }, // Increased from 1.8 to 2.2
              letterSpacing: { xs: "0.8px", md: "normal" },
              color: "#5a005a",
              mb: { xs: 4, md: 4 }, // Increased from 3.5 to 4
            }}
          >
            The strength of Pipara lies in the caliber of our team—individuals who boast formidable qualifications and 
            affiliations with esteemed professional bodies such as ICAI and AICPA. We take immense pride in the unity of 
            our team, drawing strength from the rich tapestry of diverse talents and experiences.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: { xs: 2.2, md: 1.7 }, // Increased from 1.8 to 2.2
              letterSpacing: { xs: "0.8px", md: "normal" },
              fontWeight: 500,
              color: "#5a005a",
            }}
          >
            We are not an Accountancy firm. We are Passion. We are Grit. We are Commitment to our Profession.
            We are the Drive for Excellence. WE are Pipara!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;