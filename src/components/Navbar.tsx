import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do List
          </Typography>
          <IconButton color="inherit">
            <AddIcon />
            <Typography>Add Item</Typography>
          </IconButton>
          <TaskAltIcon color="inherit" />
          <Typography>0 Completed</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
