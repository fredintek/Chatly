import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ChakraUiProvider } from "./../src/components/ui/provider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraUiProvider>
        <App />
      </ChakraUiProvider>
    </BrowserRouter>
  </StrictMode>
);
