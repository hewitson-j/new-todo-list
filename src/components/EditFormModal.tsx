import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PrioritySelect from "./PrioritySelect";
import TagManager from "./TagManager";
import { useState } from "react";
import { useTasks } from "./TasksProvider";
import DateInput from "./DateInput";
import { TaskType } from "./Task";

// TODO: Need to add functionality to update, right now it creates a new task without deleting or updating the new one

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

interface EditFormModalProps {
  task: TaskType | undefined;
  isModalOpen: boolean;
  handleIsModalOpen: () => void;
}

export default function EditFormModal({
  task,
  isModalOpen,
  handleIsModalOpen,
}: EditFormModalProps) {
  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [location, setLocation] = useState(task?.location ?? "");
  const [projectId, setProjectId] = useState(task?.projectId ?? "");
  const [priority, setPriority] = useState(task?.priority ?? "low");
  const isCompleted = task?.isCompleted;

  const [dueDateMonth, setDueDateMonth] = useState("");
  const [dueDateDay, setDueDateDay] = useState("");
  const [dueDateYear, setDueDateYear] = useState("");

  const handleDueDateMonthChange = (value: string) => {
    setDueDateMonth(value);
  };
  const handleDueDateDayChange = (value: string) => {
    setDueDateDay(value);
  };
  const handleDueDateYearChange = (value: string) => {
    setDueDateYear(value);
  };

  const [remindDateMonth, setRemindDateMonth] = useState("");
  const [remindDateDay, setRemindDateDay] = useState("");
  const [remindDateYear, setRemindDateYear] = useState("");

  const handleRemindDateMonthChange = (value: string) => {
    setRemindDateMonth(value);
  };
  const handleRemindDateDayChange = (value: string) => {
    setRemindDateDay(value);
  };
  const handleRemindDateYearChange = (value: string) => {
    setRemindDateYear(value);
  };

  const [tags, setTags] = useState<string[]>([]);

  const { updateTaskById } = useTasks();

  const handleClose = () => {
    handleIsModalOpen();
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleSave = () => {
    let dueDate: Date | undefined = undefined;
    if (dueDateYear && dueDateMonth && dueDateDay) {
      dueDate = new Date(
        parseInt(dueDateYear),
        parseInt(dueDateMonth) - 1,
        parseInt(dueDateDay)
      );
    }

    let reminderDateTime: Date | undefined = undefined;
    if (remindDateYear && remindDateMonth && remindDateDay) {
      reminderDateTime = new Date(
        parseInt(remindDateYear),
        parseInt(remindDateMonth) - 1,
        parseInt(remindDateDay)
      );
    }

    let project;
    if (projectId === "") {
      project = "Inbox";
    } else {
      project = projectId;
    }

    const newTask = {
      id: Math.round(Math.random() * 1000).toString(),
      title: title,
      description: description,
      isCompleted: isCompleted,
      location: location,
      projectId: project,
      priority: priority,
      dueDate: dueDate,
      reminderDateTime: reminderDateTime,
      tags: tags,
    };

    updateTaskById?.(task?.id ?? "", {
      ...newTask,
      isCompleted: newTask.isCompleted ?? false,
    });

    handleClose();
  };

  const isUpdateDisabled = title.trim() === "";

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
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
              Edit Task
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
            value={title}
          />
          <TextField
            id="description"
            multiline
            rows={4}
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="location"
            label="Location"
            sx={{ margin: "1rem 0" }}
            fullWidth
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <TextField
            id="projectId"
            label="Project"
            sx={{ margin: "1rem 0" }}
            fullWidth
            value={projectId}
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
              month={dueDateMonth}
              day={dueDateDay}
              year={dueDateYear}
              onMonthChange={handleDueDateMonthChange}
              onDayChange={handleDueDateDayChange}
              onYearChange={handleDueDateYearChange}
            />
            <DateInput
              title="Reminder Date:"
              month={remindDateMonth}
              day={remindDateDay}
              year={remindDateYear}
              onMonthChange={handleRemindDateMonthChange}
              onDayChange={handleRemindDateDayChange}
              onYearChange={handleRemindDateYearChange}
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
              disabled={isUpdateDisabled}
              onClick={handleSave}
            >
              Update
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
