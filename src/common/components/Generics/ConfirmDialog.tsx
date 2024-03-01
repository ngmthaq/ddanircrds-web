import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export type ConfirmDialogProps = {
  open: boolean;
  message: string;
  onAccept: () => void;
  onDeny?: () => void;
};

export const ConfirmDialog: FC<ConfirmDialogProps> = ({ open, message, onAccept, onDeny }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>You have a notification</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {onDeny && <Button onClick={onDeny}>Disagree</Button>}
        <Button onClick={onAccept}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};
