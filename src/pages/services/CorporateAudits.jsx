import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bgimg from "../../assets/images/service_bg.png";

const CorporateAudits = () => {
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
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            px: 3,
            py: 8,
          }}
        >
          Corporate Audits
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
            Amidst the complexity of running a business, the need for clarity
            and assurance is paramount. That’s where the Corporate Audit comes
            in. It shines a light on financial transactions and operational
            details, providing transparency and assurance in the business world.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, our audit process encompasses reviewing financial
            statements and analyzing accounting and financial practices to
            ensure accuracy, identify potential risks, and maintain regulatory
            compliance. With a focus on efficiency and precision, our proficient
            team meticulously examines accounts, records, operations, cash
            flows, and other procedures to verify that financial statements
            accurately reflect the company’s financial position and transactions
            adhere to accounting standards.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            We understand the importance of timely audit services in today’s
            dynamic business environment. Our experienced professionals are
            dedicated to delivering prompt and insightful audit solutions that
            meet the specific needs of our clients. With our proactive approach
            and attention to detail, we ensure that our clients receive timely
            audit reports and recommendations to support their business
            objectives and regulatory requirements.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CorporateAudits;
