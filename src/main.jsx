// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//

import ReactDOM from "react-dom/client";
import App from "../src/App/App.jsx"
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/muiTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
