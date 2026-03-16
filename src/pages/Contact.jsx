import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import contactBg from "../assets/images/contact-bg.png"; // Import your background image

const inputStyle = {
  "& .MuiInputLabel-root": {
    color: "#7a5a3a",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#7a5a3a",
  },
};

const Contact = () => {
  return (
    <>
      {/* ================= MAIN CONTACT SECTION ================= */}
      <Box
       id="Contact"
        sx={{
          // REMOVED backgroundColor - let the image show through
          backgroundImage: `url(${contactBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          py: { xs: 6, sm: 8, md: 14 },
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Grid
            container
            spacing={{ xs: 4, md: 0 }}
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{ px: { xs: 2, sm: 4, md: 6 } }}
          >
            {/* ========= LEFT CONTACT INFO ========= */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  pl: { xs: 0, md: 6 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    letterSpacing: "4px",
                    color: "#6b2e6e",
                    fontWeight: 600,
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  CONTACT
                </Typography>

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#1b2b5e",
                    mb: 3,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Pipara Excelus
                </Typography>

                <Typography
                  sx={{
                    color: "#4a2c4a",
                    lineHeight: 2,
                    fontSize: 15,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  #759 Avenue of the Americas<br />
                  FL7, Rockefeller Center,<br />
                  New York, NY 10020<br />
                  nnp@piparaexcelus.com<br />
                  Tel: +1(646) 387 2034
                </Typography>

                {/* SOCIAL ICONS */}
                <Box sx={{ mt: 3 }}>
                  {/* LinkedIn */}
                  <IconButton
                    component="a"
                    href="https://in.linkedin.com/company/pipara"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: "#6b2e6e",
                      '&:hover': {
                        color: "#1b2b5e",
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>

                  {/* Facebook */}
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/pipara"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: "#6b2e6e",
                      '&:hover': {
                        color: "#1b2b5e",
                      }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>

                  {/* X (Twitter) */}
                  <IconButton
                    component="a"
                    href="https://x.com/PiparaCoLlp"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: "#6b2e6e",
                      '&:hover': {
                        color: "#1b2b5e",
                      }
                    }}
                  >
                    <XIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* EMPTY SPACE (Desktop Only) */}
            <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }} />

            {/* ========= RIGHT FORM ========= */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                component="form"
                sx={{
                  width: "100%",
                  maxWidth: 520,
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="standard"
                      fullWidth
                      InputLabelProps={{
                        style: { color: "#4a2c4a", fontFamily: "'Montserrat', sans-serif" }
                      }}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="standard"
                      fullWidth
                      InputLabelProps={{
                        style: { color: "#4a2c4a", fontFamily: "'Montserrat', sans-serif" }
                      }}
                      sx={inputStyle}
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="Email *"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "#4a2c4a", fontFamily: "'Montserrat', sans-serif" }
                  }}
                  sx={{ mt: 4, ...inputStyle }}
                />

                <TextField
                  label="Leave us a message..."
                  variant="standard"
                  multiline
                  rows={3}
                  fullWidth
                  InputLabelProps={{
                    style: { color: "#4a2c4a", fontFamily: "'Montserrat', sans-serif" }
                  }}
                  sx={{ mt: 4, ...inputStyle }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 5,
                    backgroundColor: "#1b2b5e",
                    borderRadius: "22px",
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 16,
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                    "&:hover": {
                      backgroundColor: "#6b2e6e",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= MAP SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 250, sm: 320, md: 450 },
          }}
        >
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps?q=The%20Rink%20At%20Rockefeller%20Center%2C%20600%205th%20Avenue%2C%20Rockefeller%20Center%2C%20New%20York%2C%20NY%2010020%2C%20United%20States&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: "block",
            }}
            loading="lazy"
            allowFullScreen
          />
        </Box>
      </Box>
    </>
  );
};

export default Contact;