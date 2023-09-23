import { Container, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <br></br>
        <Typography variant="h4">Task List:</Typography>
        <Tasks />
      </Container>
    </>
  );
}

export default App;
