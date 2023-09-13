// List Components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";

import { useState } from "react";
import itemEntries from "./ItemEntries";
import ItemModal from "./ItemModal";

// Icon Components
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip/Tooltip";

export default function TaskList() {
  const [completedItems, setCompletedItems] = useState(
    itemEntries.map((item) => item.isCompleted)
  );

  const handleToggleCompleted = (index: number) => {
    setCompletedItems((prevCompletedItems) => {
      const newCompletedItems = [...prevCompletedItems];
      newCompletedItems[index] = !newCompletedItems[index];
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
              <div key={index}>
                <ListItem
                  disablePadding
                  // onClick={() => handleToggleCompleted(index)}
                >
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      {!isCompleted ? (
                        <CircleOutlinedIcon
                          color="inherit"
                          onClick={() => handleToggleCompleted(index)}
                        />
                      ) : (
                        <CheckCircleOutlineOutlinedIcon
                          color="success"
                          onClick={() => handleToggleCompleted(index)}
                        />
                      )}
                    </ListItemIcon>
                    <ListItemText id={labelId}>
                      <ItemModal title={item.title} />
                    </ListItemText>
                  </ListItemButton>
                  <Tooltip title="Edit">
                    <ListItemButton
                      sx={{ maxWidth: "5%" }}
                      role={undefined}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ListItemText>
                        <EditIcon />
                      </ListItemText>
                    </ListItemButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <ListItemButton
                      sx={{ maxWidth: "5%" }}
                      role={undefined}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ListItemText>
                        <DeleteIcon />
                      </ListItemText>
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              </div>
            );
          })}
        </List>
      </Container>
    </>
  );
}
