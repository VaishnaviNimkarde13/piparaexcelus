import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bgimg from "../../assets/images/service_bg.png";

const TaxService2 = () => {
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
          Individuals - Estate & Gift Return Filing
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
            Our experienced team of tax professionals is dedicated to providing
            personalized services tailored to meet your specific needs and
            goals. Whether you are planning for the future or managing an estate
            or gift, we can help ensure compliance with federal and state tax
            regulations while maximizing tax efficiency.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxService2;
