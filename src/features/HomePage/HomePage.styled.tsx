import { Box, Container, Drawer, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderColor = "#1E1E1E";

export const HeaderLinearGradient = "linear-gradient(135.81deg, #F91515 16.01%, #020000 84.96%)";

export const HeaderHeight = 74;

export const Greeting = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "16px",
  left: "0px",
  width: "100%",
  padding: "0 16px",
}));

export const HeaderWrapper = styled(Container)(({ theme }) => ({
  margin: "0 auto",
  height: HeaderHeight + "px",
  background: HeaderColor,
  borderRadius: "10px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const HeaderLogo = styled("a")(({ theme }) => ({
  display: "inline-flex",
  width: "100px",
  height: "100px",
  background: HeaderLinearGradient,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transform: "translateY(10px)",
  margin: "0 32px",
  flexShrink: 0,

  "& img": {
    width: "55px",
    height: "71px",
    objectFit: "contain",
  },
}));

export const HeaderNavContainer = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "calc(16px * 3)",
  height: "100%",
  width: "100%",

  "& a": {
    fontSize: "20px",
    fontWeight: "500",
    lineLeight: "30px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#fff",
    textTransform: "uppercase",
    userSelect: "none",

    "&.disabled": {
      color: theme.palette.grey[600],
      cursor: "not-allowed",
    },
  },
}));

export const MobileHeaderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0px",
  width: "100%",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

export const MobileHeaderLogo = styled("a")(({ theme }) => ({
  display: "inline-flex",
  width: "60px",
  height: "60px",
  background: HeaderLinearGradient,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  flexShrink: 0,

  "& img": {
    width: "30px",
    height: "40px",
    objectFit: "contain",
  },
}));

export const MobileHeaderMenu = styled(IconButton)(({ theme }) => ({
  flexShrink: 0,
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: "80vw",
    width: "400px",
    borderRadius: "12px 0 0 0",
    background: "#1E1E1E",
  },
}));

export const MobileDrawerLogo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

export const MobileDrawerNav = styled("nav")(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "16px",

  "& a": {
    fontSize: "20px",
    fontWeight: "500",
    lineLeight: "30px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#fff",
    textTransform: "uppercase",
    userSelect: "none",
    display: "block",
    marginBottom: "16px",

    "&.disabled": {
      color: theme.palette.grey[600],
      cursor: "not-allowed",
    },
  },
}));
