import { Container, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
  const [addItemAvailable, setAddItemAvailable] = useState(false);

  return (
    <>
      <AppHeader setAddItemAvailable={setAddItemAvailable} />
      <Container>
        <br></br>
        <Typography variant="h4">Task List:</Typography>
        <TaskList />
        {addItemAvailable ? (
          <AddForm setAddItemAvailable={setAddItemAvailable} />
        ) : null}
      </Container>
    </>
  );
}

export default App;
