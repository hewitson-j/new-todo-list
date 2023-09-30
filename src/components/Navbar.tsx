import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FormModal from "./FormModal";
import { useTasks } from "./TasksProvider";

export default function Navbar() {
  const { filterCompletedTasks } = useTasks();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do List
          </Typography>
          <FormModal />
          <TaskAltIcon color="inherit" />
          <Typography>{filterCompletedTasks?.()} Completed</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
