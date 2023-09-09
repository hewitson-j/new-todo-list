import { Button, Container, Grid, TextField, Typography } from "@mui/material";

interface AddFormProps {
  setAddItemAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddForm({ setAddItemAvailable }: AddFormProps) {
  const handleAddItemToggle = () => {
    setAddItemAvailable(false);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{}}></Container>
      <Grid container spacing={2}>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <Typography variant="h6" component={"h2"}>
            Add Item
          </Typography>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={12}>
          <TextField
            required
            id="note-title-input"
            label="Title"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="note-body-input" label="Body" fullWidth />
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={1}>
          <Button variant="contained">Save</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" onClick={handleAddItemToggle}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </div>
  );
}
