import React, { FC, MouseEvent, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { LoginScreen } from "./components/login";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import { DesktopScreen } from "./components/desktop";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { Provider } from "react-redux";
import SuperJSON from "superjson";

import { store } from "./state/store";
import { trpc } from "./trpc/server";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const contextMenuHandler = (e: MouseEvent) => {
  e.preventDefault();
};

const App: FC = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:5000/trpc",
        }),
      ],
      transformer: SuperJSON,
    })
  );

  return (
    <Provider store={store}>
      <React.StrictMode>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <div onContextMenu={contextMenuHandler}>
              <LoginScreen />
              <DesktopScreen />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </trpc.Provider>
      </React.StrictMode>
    </Provider>
  );
};

root.render(<App />);

reportWebVitals();
