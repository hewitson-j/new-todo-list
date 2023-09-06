// List Components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";

import { useState } from "react";
import itemEntries from "./ItemEntries";

// Icon Components
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Tooltip from "@mui/material/Tooltip/Tooltip";

export default function TaskList() {
  const [completedItems, setCompletedItems] = useState(
    itemEntries.map((item) => item.completed)
  );

  const handleToggle = (index: number) => {
    setCompletedItems((prevCompletedItems) => {
      const newCompletedItems = [...prevCompletedItems];
      newCompletedItems[index] = !newCompletedItems[index]; // Toggle the completion status
      return newCompletedItems;
    });
  };

  return (
    <>
      <br />
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {itemEntries.map((item, index) => {
            const labelId = `checkbox-list-label-${index}`;
            const isCompleted = completedItems[index];

            return (
              <ListItem
                key={index}
                disablePadding
                onClick={() => {
                  handleToggle(index);
                }}
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    {!isCompleted ? (
                      <CircleOutlinedIcon color="inherit" />
                    ) : (
                      <CheckCircleOutlineOutlinedIcon color="success" />
                    )}
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${item.title}`} />
                </ListItemButton>
                <Tooltip title={"Task Info"}>
                  <ListItemButton
                    sx={{ maxWidth: "5%" }}
                    role={undefined}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from reaching the ListItem
                    }}
                  >
                    <ListItemText>
                      <ArrowDropDownIcon />
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
                <Tooltip title={"Edit"}>
                  <ListItemButton
                    sx={{ maxWidth: "5%" }}
                    role={undefined}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from reaching the ListItem
                    }}
                  >
                    <ListItemText>
                      <EditIcon />
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
                <Tooltip title={"Delete"}>
                  <ListItemButton
                    sx={{ maxWidth: "5%" }}
                    role={undefined}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from reaching the ListItem
                    }}
                  >
                    <ListItemText>
                      <DeleteIcon />
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
}
