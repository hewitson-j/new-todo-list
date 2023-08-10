import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { blue, yellow } from "@mui/material/colors";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: yellow[900],
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}
