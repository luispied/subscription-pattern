import { useContext, useState } from "react";
import { Consumer } from "./wrappers/consumer";

import "./styles.css";
import { SubscriptionContext } from "./contexts/subscription/subscription-context";

export default function App() {
  const [showConsumers, setShowConsumers] = useState(true);
  const controller = useContext(SubscriptionContext);

  const callGetStatuses = () => {
    controller.getStatuses();
  };

  return (
    <div>
      {showConsumers && (
        <>
          <Consumer value="Task/1" />
          <Consumer value="Shot/2" />
          <Consumer value="Version/2" />
          <Consumer value="Version/1" />
          <Consumer value="Version/3" />
          <Consumer value="Version/1" />
          <Consumer value="Task/1" />
        </>
      )}
      <button onClick={() => setShowConsumers(!showConsumers)}>Toggle</button>
      <button onClick={callGetStatuses}>Get Statuses</button>
    </div>
  );
}
