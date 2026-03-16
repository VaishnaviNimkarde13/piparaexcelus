import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ================= TESTIMONIAL DATA ================= */
const testimonials = [
  {
    quote:
      "Having worked with many US Auditors in the past, our corporation is happy with Pipara's work.",
    author: "COO of a Public Company (Netherlands)",
  },
  {
    quote:
      "We were struggling with audits, we were behind on our filing dates and always running into extension with our previous auditors. The work ethic of this firm is strong, they remain available day & night on filing days, they make us look good.",
    author: "President of SPAC Entity (NY)",
  },
  {
    quote:
      "As someone that is dealing with multiple reporting entities, credibility is important for us. We are happy to have Pipara as our auditors.",
    author: "Chairman of 5 Listed Corporations (NY)",
  },
  {
    quote:
      "Pipara always delivers on time. That is what matters the most to a Nasdaq Reporting company.",
    author: "President of the Company (UK) — A Public M & A Company",
  },
  {
    quote:
      "Investors & bankers are comfortable with Pipara as our auditors, gets the job done!",
    author: "Chairman of NASDAQ Uplist Company (Dubai)",
  },
];

/* ================= PAGE ================= */
const Testimonials = () => {
  return (
    <>
      {/* TOP BAR WITH TESTIMONIALS TITLE */}
      <Box
        id="testimonials"
        sx={{
          backgroundColor: "#1b2b5e",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 16, md: 18 },
            letterSpacing: "4px",
            fontWeight: 600,
            textTransform: "uppercase",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          TESTIMONIALS
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box
        sx={{
          backgroundColor: "#f2e6f2",
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <Swiper
            modules={[Navigation, Autoplay]}
            // DISABLE DEFAULT SWIPER NAVIGATION
            navigation={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            slidesPerView={1}
            style={{ position: "relative" }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    px: { xs: 2, md: 4 },
                  }}
                >

                  {/* QUOTE */}
                  <Typography
                    sx={{
                      fontSize: { xs: 15, md: 16 },
                      color: "#4a2c4a",
                      lineHeight: 1.8,
                      maxWidth: 700,
                      margin: "0 auto",
                      fontWeight: 400,
                      fontFamily: "'Montserrat', sans-serif",
                      // fontStyle: "italic",
                      mb: 3,
                    }}
                  >
                    {item.quote}
                  </Typography>

                  {/* AUTHOR */}
                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 14 },
                      fontWeight: 600,
                      color: "#1b2b5e",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows - Now these will be the ONLY arrows */}
          <Box
            className="swiper-button-prev"
            onClick={() => {
              const swiper = document.querySelector('.swiper')?.swiper;
              swiper?.slidePrev();
            }}
            sx={{
              position: "absolute",
              left: { xs: "10px", md: "-40px" },
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              backgroundColor: "transparent",
              border: "2px solid #1b2b5e",
              borderRadius: "50%",
              color: "#1b2b5e",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              '&:hover': {
                backgroundColor: "#1b2b5e",
                color: "#fff",
              },
              '&::after': {
                fontSize: "18px",
                fontWeight: "bold",
                content: '"‹"',
              },
            }}
          />
          <Box
            className="swiper-button-next"
            onClick={() => {
              const swiper = document.querySelector('.swiper')?.swiper;
              swiper?.slideNext();
            }}
            sx={{
              position: "absolute",
              right: { xs: "10px", md: "-40px" },
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              backgroundColor: "transparent",
              border: "2px solid #1b2b5e",
              borderRadius: "50%",
              color: "#1b2b5e",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              '&:hover': {
                backgroundColor: "#1b2b5e",
                color: "#fff",
              },
              '&::after': {
                fontSize: "18px",
                fontWeight: "bold",
                content: '"›"',
              },
            }}
          />
        </Container>
      </Box>
    </>
  );
};

export default Testimonials;