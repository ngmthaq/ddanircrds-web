import React, { Fragment, useContext } from "react";
import { IconButton, Pagination, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Launch, RemoveRedEye } from "@mui/icons-material";
import { DateTimeUtils } from "@/common/utils";
import { AdminMusicSubmissionPageContext } from "./AdminMusicSubmissionPage.context";
import {
  CustomTable,
  CustomTableCell,
  CustomTableContainer,
  PaginationContainer,
} from "./AdminMusicSubmissionPage.styled";

export const AdminMusicSubmissionPageTable = () => {
  const { submissions, page, totalPages, handleChangePage, handleSetSelectSubmission } = useContext(
    AdminMusicSubmissionPageContext,
  );

  return (
    <Fragment>
      <CustomTableContainer>
        <CustomTable stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "25%" }}>Email</TableCell>
              <TableCell sx={{ width: "20%" }}>Name</TableCell>
              <TableCell sx={{ width: "15%" }}>Instagram</TableCell>
              <TableCell sx={{ width: "15%" }}>Created At</TableCell>
              <TableCell sx={{ width: "15%" }}>Collection ID</TableCell>
              <TableCell sx={{ width: "10%" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions.length > 0 ? (
              submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <CustomTableCell title={submission.email}>{submission.email}</CustomTableCell>
                  <CustomTableCell title={submission.name}>{submission.name}</CustomTableCell>
                  <TableCell title={submission.instagram}>
                    {submission.instagram ? (
                      <a href={submission.instagram} target="_blank" rel="noreferrer">
                        Open Link
                        <Launch fontSize="small" sx={{ width: "12px", height: "12px" }} />
                      </a>
                    ) : (
                      "--"
                    )}
                  </TableCell>
                  <TableCell>
                    {DateTimeUtils.convertSecondsToDatetime(
                      submission.createdAt,
                      "DD/MM/YYYY HH:mm",
                    )}
                  </TableCell>
                  <TableCell>{submission.id}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      title="Show more submission details"
                      onClick={() => handleSetSelectSubmission(submission)}
                    >
                      <RemoveRedEye fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  There is no data to display
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </CustomTable>
      </CustomTableContainer>
      {submissions.length !== 0 && (
        <PaginationContainer>
          <Pagination
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
            color="primary"
            page={page}
            count={totalPages}
            onChange={(_, page) => handleChangePage(page)}
          />
        </PaginationContainer>
      )}
    </Fragment>
  );
};
