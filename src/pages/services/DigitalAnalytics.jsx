import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bgimg from "../../assets/images/service_bg.png";

const DigitalAnalytics = () => {
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
          Digital Analytics & Data Driven Insights
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
            Data is the cornerstone of business success. It empowers
            organizations to streamline operations, monitor controls, and drive
            proactive decision-making. However, harnessing the full potential of
            data requires more than just access – it demands accurate analysis
            and actionable insights.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Pipara specializes in Digital Analytics & Data-Driven Insights,
            offering a comprehensive suite of services to help businesses unlock
            the value of their data. Our team of experts leverages a blend of
            internal audit, information technology, and data analytics expertise
            to develop and optimize data management and analytics frameworks.
            From managing data silos and ensuring data integrity to providing
            training and assurance, we offer tailored solutions to meet your
            specific needs.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            By breaking down complex data into accessible structures and
            uncovering meaningful trends, Pipara enables your team to make
            informed decisions with confidence. We collaborate closely with your
            organization to understand your operations, data flows, and
            strategic initiatives, allowing us to provide deep analysis and
            actionable guidance. With Pipara, harnessing the power of data
            becomes not just a possibility, but a strategic advantage.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalAnalytics;
