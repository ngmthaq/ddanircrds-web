import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "16px",
  gap: "8px",
}));
