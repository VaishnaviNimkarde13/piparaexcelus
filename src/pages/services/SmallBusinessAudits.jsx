import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SmallBusinessAudits = () => {
  return (
    <Box
      sx={{
        
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
          Small Business Audits
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
            Audited financial statements carry a higher degree of credibility
            among investors and lenders. Some companies, by law, are required to
            audit their accounts, and others do voluntarily to increase the
            credibility and reliability of the data.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, we redefine the scope of Small Business Audits by
            offering insights beyond traditional financial reviews. Our approach
            involves a comprehensive examination of financial data to meet the
            needs of both internal and external stakeholders, fostering trust in
            the business.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            With our team of experienced professionals well-versed in audits,
            reviews, and compilations, we craft robust audit plans tailored to
            evaluate your business processes thoroughly. Our methodology
            involves meticulous assessment of business risks, performance
            analysis against industry standards, and alignment with management
            expectations.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            We delve deep into every facet of your organization, including
            financial performance, human resources, marketing and sales,
            internal controls, risk management, capital management, and
            information systems. Our perspectives not only enhance the
            efficiency of operations but also establishes us as trusted business
            advisors, guiding you towards sustainable growth and success.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            In today’s demanding business environment, we recognize the need for
            a new focus on compliance, risk management, and corporate
            governance. Our services extend beyond audits, serving as a vital
            resource for companies navigating these complex requirements.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, our Forensic Audit services are not just about numbers;
            they are about artful investigation, expert advisory, and successful
            resolutions. Trust us to be your partners in navigating the
            complexities of forensic audits, litigation, and business
            improvements.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SmallBusinessAudits;
