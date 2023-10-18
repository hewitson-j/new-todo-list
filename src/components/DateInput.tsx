import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface DateInputProps {
  title: string;
  date?: Date | undefined;
  onDateChange: (newDate: Date | undefined) => void;
}

export default function DateInput({
  title,
  date,
  onDateChange,
}: DateInputProps) {
  // Check if date is valid
  const isDateValid = date instanceof Date && !isNaN(date.getTime());

  // Extract date components if the date is valid
  const [year, setYear] = useState(
    isDateValid ? date.getFullYear() : undefined
  );
  const [month, setMonth] = useState(
    isDateValid ? date.getMonth() + 1 : undefined
  );
  const [day, setDay] = useState(isDateValid ? date.getDate() : undefined);

  const updateDate = () => {
    if (year && month && day) {
      const updatedDate = new Date(year, month - 1, day);
      onDateChange(updatedDate);
    } else {
      onDateChange(undefined); // Pass undefined if any field is blank
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Typography variant="caption">{title}</Typography>
      <Box sx={{ display: "flex", gap: "5px" }}>
        <TextField
          label="Month"
          type="number"
          value={month}
          onChange={(e) => {
            setMonth(parseInt(e.target.value));
            updateDate();
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 1,
            max: 12,
          }}
        />
        <TextField
          label="Day"
          type="number"
          value={day}
          onChange={(e) => {
            setDay(parseInt(e.target.value));
            updateDate();
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 1,
            max: 31,
          }}
        />
        <TextField
          label="Year"
          type="number"
          value={year}
          onChange={(e) => {
            setYear(parseInt(e.target.value));
            updateDate();
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 2000,
            max: 2100,
          }}
        />
      </Box>
    </Box>
  );
}
