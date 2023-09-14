import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerInputProps {
  id?: string;
  label: string;
}

export default function DatePickerInput({ id, label }: DatePickerInputProps) {
  return (
    <div id={id}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label={label} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
