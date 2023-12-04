import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReduxProvider from "./redux/provider.jsx";
import { CookiesProvider } from "react-cookie";
import { ReactQueryDevtools } from "react-query/devtools";
import { MaterialTailwindControllerProvider } from "./context/index.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MaterialTailwindControllerProvider>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </QueryClientProvider>
      </CookiesProvider>
    </MaterialTailwindControllerProvider>
  </React.StrictMode>,
);
