import { Container, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <br></br>
        <Typography variant="h4">Task List:</Typography>
        <TaskList />
      </Container>
    </>
  );
}

export default App;
