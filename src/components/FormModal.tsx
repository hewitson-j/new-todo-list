import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PrioritySelect from "./PrioritySelect";
import DatePickerInput from "./DatePickerInput";
import TagManager from "./TagManager";

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

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        <AddIcon />
        Add Item
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              Add/Edit Item
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <TextField
            required
            id="title"
            label="Title"
            fullWidth
            sx={{ margin: "1rem 0" }}
          />
          <TextField
            id="description"
            multiline
            maxRows={4}
            rows={4}
            fullWidth
            label="Description"
          />
          <TextField
            id="location"
            label="Location"
            sx={{ margin: "1rem 0" }}
            fullWidth
          />
          <TextField
            id="projectId"
            label="Project"
            sx={{ margin: "1rem 0" }}
            fullWidth
          />
          <PrioritySelect />
          <div
            style={{
              margin: "1rem 0",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <DatePickerInput id="due-date" label="Due Date" />
            <DatePickerInput id="reminder" label="Reminder" />
          </div>
          <TagManager />
          {/* Create input
          when user blurs or clicks on add, then append new tag to end of tags array
          once they click on submit, it goes into permanent state */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "1rem",
            }}
          >
            <Button variant="contained" disabled>
              Save
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
