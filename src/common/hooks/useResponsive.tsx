import { useMediaQuery } from "@mui/material";
import { useTheme } from "./useTheme";

export function useResponsive() {
  const { theme } = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return { isMobile, isTablet, isDesktop };
}
