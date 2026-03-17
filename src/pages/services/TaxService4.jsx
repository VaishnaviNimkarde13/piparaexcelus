import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TaxService4 = () => {
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
          Business, EO & Trusts - Federal & State Tax Filing
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
            At Pipara, our comprehensive Federal & State Tax Filing services are
            tailored to meet the needs of businesses, Exempt Organizations (EO),
            and trusts operating in the US. Our team of tax professionals is
            dedicated to providing accurate and timely tax filing solutions for
            these entities.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            For businesses, our tax professionals are well-versed in federal and
            state tax laws, ensuring compliance and optimizing tax savings.
            Whether you’re a small business or a large corporation, we provide
            efficient filing of federal and state tax returns.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Exempt Organizations (EO), such as non-profit organizations and
            charitable entities, benefit from our expertise in navigating the
            unique tax-exempt status and reporting requirements. We ensure
            compliance with IRS regulations, maintaining tax-exempt status for
            these organizations.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Trusts, including revocable trusts, irrevocable trusts, and
            charitable trusts, receive tailored tax filing solutions to
            accurately report income, deductions, and distributions. Our tax
            professionals maximize tax efficiency while ensuring compliance with
            federal and state tax laws.
          </Typography>
          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Rest assured that with Pipara, your business, EO, and trust tax
            filing requirements are meticulously handled by our experienced
            professionals.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxService4;
