import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import React from "react";

interface DatePickerInputProps {
  id?: string;
  label: string;
}

export default function DatePickerInput({ id, label }: DatePickerInputProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <div id={id}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            value={value}
            onChange={() => {
              setValue(value);
              console.log(value);
            }}
            label={label}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
