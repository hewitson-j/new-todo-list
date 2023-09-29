import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import TaskMenu from "./TaskMenu";
import TaskModal from "./TaskModal";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useTasks } from "./TasksProvider";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  dueDate?: Date;
  priority?: string;
  reminderDateTime?: Date;
  location?: string;
  tags?: string[];
  projectId?: string;
}

export type Tasks = TaskType[];

interface TaskProps {
  task: TaskType;
}

function Task({ task }: TaskProps) {
  const { updateTaskById } = useTasks();

  const handleToggleCompletion = () => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    updateTaskById?.(updatedTask.id, updatedTask);
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton
          disableRipple
          dense
          sx={{
            "&:hover": {
              textDecoration: "inherit",
              backgroundColor: "inherit",
            },
          }}
        >
          <IconButton onClick={handleToggleCompletion}>
            {task.isCompleted ? (
              <CheckCircleOutlineOutlinedIcon color="success" />
            ) : (
              <CircleOutlinedIcon color="inherit" />
            )}
          </IconButton>
          <ListItemText>
            <TaskModal
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              priority={task.priority}
              location={task.location}
              tags={task.tags}
              projectId={task.projectId}
              completion={task.isCompleted}
            />
          </ListItemText>
        </ListItemButton>
        <Tooltip title="More" arrow>
          <TaskMenu taskId={task.id} />
        </Tooltip>
      </ListItem>
    </div>
  );
}

export default Task;
