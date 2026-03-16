import React from "react";
import { Box, Container, Typography } from "@mui/material";

const IssuerAudits = () => {
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
            As skilled professionals, we take pride in delivering meticulous
            assurance services, ensuring the accuracy and reliability of
            financial information for entities that issues securities or are
            regulated by SEC. being a PCAOB registered firm, we are capable of
            undertaking audits of entities that are planning to either file
            under Reg A, a S-1, a F-1, or a SPAC. We have been working on issuer
            audits since 2022, and have gained varied experience over
            engagements for issuers / prospective issuers.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            We also work with OTC traded companies, providing transparent,
            ethical and TIMELY audit services.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, we understand that the audit of financial statements for
            issuers is a critical process that goes beyond routine compliance.
            We are dedicated to staying informed about regulatory changes and
            possess the expertise required to deliver comprehensive assurance
            services customized to the specific requirements of issuers.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Our experienced audit team conducts thorough financial audits,
            scrutinizing every aspect of an issuer’s financial statements with
            precision and expertise. Apart from the numbers, our Issuer Audit
            services provide assurance to stakeholders that financial
            statements comply with relevant accounting standards and regulatory
            requirements.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
            }}
          >
            We help identify and address potential financial risks proactively.
            Our comprehensive services provide insights that empower issuers to
            navigate challenges with foresight. The insights derived from our
            audits empower issuer leadership with information for strategic
            decision-making, risk management, and future planning.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default IssuerAudits;