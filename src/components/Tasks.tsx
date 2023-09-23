// List Components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";

// import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskMenu from "./TaskMenu";

// Icon Components
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { Tasks } from "./TaskEntries";
import { useTasks } from "./TasksProvider";

export default function Tasks() {
  // root value

  const { tasks } = useTasks();

  // Computed Value
  // const [completedTasks, setCompletedTasks] = useState<Tasks>([]);

  // TODO:
  // const handleToggleCompleted = (index: number) => {
  //   // setCompletedItems((prevCompletedItems) => {
  //   //   const newCompletedItems = [...prevCompletedItems];
  //   //   newCompletedItems[index] = !newCompletedItems[index];
  //   //   return newCompletedItems;
  //   // });
  // };

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {tasks?.map((task, index) => {
            const labelId = `checkbox-list-label-${index}`;
            // const isCompleted = completedTasks[index];

            return (
              <div key={index}>
                <ListItem
                  disablePadding
                  // onClick={() => handleToggleCompleted(index)}
                >
                  <ListItemButton
                    role={undefined}
                    dense
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent", // Disable hover effect
                      },
                      "&:active": {
                        backgroundColor: "transparent", // Disable ripple effect
                      },
                      "&:focusVisible": {
                        backgroundColor: "transparent", // Disable focus ripple effect
                      },
                    }}
                  >
                    <ListItemIcon>
                      <CircleOutlinedIcon color="inherit" />

                      {/* TODO: Add new logic to change circle icon on Task isCompleted */}
                      {/* {!isCompleted ? (
                        <CircleOutlinedIcon
                          color="inherit"
                          onClick={() => handleToggleCompleted(index)}
                        />
                      ) : (
                        <CheckCircleOutlineOutlinedIcon
                          color="success"
                          onClick={() => handleToggleCompleted(index)}
                        />
                      )} */}
                    </ListItemIcon>
                    <ListItemText id={labelId}>
                      <TaskModal
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        dueDate={task.dueDate}
                        priority={task.priority}
                        location={task.location}
                        tags={task.tags}
                        projectId={task.projectId}
                      />
                    </ListItemText>
                  </ListItemButton>
                  <Tooltip title="More" arrow>
                    <TaskMenu taskId={task.id} />
                  </Tooltip>
                </ListItem>
              </div>
            );
          })}
        </List>
      </Container>
    </>
  );
}
