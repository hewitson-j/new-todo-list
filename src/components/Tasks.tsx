import List from "@mui/material/List";
import { Container } from "@mui/material";
import Task, { TaskType, Tasks } from "./Task";
import { useTasks } from "./TasksProvider";

interface TaskProps {
  showCompletedTasks: boolean;
}

export default function Tasks({ showCompletedTasks }: TaskProps) {
  const { tasks } = useTasks();

  const filteredTasks = showCompletedTasks
    ? tasks
    : tasks?.filter((task) => !task.isCompleted);

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {filteredTasks?.map((task: TaskType) => (
            <Task task={task} key={task.id} />
          ))}
        </List>
      </Container>
    </>
  );
}
