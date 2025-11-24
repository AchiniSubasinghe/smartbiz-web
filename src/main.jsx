import ReactDOM from "react-dom/client";
import App from "./app/App.jsx"
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/muiTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
