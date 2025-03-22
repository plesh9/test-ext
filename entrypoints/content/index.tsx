import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

export default defineContentScript({
  matches: ["*://*/*"],
  main() {
    const extRoot = document.createElement("div");
    extRoot.id = "extRoot";
    document.body.appendChild(extRoot);
  
    ReactDOM.createRoot(extRoot).render(
      <React.StrictMode>
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 999,
            padding: 20,
            background: "red",
          }}
        >
          <App />
        </div>
      </React.StrictMode>
    );
  },
});
