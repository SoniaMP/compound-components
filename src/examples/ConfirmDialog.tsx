import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import DialogActions from "../components/DialogActions";

const ConfirmDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>Are you sure?</DialogContent>
        <DialogActions onAction={handleAction}>
          <DialogActions.Action action="yes" />
          <DialogActions.Action action="no" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
