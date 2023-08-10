import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface TaskCardProps {
  title: string;
  description: string;
  complete: boolean;
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Complete</Button>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
