import List from "@mui/material/List";
import { Container } from "@mui/material";
import Task, { Tasks } from "./Task";
import { useTasks } from "./TasksProvider";

export default function Tasks() {
  const { tasks } = useTasks();

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {tasks?.map((task) => (
            <Task task={task} />
          ))}
        </List>
      </Container>
    </>
  );
}
