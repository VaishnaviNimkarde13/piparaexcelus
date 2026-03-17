import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bgimg from "../../assets/images/service_bg.png";

const TaxService1 = () => {
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
          Individuals - Federal & State Tax Filing
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
            At Pipara, we recognize the complexities individuals face when it
            comes to filing federal and state taxes in the US. Our dedicated
            team offers personalized Federal & State Tax Filing services
            designed to simplify the process for you.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Our tax professionals stay up-to-date with the latest tax laws and
            regulations, ensuring accurate preparation and timely filing of your
            tax returns. Whether you’re a salaried employee, self-employed, or
            have unique tax situations, we provide tailored solutions to meet
            your specific needs.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            From gathering necessary documents to identifying eligible
            deductions and credits, we guide you through every step of the tax
            filing process with expertise and efficiency. Our goal is to
            maximize your tax savings while ensuring full compliance with
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
            With Pipara, you can trust that your tax filing needs are handled
            with precision and care.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxService1;
