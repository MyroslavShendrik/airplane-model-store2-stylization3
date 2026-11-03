import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react"; //! Emotion Theme
// import { App } from './components/App/App.jsx'
import { App } from "@/components/App/App.jsx";
// import {theme} from "@/constants/theme"
import { theme } from "@/constants";
//todo: var.1  Підключення Normalize (npm i normalize.css)
// import 'normalize.css';  //! var.1 підключення тільки Normalize
// import './index1.css'; //! підключення тільки Reset CSS

//todo: var.2  Підключення Normalize (npm i -D postcss-normalize + postcss.config.js)
import "./index.css"; //! підключення Normalize і Reset CSS

// const theme = {
//   fontColor: {
//     mainTitle: "#b25501",
//     planeTitleImageTitles: "#0000ff",
//     nameFullTitle: "#0b5500",
//   },
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store2-stylization3">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
