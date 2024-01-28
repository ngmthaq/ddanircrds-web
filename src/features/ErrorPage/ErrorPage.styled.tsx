import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "block",
  padding: "16px",
}));

export const Status = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: "8px 0",
}));

export const Message = styled(Typography)(({ theme }) => ({
  padding: "8px 0",
}));
