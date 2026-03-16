import React, { useState } from "react";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import logo from "../assets/images/logo.png";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Testimonials",
  "Contact",
];

function Navbar() {
  const theme = useTheme();
  // Changed breakpoint to handle medium screens better
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [open, setOpen] = useState(false);

  const handleScroll = (section) => {
    console.log("Scrolling to section:", section);
    
    const possibleIds = [
      section.toLowerCase(),
      section,
      section.toLowerCase().replace(/\s+/g, ''),
      section.replace(/\s+/g, ''),
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
    } else {
      console.log("Element not found for section:", section);
      console.log("Tried IDs:", possibleIds);
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/16463872034", "_blank");
  };

  const handleContactClick = () => {
    handleScroll("Contact");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgb(255, 254, 254)",
        pl: { xs: 2, sm: 2, md: 3, lg: 3.7 },
        pr: { xs: 2, sm: 2, md: 4, lg: 8 },
      }}
    >
      <Toolbar sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        minHeight: { xs: 80, md: 75 },
        px: { xs: 1, sm: 1, md: 2 }
      }}>
        
        {/* LEFT SIDE - Icons and Hamburger */}
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: { xs: 1, sm: 1, md: 1.5, lg: 2 }
        }}>
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
            <ChatBubbleIcon sx={{ fontSize: { xs: 18, sm: 18, md: 19, lg: 20 } }} />
          </IconButton>

          {/* Hamburger Menu - Visible on mobile AND tablet */}
          {(isMobile || isTablet) && (
            <IconButton onClick={() => setOpen(true)} sx={{ ml: { xs: 0, sm: 0, md: 1 } }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* CENTER - Desktop Menu - Hidden on tablet and mobile */}
        {!isMobile && !isTablet && (
          <Box sx={{ 
            flex: 1, 
            display: "flex", 
            justifyContent: "center",
            ml: { lg: -30, xl: -25 } 
          }}>
            <Box sx={{ 
              display: "flex", 
              gap: { lg: 2, xl: 3 }
            }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleScroll(item)}
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
              ))}
            </Box>
          </Box>
        )}

        {/* RIGHT SIDE - Logo */}
        <Box sx={{ 
          ml: "auto",
          display: "flex",
          alignItems: "center"
        }}>
          <Box 
            component="img" 
            src={logo} 
            alt="Logo" 
            sx={{ 
              height: { xs: 35, sm: 35, md: 40, lg: 45 }, 
              width: "auto", 
              objectFit: "contain" 
            }} 
          />
        </Box>

      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => handleScroll(item)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;