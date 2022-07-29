import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SubscriptionProvider } from "./contexts/subscription/subscription-provider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SubscriptionProvider pollingInterval={30}>
      <App />
    </SubscriptionProvider>
  </StrictMode>
);
