import { CommonUtils } from "@/common/utils";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ImageWrapper = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "400px",
  position: "relative",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  [theme.breakpoints.up("lg")]: {
    height: "300px",
  },
}));

export const EditButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: "8px",
  right: "8px",
  zIndex: 2,
}));

export const OrderText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "8px",
  left: "8px",
  zIndex: 2,
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: theme.palette.grey[100],
  display: "inline-block",
  padding: "8px",
  background: theme.palette.grey[800],
  borderRadius: "4px",
}));

export const BackgroundGradient = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "100%",
  height: "80px",
  zIndex: 1,
  backgroundImage: `linear-gradient(to top, 
    ${CommonUtils.hexToRgbA(theme.palette.grey[900], 0.8)}, 
    ${CommonUtils.hexToRgbA(theme.palette.grey[900], 0)})`,
}));
