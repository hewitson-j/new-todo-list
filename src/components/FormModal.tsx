import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PrioritySelect from "./PrioritySelect";
import TagManager from "./TagManager";
import { useState } from "react";
import { useTasks } from "./TasksProvider";
import DateInput from "./DateInput";

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

// TODO: Add event handler to add new task to tasks
export default function FormModal() {
  const { addTask } = useTasks();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [projectId, setProjectId] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [remindDate, setRemindDate] = useState<Date | undefined>(undefined);
  const [tags, setTags] = useState<string[]>([]);
  const isSaveDisabled = title.trim() === "";

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority);
  };
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  const handleDueDateChange = (newDate: Date | undefined) => {
    setDueDate(newDate);
  };
  const handleReminderDateChange = (newDate: Date | undefined) => {
    setRemindDate(newDate);
  };
  const handleSave = () => {
    const newTask = {
      id: Math.round(Math.random() * 1000).toString(),
      title: title,
      description: description,
      isCompleted: false,
      location: location,
      projectId: projectId || "Inbox",
      priority: priority,
      dueDate: dueDate,
      reminderDateTime: remindDate,
      tags: tags,
    };

    addTask?.(newTask);

    handleClose();
  };
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setProjectId("");
    setPriority("low");
    setTags([]);
    setDueDate(undefined);
    setRemindDate(undefined);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        <AddIcon />
        Add Task
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
              Add/Edit Task
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
            <DateInput
              title="Due Date:"
              date={dueDate}
              onDateChange={handleDueDateChange}
            />
            <DateInput
              title="Reminder Date:"
              date={remindDate}
              onDateChange={handleReminderDateChange}
            />
          </div>
          <TagManager tags={tags} onTagsChange={handleTagsChange} />
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
