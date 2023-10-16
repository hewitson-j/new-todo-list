import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TaskMenu from "./TaskMenu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

interface TaskDetailsModalProps {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: string;
  location?: string;
  tags?: string[];
  projectId?: string;
  isCompleted: boolean;
  reminderDateTime?: Date;
}

export default function TaskDetailsModal({
  id,
  title,
  description,
  dueDate,
  priority,
  location,
  tags,
  projectId,
  isCompleted: isCompleted,
  reminderDateTime,
}: TaskDetailsModalProps) {
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [completionState, setCompletionState] = useState(isCompleted);
  useEffect(() => {
    setCompletionState(isCompleted);
  }, [isCompleted]);

  let buttonColor = "";
  let fontWeight = "";
  let additionalTitleText = "";

  const currentDate = new Date();

  if (dueDate) {
    const dueDateObj = new Date(dueDate);
    if (!completionState) {
      if (currentDate.toDateString() === dueDateObj.toDateString()) {
        buttonColor = "green";
        fontWeight = "bold";
        additionalTitleText = " - DUE TODAY";
      } else if (currentDate > dueDateObj) {
        buttonColor = "red";
        additionalTitleText = " - PAST DUE";
        fontWeight = "bold";
      }
    }
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "100%",
          padding: "2% 5%",
          justifyContent: "start",
          textDecoration: completionState ? "line-through" : "none",
          color: completionState ? "grey" : buttonColor,
          fontWeight: completionState ? "" : fontWeight,
          "&:hover": {
            color: "inherit",
          },
        }}
      >
        {title}
        {additionalTitleText}
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TaskMenu taskId={id} />
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
          </div>
          {description && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description: {description}
            </Typography>
          )}
          {priority && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Priority: {priority}
            </Typography>
          )}
          {location && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Location: {location}
            </Typography>
          )}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Project: {projectId}
          </Typography>
          {dueDate && dueDate instanceof Date ? (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Due Date:{" "}
              {`${
                dueDate.getMonth() + 1
              }/${dueDate.getDate()}/${dueDate.getFullYear()}`}
            </Typography>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Due Date: None
            </Typography>
          )}

          {reminderDateTime && reminderDateTime instanceof Date ? (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Reminder:{" "}
              {`${
                reminderDateTime.getMonth() + 1
              }/${reminderDateTime.getDate()}/${reminderDateTime.getFullYear()}`}
            </Typography>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Reminder: None
            </Typography>
          )}
          {tags && (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Tags: {tags.join(", ")}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
