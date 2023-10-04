import { Box, TextField, Typography } from "@mui/material";

interface DateInputProps {
  title: string;
  month: string;
  day: string;
  year: string;
  // monthId: string;
  // dayId: string;
  // yearId: string;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export default function DateInput({
  title,
  month,
  day,
  year,
  // monthId,
  // dayId,
  // yearId,
  onMonthChange,
  onDayChange,
  onYearChange,
}: DateInputProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Typography variant="caption">{title}</Typography>
      <Box sx={{ display: "flex", gap: "5px" }}>
        <TextField
          // id={monthId}
          label="Month"
          type="number"
          value={month}
          onChange={(e) => {
            onMonthChange(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "1",
            max: "12",
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 12,
            },
          }}
        />
        <TextField
          // id={dayId}
          label="Day"
          type="number"
          value={day}
          onChange={(e) => {
            onDayChange(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "1",
            max: "31",
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 31,
            },
          }}
        />
        <TextField
          // id={yearId}
          label="Year"
          type="number"
          value={year}
          onChange={(e) => {
            onYearChange(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "2000",
            max: "2100",
          }}
          InputProps={{
            inputProps: {
              min: 2000,
              max: 2100,
            },
          }}
        />
      </Box>
    </Box>
  );
}
