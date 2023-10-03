import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTasks } from "./TasksProvider";
import EditFormModal from "./EditFormModal";

interface TaskMenuProps {
  taskId: string;
}

export default function TaskMenu({ taskId }: TaskMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { removeTaskById, findTaskById } = useTasks();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <EditIcon />
          <EditFormModal task={findTaskById?.(taskId)} />
        </MenuItem>
        <MenuItem
          onClick={() => {
            removeTaskById?.(taskId);
            handleClose();
          }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
