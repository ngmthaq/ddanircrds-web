import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Greeting = styled(Typography)((ctx) => ({
  color: ctx.theme.palette.primary.main,
}));
