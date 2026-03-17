import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TaxService3 = () => {
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
          Individuals - Expat Tax Assessment & Filing under Treaties
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
            Whether you’re a US citizen living abroad or a foreign national
            working in the US, we can assist you in assessing your tax residency
            status, identifying applicable tax treaties and exemptions, and
            optimizing your tax situation.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            At Pipara, we specialize in providing tailored Expat Tax Assessment
            & Filing services for individuals living abroad in the US. We
            understand the complexities involved in assessing and filing taxes
            under treaties, and our experienced team is here to help you
            navigate these challenges.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Our team of tax professionals is well-versed in the intricate tax
            laws and treaties that govern expatriate taxation. We ensure that
            you maximize tax benefits while remaining compliant with US tax
            regulations and international treaties.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxService3;
