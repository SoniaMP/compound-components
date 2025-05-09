/*
 * .
 *        . * .
 *      * RRRR  *   Copyright (c) 2012 - 2025
 *     .  RR  R  .  EUIPO - European Union Intellectual Property Office
 *     *  RRR    *
 *      . RR RR .   ALL RIGHTS RESERVED
 *       *. _ .*
 * .
 *  The use and distribution of this software is under the restrictions exposed in 'license.txt'
 */

import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import DialogActions from "../components/DialogActions";

const ErrorDialog = () => {
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
          <DialogActions.Action action="yes" color="error" />
          <DialogActions.Action action="no" variant="outlined" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ErrorDialog;
