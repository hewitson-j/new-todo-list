import { Button } from "@mui/material";
import { useTasks } from "./TasksProvider";

export default function ToggleShowCompleted() {
  const { showCompletedTasks, toggleShowCompletedTasks } = useTasks();

  return (
    <>
      <Button variant="outlined" onClick={toggleShowCompletedTasks}>
        {showCompletedTasks ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </Button>
    </>
  );
}
