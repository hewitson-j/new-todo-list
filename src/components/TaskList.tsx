import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function TaskList() {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} disablePadding onClick={handleToggle}>
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    {!completed ? (
                      <CircleOutlinedIcon color="inherit" />
                    ) : (
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
                <ListItemButton sx={{ maxWidth: "5%" }} role={undefined}>
                  <ListItemText>
                    <EditIcon />
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ maxWidth: "5%" }} role={undefined}>
                  <ListItemText>
                    <DeleteIcon />
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
}
