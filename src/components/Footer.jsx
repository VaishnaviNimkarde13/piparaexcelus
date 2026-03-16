import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fafafde7",   // footer background
        py: { xs: 3, md: 4 },         // responsive padding
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{
            color: "#711e1e",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}
        >
          © 2023 by Pipara Excelus
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
