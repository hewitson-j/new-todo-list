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
import { useState } from "react";

import itemEntries from "./ItemEntries";

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
  const [entryId, setEntryId] = useState(itemEntries.length);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [projectId, setProjectId] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [tags, setTags] = useState<string[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setProjectId("");
    setPriority("low");
    setDueDate(new Date());
    setTags([]);
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleSave = () => {
    console.log(priority);
    const newItem = {
      id: entryId,
      title: title,
      description: description,
      isCompleted: false,
      location: location,
      projectId: projectId,
      priority: priority,
      // dueDate: dueDate,
      tags: tags,
    };

    itemEntries.push(newItem);
    setEntryId(entryId + 1);

    console.log(itemEntries);

    handleClose();
  };

  const isSaveDisabled = title.trim() === "";

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority); // Update the priority state in FormModal
  };

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
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="description"
            multiline
            rows={4}
            fullWidth
            label="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="location"
            label="Location"
            sx={{ margin: "1rem 0" }}
            fullWidth
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <TextField
            id="projectId"
            label="Project"
            sx={{ margin: "1rem 0" }}
            fullWidth
            onChange={(e) => {
              setProjectId(e.target.value);
            }}
          />
          <PrioritySelect
            priority={priority}
            onPriorityChange={handlePriorityChange}
          />
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
          <TagManager tags={tags} onTagsChange={handleTagsChange} />
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
            <Button
              variant="contained"
              disabled={isSaveDisabled}
              onClick={handleSave}
            >
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
