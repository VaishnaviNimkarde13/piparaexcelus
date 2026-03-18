import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
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
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          id="about"
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            mb: { xs: 8, md: 12 },
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {/* ================= LEFT SIDE ================= */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "rgb(255, 254, 254)",
              px: { xs: 1, sm: 2, md: 4 },
              py: { xs: 3, sm: 4, md: 8 },
            }}
          >
            <Typography
              sx={{
                color: "#2f4da1",
                letterSpacing: { xs: "3px", md: "2px" },
                fontSize: { xs: 12, sm: 14 },
                fontWeight: 500,
                mb: 2,
              }}
            >
              ABOUT
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 22, sm: 26, md: 36 },
                fontWeight: 600,
                color: "#203c8a",
                lineHeight: 1.4,
                mb: 3,
              }}
            >
              Our Experts are <br /> the Finest
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.8,
                color: "#7a1f4d",
                mb: 3,
              }}
            >
              Welcome to Pipara, a trusted name in the audit and forensics arena
              with a legacy spanning over 40 years. With a dedicated team of
              over 250 enthusiasts, we stand as a beacon of excellence in the
              financial industry. We stand united as a team, committed to
              delivering superlative services to our clients that transcend
              expectations, one sophisticated assignment at a time.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.8,
                color: "#7a1f4d",
                mb: 3,
                fontWeight: 600,
              }}
            >
              Global Presence and Commitment to Excellence
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.8,
                color: "#7a1f4d",
              }}
            >
              Our practice has expanded globally, catering to clients from
              various corners of the world through our offices in Singapore,
              Dubai, London, and New York under Pipara ExcelUS LLC. Our
              widespread international presence underscores our dedication to
              delivering excellence, making us the preferred choice for clients
              in search of trusted industry experts. Additionally, we take pride
              in being among the select group of 18 auditors registered with IOM
              FSA in the Isle of Man.
            </Typography>
            <br />

            <Typography
              sx={{
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.8,
                color: "#7a1f4d",
                mb: 3,
                fontWeight: 600,
              }}
            >
              Proven Track Record
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.8,
                color: "#7a1f4d",
              }}
            >
              As a PCAOB registered firm, our distinguished track record
              includes the successful execution of over 16 engagements,
              showcasing our prowess in delivering exceptional results.
              Specializing in 401k audits, corporate audits, management audits,
              SOC audits, issuer audits, forensic investigations, and
              comprehensive taxation services.
            </Typography>
          </Box>

          {/* ================= RIGHT SIDE WITH STICKY BACKGROUND ================= */}
          <Box
            sx={{
              flex: 1,
              position: "relative", // Create positioning context for the pseudo-element
              px: { xs: 1, sm: 2, md: 4 },
              py: { xs: 3, sm: 4, md: 8 },
              backgroundColor: "#f9eefb",
              overflow: "hidden", // Hide any overflow from the background
              // Create a pseudo-element for the sticky background
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: {
                  xs: "none",
                  md: `url(${journeyBg})`,
                },
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundAttachment: { md: "fixed" }, // Make the background fixed/sticky
                zIndex: 1, // Place behind the content
                pointerEvents: "none", // Allow clicks to pass through
              },
            }}
          >
            {/* Content wrapper with relative positioning to appear above the background */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2, // Above the background
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s ease",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 26, md: 32 },
                  fontWeight: 600,
                  color: "#203c8a",
                  mb: 3,
                }}
              >
                Our Journey
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 16 },
                  lineHeight: 1.8,
                  color: "#5a005a",
                  mb: 3,
                }}
              >
                We started with a coworking space in 2021 with no visibility on
                how our professional journey would unfold over a short span of 4
                years. Pipara has received an exceptional response from its
                clientele, built on trust, commitment to quality, and delivering
                projects at promised times.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 16 },
                  lineHeight: 1.8,
                  color: "#5a005a",
                  mb: 3,
                }}
              >
                Today we operate from Rockefeller Center (New York), Mazaya
                Center (Dubai), Shenton House (Singapore), Bishopsgate (London),
                and marquee India offices. It's the people who have joined us at
                every step of the journey and contributed to the growth story.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 16 },
                  lineHeight: 1.8,
                  color: "#5a005a",
                  fontWeight: 500,
                }}
              >
                The strength of Pipara lies in the caliber of our
                team—individuals who boast formidable qualifications and
                affiliations with esteemed professional bodies such as ICAI and
                AICPA. We take immense pride in the unity of our team, drawing
                strength from the rich tapestry of diverse talents and
                experiences.
              </Typography>
              <br/>
              <Typography
                sx={{
                  fontSize: { xs: 13, md: 16 },
                  lineHeight: 1.8,
                  color: "#5a005a",
                  fontWeight: 500,
                }}
              >
                We are not an Accountancy firm. We are Passion. We are Grit. We
                are Commitment to our Profession. We are the Drive for
                Excellence. WE are Pipara!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;