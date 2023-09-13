import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ItemModalProps {
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: string;
  location?: string;
  tags?: string[];
  projectId?: string;
}

export default function ItemModal({
  title,
  description,
  dueDate,
  priority,
  location,
  tags,
  projectId,
}: ItemModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
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
          {projectId && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Project: {projectId}
            </Typography>
          )}
          {dueDate && (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Due Date: {dueDate.getMonth() + 1}/{dueDate.getDate()}/
              {dueDate.getFullYear()} at {dueDate.getHours()}:
              {dueDate.getMinutes()}
            </Typography>
          )}
          {tags && (
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Tags: {tags}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
