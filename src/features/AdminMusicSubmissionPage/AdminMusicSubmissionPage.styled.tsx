import { Table, TableCell, TableContainer, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  height: "600px",
}));

export const CustomTable = styled(Table)(({ theme }) => ({
  whiteSpace: "nowrap",
  tableLayout: "fixed",
}));

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "24px",
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: "12px",
}));

export const SearchWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  marginRight: "16px",
}));
