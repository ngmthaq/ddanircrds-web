import { CommonUtils } from "@/common/utils";
import { Box, Container, Drawer, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderColor = "#1E1E1E";

export const MainLinearGradient = "linear-gradient(135.81deg, #F91515 16.01%, #020000 84.96%)";

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
  zIndex: 4,
}));

export const HeaderWrapper = styled(Container)(({ theme }) => ({
  margin: "0 auto",
  height: HeaderHeight + "px",
  background: HeaderColor,
  borderRadius: "10px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
}));

export const HeaderLogo = styled("a")(({ theme }) => ({
  display: "inline-flex",
  width: "100px",
  height: "100px",
  background: MainLinearGradient,
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
  zIndex: 4,

  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

export const MobileHeaderLogo = styled("a")(({ theme }) => ({
  display: "inline-flex",
  width: "60px",
  height: "60px",
  background: MainLinearGradient,
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
  color: "#ffffff",
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

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",

  "& .control-dots": {
    zIndex: 3,

    "& .dot": {
      width: "80px",
      height: "4px",
      borderRadius: "1px",

      [theme.breakpoints.down("md")]: {
        width: "40px",
      },

      [theme.breakpoints.down("sm")]: {
        width: "30px",
      },
    },
  },
}));

export const SliderContainerBackdrop = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  background: CommonUtils.hexToRgbA("#000000", 0.4),
  zIndex: 1,
}));

export const SliderContainerBottomBackdrop = styled(Box)(({ theme }) => ({
  height: "120px",
  width: "100%",
  position: "absolute",
  left: "0",
  bottom: "0",
  background: "linear-gradient(to top, #000000, transparent)",
  zIndex: 2,
}));

export const SliderItem = styled("img")(({ theme }) => ({
  width: "100vw",
  height: "90vh",
  objectFit: "cover",
}));

export const SliderText = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "27px",
  letterSpacing: "0em",
  textAlign: "center",
  color: "#f0f0f0",
  background: "#000000",
  padding: "40px 8px",
}));

export const SocialSliderContainer = styled(Box)(({ theme }) => ({
  background: "#000000",

  "& .slick-prev": {
    left: "0 !important",
    zIndex: 1,
  },

  "& .slick-next": {
    right: "0 !important",
    zIndex: 1,
  },
}));

export const SocialSliderItem = styled("a")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "200px",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 24px",
  outline: "none",
  border: "none",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

export const AboutUsContainer = styled(Box)(({ theme }) => ({
  padding: "0 16px",
}));

export const AboutUsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
  },
}));

export const AboutUsContent = styled(Box)(({ theme }) => ({
  height: "100%",
  background: "#1E1E1E",
  padding: "32px",
  color: "#fff",
  borderRadius: "8px",
}));

export const AboutUsLogo = styled(Box)(({ theme }) => ({
  width: "100%",
  minWidth: "250px",
  background: MainLinearGradient,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",

  [theme.breakpoints.down("lg")]: {
    height: "100%",
    minHeight: "250px",
  },

  "& img": {
    width: "80px",
    height: "100px",
    objectFit: "contain",
  },
}));

export const HomePageSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "47px",
  letterSpacing: "0em",
  textAlign: "center",
  margin: "40px 0 32px",

  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));
