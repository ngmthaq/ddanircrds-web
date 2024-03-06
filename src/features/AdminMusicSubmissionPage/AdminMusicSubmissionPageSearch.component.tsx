import React, { useContext } from "react";
import { IconButton, TextField } from "@mui/material";
import { SearchContainer, SearchWrapper } from "./AdminMusicSubmissionPage.styled";
import { AdminMusicSubmissionPageContext } from "./AdminMusicSubmissionPage.context";
import { Refresh } from "@mui/icons-material";

export const AdminMusicSubmissionPageSearch = () => {
  const { searchValue, handleChangeSearchValue, handleRefetch } = useContext(
    AdminMusicSubmissionPageContext,
  );

  return (
    <SearchContainer>
      <SearchWrapper>
        <TextField
          defaultValue={searchValue}
          onChange={(event) => handleChangeSearchValue(event.target.value)}
          size="small"
          label="Search by email & name"
          variant="outlined"
          fullWidth
        />
      </SearchWrapper>
      <IconButton size="small" onClick={handleRefetch} title="Refresh">
        <Refresh fontSize="small" />
      </IconButton>
    </SearchContainer>
  );
};
