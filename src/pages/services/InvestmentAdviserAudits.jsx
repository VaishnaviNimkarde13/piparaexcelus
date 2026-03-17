import React from "react";
import { Box, Container, Typography } from "@mui/material";

const InvestmentAdviserAudits = () => {
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
          Investment Adviser Audits
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
            As regulations continue to evolve, registered advisers to private
            funds are now required to provide quarterly statements to investors,
            obtain annual audits for the funds they advise, and secure fairness
            or valuation opinions for adviser-led secondary transactions.
            Private funds previously subject to surprise exams must now prepare
            for annual audits to meet this new requirement. Our comprehensive
            audit solutions not only meet these regulatory demands but also
            ensure alignment with the audit provision in the custody rule of the
            Investment Advisers Act of 1940.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, we specialize in navigating these regulatory changes,
            offering tailored audit services to ensure compliance, transparency,
            and the integrity of investment practices.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default InvestmentAdviserAudits;
