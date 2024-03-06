import React, { Fragment, useContext } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { AdminMusicSubmissionPageContext } from "./AdminMusicSubmissionPage.context";
import { DateTimeUtils } from "@/common/utils";
import { Close } from "@mui/icons-material";

export const AdminMusicSubmissionPageDetails = () => {
  const { selectedSubmission, handleSetSelectSubmission } = useContext(
    AdminMusicSubmissionPageContext,
  );

  return (
    <Dialog open={Boolean(selectedSubmission)} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "16px",
        }}
      >
        <DialogTitle>Music Submission Details</DialogTitle>
        <IconButton onClick={() => handleSetSelectSubmission(null)}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Name</strong>
              </TableCell>
              <TableCell>{selectedSubmission?.name || ""}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Email</strong>
              </TableCell>
              <TableCell>{selectedSubmission?.email || ""}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Instagram</strong>
              </TableCell>
              <TableCell>
                {selectedSubmission?.instagram ? (
                  <a href={selectedSubmission.instagram} target="_blank" rel="noreferrer">
                    {selectedSubmission.instagram}
                  </a>
                ) : (
                  "--"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Spotify</strong>
              </TableCell>
              <TableCell>
                {selectedSubmission?.spotify ? (
                  <a href={selectedSubmission.spotify} target="_blank" rel="noreferrer">
                    {selectedSubmission.spotify}
                  </a>
                ) : (
                  "--"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Music Links</strong>
              </TableCell>
              <TableCell>
                {selectedSubmission?.musicLinks && selectedSubmission?.musicLinks?.length > 0
                  ? selectedSubmission?.musicLinks.map((link, index) => (
                      <Fragment key={index}>
                        <a href={link} target="_blank" rel="noreferrer">
                          {link}
                        </a>
                        <br />
                      </Fragment>
                    ))
                  : "--"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Info</strong>
              </TableCell>
              <TableCell>{selectedSubmission?.info || "--"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Created At</strong>
              </TableCell>
              <TableCell>
                {DateTimeUtils.convertSecondsToDatetime(
                  selectedSubmission?.createdAt || 0,
                  "DD/MM/YYYY HH:mm",
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
