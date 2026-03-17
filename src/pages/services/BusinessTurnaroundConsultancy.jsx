import React from "react";
import { Box, Container, Typography } from "@mui/material";

const BusinessTurnaroundConsultancy = () => {
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
          Business Turnaround Consultancy
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
            In today’s dynamic business landscape, organizations often encounter
            challenges that necessitate strategic intervention to rejuvenate
            operations and foster sustainable growth. Our seasoned professionals
            specialize in delivering timely and effective turnaround solutions,
            recognizing the urgency of addressing critical issues promptly.
          </Typography>

          <Typography
            sx={{
              color: "#7a1f2b",
              fontSize: "16px",
              lineHeight: "1.9",
              mb: 3,
            }}
          >
            Our turnaround consultancy services are characterized by a proactive
            approach, meticulous analysis, and rapid implementation of strategic
            initiatives aimed at stabilizing operations, optimizing resources,
            and maximizing value. With a profound understanding of the
            intricacies of business turnaround scenarios, we collaborate closely
            with stakeholders to devise and execute customized turnaround plans
            aligned with your organization’s objectives and priorities. Our
            prompt services ensure that decisive actions are taken promptly to
            tackle pressing challenges and position your business for enduring
            success.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessTurnaroundConsultancy;
