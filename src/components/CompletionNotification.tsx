import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

interface CompletionNotificationProps {
  isOpen: boolean;
  handleIsOpen: () => void;
  completionMessage: boolean;
}

export default function CompletionNotification({
  isOpen,
  handleIsOpen,
  completionMessage,
}: CompletionNotificationProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    handleIsOpen();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message={
          completionMessage ? "Task completed" : "Task marked as incomplete"
        }
        action={action}
      />
    </div>
  );
}
