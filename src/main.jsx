import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import ReduxProvider from "./redux/provider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
