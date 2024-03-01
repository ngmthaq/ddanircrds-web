import { Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.grey["200"],
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "600px",
}));

export const LoginForm = styled(Paper)(({ theme }) => ({
  padding: "48px 24px",
  width: "500px",
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  margin: "16px 0",
}));
