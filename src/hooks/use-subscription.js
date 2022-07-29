import { useContext, useEffect, useState } from "react";
import { SubscriptionContext } from "../contexts/subscription/subscription-context";

export function useSubscription({ value }) {
  const controller = useContext(SubscriptionContext);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const unregister = controller.register(value);

    return () => {
      unregister();
    };
  }, [controller, value]);

  useEffect(() => {
    const subscription = controller.$onStatusChange.subscribe(
      (changedStatuses) => {
        const currentStatus = changedStatuses[value];

        if (!currentStatus) return;

        setStatus(currentStatus.code);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [controller, value]);

  return { controller, status };
}
