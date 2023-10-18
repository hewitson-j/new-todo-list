import { Container, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import Tasks from "./components/Tasks";
import ToggleShowCompleted from "./components/ToggleShowCompleted";
import { useTasks } from "./components/TasksProvider";

function App() {
  const { showCompletedTasks } = useTasks();

  return (
    <>
      <AppHeader />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0 0",
          }}
        >
          <Typography variant="h4">Task List:</Typography>
          <ToggleShowCompleted />
        </div>
        <Tasks showCompletedTasks={showCompletedTasks} />
      </Container>
    </>
  );
}

export default App;
