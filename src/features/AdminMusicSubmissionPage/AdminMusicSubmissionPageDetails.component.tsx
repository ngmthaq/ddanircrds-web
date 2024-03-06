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
import { Close, Launch } from "@mui/icons-material";
import { AdminMusicSubmissionPageContext } from "./AdminMusicSubmissionPage.context";
import { DateTimeUtils } from "@/common/utils";

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
              <TableCell>
                <a href={`mailto:${selectedSubmission?.email || ""}`} title="Click to reply">
                  {selectedSubmission?.email || ""}
                  <Launch fontSize="small" sx={{ width: "12px", height: "12px" }} />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Instagram</strong>
              </TableCell>
              <TableCell>
                {selectedSubmission?.instagram ? (
                  <a href={selectedSubmission.instagram} target="_blank" rel="noreferrer">
                    {selectedSubmission.instagram}
                    <Launch fontSize="small" sx={{ width: "12px", height: "12px" }} />
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
                    <Launch fontSize="small" sx={{ width: "12px", height: "12px" }} />
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
                          <Launch fontSize="small" sx={{ width: "12px", height: "12px" }} />
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
            <TableRow>
              <TableCell sx={{ width: "20%" }}>
                <strong>Collection ID</strong>
              </TableCell>
              <TableCell>{selectedSubmission?.id || ""}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
