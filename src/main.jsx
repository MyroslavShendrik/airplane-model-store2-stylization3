import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import './index.css'
import App from '@/componets/App/App.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/star-wars-shop">
      <App />
     </BrowserRouter>
  </StrictMode>,
);






