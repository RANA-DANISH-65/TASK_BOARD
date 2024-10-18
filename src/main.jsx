import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading....</div>}>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={(props) => props !== "shake"}>
        <App />
      </StyleSheetManager>
    </BrowserRouter>
  </Suspense>
);
