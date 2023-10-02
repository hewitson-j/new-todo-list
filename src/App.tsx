import { Button, Container, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const handleToggleCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  return (
    <>
      <AppHeader />
      <Container>
        <br></br>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Task List:</Typography>
          <Button variant="outlined" onClick={handleToggleCompletedTasks}>
            {showCompletedTasks
              ? "Hide Completed Tasks"
              : "Show Completed Tasks"}
          </Button>
        </div>
        <Tasks showCompletedTasks={showCompletedTasks} />
      </Container>
    </>
  );
}

export default App;
