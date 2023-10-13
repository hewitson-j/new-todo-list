import List from "@mui/material/List";
import { Container } from "@mui/material";
import Task, { TaskType, Tasks } from "./Task";
import { useTasks } from "./TasksProvider";
import { useState } from "react";
import CompletionNotification from "./CompletionNotification";

interface TaskProps {
  showCompletedTasks: boolean;
}

export default function Tasks({ showCompletedTasks }: TaskProps) {
  const { tasks } = useTasks();

  const [notificationInfo, setNotificationInfo] = useState({
    isOpen: false,
    handleIsOpen: () => {},
    isCompleted: false,
  });

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
              setNotificationInfo={setNotificationInfo}
              notificationInfo={notificationInfo}
            />
          ))}
        </List>
        <CompletionNotification
          isOpen={notificationInfo.isOpen}
          handleIsOpen={notificationInfo.handleIsOpen}
          completionMessage={notificationInfo.isCompleted}
        />
      </Container>
    </>
  );
}
