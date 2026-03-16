import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SurpriseExaminationAudits = () => {
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
          Surprise Examination Audits (IAPD)
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
            As per regulatory requirements, investment advisors are mandated to
            undergo a “Surprise” accountant examination to ensure the existence
            and proper naming of client funds and securities held at custodians,
            with totals matching the advisor’s records.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, we pride ourselves on being a PCAOB inspected entity,
            fully equipped and authorized to conduct audits for investment
            entities of any scale. Our comprehensive audit approach is designed
            to streamline the audit process, ensuring a seamless and timely
            experience for our clients.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Our experienced audit team conducts thorough procedures to ensure
            the security of client funds and securities. This includes
            confirming with qualified custodians and clients regarding the
            existence and proper custody of assets, reconciling confirmation
            responses with investment advisor records, and implementing
            alternative procedures when necessary.
          </Typography>

          
        </Box>
      </Container>
    </Box>
  );
};

export default SurpriseExaminationAudits;
