import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface PrioritySelectProps {
  priority: string;
  onPriorityChange: (newPriority: string) => void;
}

export default function PrioritySelect({
  priority,
  onPriorityChange,
}: PrioritySelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const newPriority = event.target.value as string;
    onPriorityChange(newPriority);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value={"low"}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"low"}>Low</MenuItem>
          <MenuItem value={"normal"}>Normal</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
