import App from "./App.tsx";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./app/Store.ts";
import "./i18n/index.ts";
import "./index.css";
// import { StrictMode } from "react";

import "../public/assets/fonts/fonts.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store} >
      <App />
     </Provider>
// </StrictMode>
);