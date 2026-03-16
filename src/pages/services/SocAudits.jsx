import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SocAudits = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#294b8c",
            fontWeight: 700,
            mb: 5,
            fontSize: { xs: "28px", md: "40px" },
          }}
        >
          Issuer audits
        </Typography>

        {/* Content */}
        <Box
          sx={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
              textAlign: "left",
            }}
          >
            At Pipara, we go above and beyond in our SOC audit services,
            ensuring strict adherence to service-specific professional
            standards, professional code of conduct, and quality control
            requirements. Our dedicated team possesses a comprehensive
            understanding of the industry and business, allowing us to identify
            specific cybersecurity risks and tailor our approach accordingly.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            With expertise in evaluating processes and control effectiveness, we
            provide both advisory and assurance services that are aligned with
            our clients’ unique needs. Our team’s proficiency extends to IT
            processes and controls, including management of operating systems,
            networking, virtualization software, and related security
            techniques.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            We are well-versed in security principles and concepts, software
            development, incident management, and information risk management.
            We conduct thorough SOC audits that not only meet regulatory
            requirements but also provide valuable insights to strengthens the
            organization’s control environment and enhance customer trust.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SocAudits;
