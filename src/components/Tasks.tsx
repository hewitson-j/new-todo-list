import List from "@mui/material/List";
import { Container } from "@mui/material";
import Task, { TaskType, Tasks } from "./Task";
import { useTasks } from "./TasksProvider";
import CompletionNotification from "./CompletionNotification";
import { useState } from "react";

interface TaskProps {
  showCompletedTasks: boolean;
}

export default function Tasks({ showCompletedTasks }: TaskProps) {
  const { tasks } = useTasks();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  const handleIsNotificationOpen = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const filteredTasks = showCompletedTasks
    ? tasks
    : tasks?.filter((task) => !task.isCompleted);

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {filteredTasks?.map((task: TaskType) => (
            <Task
              task={task}
              key={task.id}
              handleIsNotificationOpen={handleIsNotificationOpen}
              isTaskComplete={(isCompleted) => setIsTaskComplete(isCompleted)}
            />
          ))}
        </List>
        <CompletionNotification
          isOpen={isNotificationOpen}
          handleIsOpen={handleIsNotificationOpen}
          completionMessage={isTaskComplete}
        />
      </Container>
    </>
  );
}
