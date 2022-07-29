import { useMemo } from "react";
import { SubscriptionContext } from "./subscription-context";
import { SubscriptionController } from "./subscription-controller";
import { usePollingEffect } from "../../hooks/use-polling-effect";

export const SubscriptionProvider = ({ children, pollingInterval }) => {
  const subscriptionController = useMemo(
    () => new SubscriptionController(),
    []
  );

  usePollingEffect(
    () => subscriptionController.getStatuses(),
    [subscriptionController],
    {
      interval: pollingInterval
    }
  );

  return (
    <SubscriptionContext.Provider value={subscriptionController}>
      {children}
    </SubscriptionContext.Provider>
  );
};
