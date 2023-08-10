import { Container, Grid } from "@mui/material";
import TaskCard from "./TaskCard";

export default function Tasks() {
  const props = {
    title: "Default",
    description: "This is the default text.",
    complete: true,
  };

  return (
    <>
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TaskCard
              title={props.title}
              description={props.description}
              complete={props.complete}
            ></TaskCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
