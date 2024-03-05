import { CommonUtils } from "@/common/utils";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AdminSidebarWidth = 300;

export const SidebarLogoWrapperHeight = 100;

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  overflow: "hidden",
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  height: "100%",
  width: `${AdminSidebarWidth}px`,
  background: "rgb(249, 250, 251)",
  padding: "24px",
  borderRight: "1px dashed rgba(145, 158, 171, 0.2)",
  flexShrink: 0,
}));

export const SidebarLogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: `calc(${SidebarLogoWrapperHeight}px - 20px)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "32px",

  "& a": {
    width: `calc(${SidebarLogoWrapperHeight}px - 20px)`,
    height: `calc(${SidebarLogoWrapperHeight}px - 20px)`,
    display: "inline-block",
    borderRadius: "16px",
    padding: "8px",
    background: "linear-gradient(116.44deg, #030000 10.24%, #F91515 88.74%)",
  },

  "& a img": {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
}));

export const SidebarItemWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: `calc(100% - ${SidebarLogoWrapperHeight}px)`,
  overflowY: "scroll",
  borderTop: "1px dashed rgba(145, 158, 171, 0.4)",
  paddingTop: "32px",

  "&::-webkit-scrollbar": {
    width: "0px",
  },
}));

export const SidebarItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "12px 16px",
  gap: "12px",
  color: theme.palette.grey[700],
  borderRadius: "4px",
  marginBottom: "12px",
  cursor: "pointer",

  "& p": {
    fontWeight: "600",
    fontSize: "14px",
  },

  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },

  "&.active": {
    backgroundColor: CommonUtils.hexToRgbA(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: `calc(100% - ${AdminSidebarWidth}px)`,
  overflowY: "scroll",
  padding: "0 32px",
  background: "rgb(249, 250, 251)",
}));

export const WrapperTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  padding: "32px 0 8px",
  marginBottom: "24px",
  borderBottom: "1px dashed rgba(145, 158, 171, 0.4)",
}));

export const ContentWrapper = styled(Paper)(({ theme }) => ({
  padding: "24px",
  marginBottom: "32px",
}));
