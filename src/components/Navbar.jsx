import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Typography,
  Popover,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // ONLY THIS LINE ADDED
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/images/logo.png";

// Added "Home" back to menuItems
const menuItems = ["Home", "About", "Services", "Testimonials", "Contact"];

// Services dropdown items based on your image
const serviceItems = [
  {
    main: "Assurance Services",
    subItems: [
      // "Issuer Audits",
      { name: "Issuer Audits", path: "/issuer-audits" },

      {
        name: "Surprise Examination Audits(IAPD)",
        path: "/surprise-examination-audits",
      },
      { name: "Investment Adviser Audits", path: "/investment-adviser" },
      { name: "Small Business Audits", path: "/small-business" },
      { name: "Corporate Audits", path: "/corporate-audits" },
      { name: "SOC Audits", path: "/soc-audits" },
      { name: "Forensic Investigation", path: "/forensic-investigation" },
      {
        name: "Business Turnaround Consultancy",
        path: "/business-turnaround-consultancy",
      },
    ],
  },
  {
    main: "Digital Audits",
    subItems: [
      {
        name: "Digital Analytics & Data Driven Insights",
        path: "/digital-audits",
      },
    ],
  },
  {
    main: "Tax Services",

    subItems: [
      {
        name: "Individuals - Federal & State Tax Filing",
        path: "/individual-federal-tax",
      },
      {
        name: "Individuals - Estate & Gift Return Filing",
        path: "/estate-gift-tax",
      },
      {
        name: "Individuals - Expat Tax Assessment & Filing under Treaties",
        path: "/expat-tax",
      },
      {
        name: "Business, EO & Trusts - Federal & State Tax Filing",
        path: "/business-trust-tax",
      },
    ],
  },
  {
    main: "Due Diligence",
    subItems: [
      { name: "Financial Due Diligence", path: "/financial-due-diligence" },
    ],
  },
];



function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate(); // ONLY THIS LINE ADDED
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);

  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false); // ADD THIS
  const [drawerServiceSubOpen, setDrawerServiceSubOpen] = useState({}); // ADD THIS

  const handleServicesHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
    setHoveredService(null);
    setSubAnchorEl(null);
  };

  const handleServiceMainHover = (event, service) => {
    setHoveredService(service);
    setSubAnchorEl(event.currentTarget);
  };

  const handleServiceMainClose = () => {
    setHoveredService(null);
    setSubAnchorEl(null);
  };

  const handleScroll = (section) => {
    console.log("Scrolling to section:", section);

    const possibleIds = [
      section.toLowerCase(),
      section,
      section.toLowerCase().replace(/\s+/g, ""),
      section.replace(/\s+/g, ""),
    ];

    let element = null;
    for (const id of possibleIds) {
      element = document.getElementById(id);
      if (element) {
        console.log("Found element with ID:", id);
        break;
      }
    }

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setOpen(false);
      handleServicesClose();
    } else {
      console.log("Element not found for section:", section);
      console.log("Tried IDs:", possibleIds);
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/16463872034", "_blank");
  };

  const handleContactClick = () => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait a bit for the page to load, then scroll to contact
      setTimeout(() => {
        handleScroll("Contact");
      }, 100);
    } else {
      // Already on home page, just scroll
      handleScroll("Contact");
    }
  };

  // ADD THIS NEW FUNCTION HERE
  const handleNavClick = (item) => {
    if (item === "Services") {
      // Services is handled separately by the dropdown
      return;
    }

    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait a bit for the page to load, then scroll to the section
      setTimeout(() => {
        handleScroll(item);
      }, 100);
    } else {
      // Already on home page, just scroll
      handleScroll(item);
    }
  };

  const handleServiceNavigation = (path) => {
    // Close all popovers first
    handleServicesClose(); // This will close both main and sub menus
    // Navigate to the service page
    navigate(path);
    // Scroll to top immediately after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  // Add this after your state declarations
useEffect(() => {
  const handleResize = () => {
    if (open) {
      setOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [open]);



// Add this useEffect to reset drawer states when opened
useEffect(() => {
  if (open) {
    // Reset all drawer dropdown states when drawer opens
    setDrawerServicesOpen(false);
    setDrawerServiceSubOpen({});
  }
}, [open]);
  // Check if services popover is open
  const servicesOpen = Boolean(anchorEl);
  const subMenuOpen = Boolean(hoveredService);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgb(255, 254, 254)",
        pl: 0,
        pr:0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: { xs: 80, md: 75 },
          px: 0,
        }}
      >
        {/* LEFT SIDE - Icons and Hamburger */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1, md: 1.5, lg: 2 },
          }}
        >
          {/* Phone Icon */}
          <IconButton
            onClick={handleWhatsAppClick}
            sx={{
              backgroundColor: "#2f4da1",
              color: "#fff",
              borderRadius: 2,
              width: { xs: 40, sm: 40, md: 42, lg: 45 },
              height: { xs: 40, sm: 40, md: 42, lg: 45 },
              "&:hover": { backgroundColor: "#243b7a" },
            }}
          >
            <PhoneIcon sx={{ fontSize: { xs: 18, sm: 18, md: 19, lg: 20 } }} />
          </IconButton>

          {/* Chat Bubble Icon */}
          <IconButton
            onClick={handleContactClick}
            sx={{
              backgroundColor: "#2f4da1",
              color: "#fff",
              borderRadius: 2,
              width: { xs: 40, sm: 40, md: 42, lg: 45 },
              height: { xs: 40, sm: 40, md: 42, lg: 45 },
              "&:hover": { backgroundColor: "#243b7a" },
            }}
          >
            <ChatBubbleIcon
              sx={{ fontSize: { xs: 18, sm: 18, md: 19, lg: 20 } }}
            />
          </IconButton>

          {/* Hamburger Menu - Visible on mobile AND tablet */}
          {(isMobile || isTablet) && (
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ ml: { xs: 0, sm: 0, md: 1 } }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* CENTER - Desktop Menu - Hidden on tablet and mobile */}
        {!isMobile && !isTablet && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              ml: { lg: -30, xl: -25 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { lg: 2, xl: 3 },
              }}
            >
              {menuItems.map((item) => {
                if (item === "Services") {
                  return (
                    <Box
                      key={item}
                      onMouseEnter={handleServicesHover}
                      onMouseLeave={handleServicesClose}
                    >
                      <Button
                        endIcon={
                          <ExpandMoreIcon
                            sx={{ fontSize: 16, color: "#7a1f4d" }}
                          />
                        }
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: { lg: 16, xl: 17 },
                          fontWeight: 500,
                          letterSpacing: "0.5px",
                          textTransform: "none",
                          color: "#7a1f4d",
                          whiteSpace: "nowrap",
                          "&:hover": {
                            color: "#2f4da1",
                            background: "transparent",
                            "& .MuiSvgIcon-root": {
                              color: "#2f4da1",
                            },
                          },
                        }}
                      >
                        {item}
                      </Button>

                      {/* Main Services Popover */}
                      <Popover
                        open={servicesOpen}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handleServicesClose}
                        disableRestoreFocus
                        sx={{
                          pointerEvents: "none",
                          mt: 1,
                        }}
                        PaperProps={{
                          onMouseEnter: () => {},
                          onMouseLeave: handleServicesClose,
                          sx: {
                            pointerEvents: "auto",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",

                            borderRadius: 0,
                            minWidth: 280,
                          },
                        }}
                      >
                        <Box sx={{ py: 1 }}>
                          {serviceItems.map((service, index) => (
                            <Box
                              key={index}
                              onMouseEnter={(e) =>
                                handleServiceMainHover(e, service)
                              }
                              onMouseLeave={handleServiceMainClose}
                              sx={{ position: "relative" }}
                            >
                              <Box
                                sx={{
                                  px: 2.5,
                                  py: 1.5,
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  "&:hover": {
                                    "& .MuiTypography-root": {
                                      color: "#2f4da1",
                                    },
                                    "& .arrow-icon": {
                                      color: "#2f4da1",
                                    },
                                  },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: 16,
                                    color: "#7a1f4d",
                                    fontWeight: 500,

                                    transition: "color 0.2s",
                                  }}
                                >
                                  {service.main}
                                </Typography>
                                <Typography
                                  className="arrow-icon"
                                  sx={{
                                    fontSize: 16,
                                    color: "#999",
                                    transition: "color 0.2s",
                                  }}
                                >
                                  ›
                                </Typography>
                              </Box>

                              {/* Submenu Popover */}
                              <Popover
                                open={subMenuOpen && hoveredService === service}
                                anchorEl={subAnchorEl}
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                                onClose={handleServiceMainClose}
                                disableRestoreFocus
                                sx={{
                                  pointerEvents: "none",
                                  ml: 0.5,
                                }}
                                PaperProps={{
                                  onMouseEnter: () => {},
                                  onMouseLeave: handleServiceMainClose,
                                  sx: {
                                    pointerEvents: "auto",
                                    boxShadow:
                                      "0px 4px 20px rgba(0, 0, 0, 0.1)",
                                    borderRadius: 0,
                                    minWidth: 260,
                                    maxWidth: 300,
                                  },
                                }}
                              >
                                <Box sx={{ py: 1 }}>
                                  {service.subItems.map((subItem, subIndex) => (
                                    <Box
                                      key={subIndex}
                                      onClick={() => {
                                        handleServiceNavigation(subItem.path); // ONLY THIS LINE CHANGED
                                      }}
                                      sx={{
                                        px: 2.5,
                                        py: 1.2,
                                        cursor: "pointer",
                                        "&:hover": {
                                          "& .MuiTypography-root": {
                                            color: "#2f4da1",
                                          },
                                        },
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 16,
                                          color: "#7a1f4d",
                                          transition: "color 0.2s",
                                          lineHeight: 1.4,
                                        }}
                                      >
                                        {subItem.name}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </Popover>
                            </Box>
                          ))}
                        </Box>
                      </Popover>
                    </Box>
                  );
                }
                return (
                  <Button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { lg: 16, xl: 17 },
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textTransform: "none",
                      color: "#7a1f4d",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        color: "#2f4da1",
                        background: "transparent",
                      },
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>
          </Box>
        )}

        {/* RIGHT SIDE - Logo */}
        <Box
          sx={{
            ml: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 35, sm: 35, md: 40, lg: 45 },
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Toolbar>

      {/* MOBILE DRAWER */}

      {/* MOBILE DRAWER */}
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
  <Box sx={{ width: 280, color: "#7a1f4d" }}>
    <List>
      {menuItems.map((item) => {
        if (item === "Services") {
          return (
            <Box key={item}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    // Toggle services expand in drawer
                    const expanded = !drawerServicesOpen;
                    setDrawerServicesOpen(expanded);
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ListItemText primary={item} />
                  <ExpandMoreIcon
                    sx={{
                      transform: drawerServicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s",
                      color: "#7a1f4d",
                    }}
                  />
                </ListItemButton>
              </ListItem>

              {/* Services Submenu in Drawer */}
              {drawerServicesOpen && (
                <Box sx={{ pl: 2 }}>
                  {serviceItems.map((service, index) => (
                    <Box key={index}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            // Toggle service subitems
                            const newState = { ...drawerServiceSubOpen };
                            newState[service.main] =
                              !newState[service.main];
                            setDrawerServiceSubOpen(newState);
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            py: 1,
                          }}
                        >
                          <ListItemText
                            primary={service.main}
                            primaryTypographyProps={{
                              sx: {
                                color: "#7a1f4d",
                                fontWeight: 500,
                                fontSize: "15px",
                              },
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: 20,
                              color: "#7a1f4d",
                              transform: drawerServiceSubOpen[
                                service.main
                              ]
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.2s",
                            }}
                          >
                            ›
                          </Typography>
                        </ListItemButton>
                      </ListItem>

                      {/* Sub-subitems */}
                      {drawerServiceSubOpen[service.main] && (
                        <Box sx={{ pl: 2 }}>
                          {service.subItems.map((subItem, subIndex) => (
                            <ListItem key={subIndex} disablePadding>
                              <ListItemButton
                                onClick={() => {
                                  setOpen(false);
                                  handleServiceNavigation(subItem.path);
                                }}
                                sx={{ py: 0.8 }}
                              >
                                <ListItemText
                                  primary={subItem.name}
                                  primaryTypographyProps={{
                                    sx: {
                                      color: "#7a1f4d",
                                      fontSize: "14px",
                                    },
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          );
        }

        return (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavClick(item);
                setOpen(false);
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  </Box>
</Drawer>
    </AppBar>
  );
}

export default Navbar;
