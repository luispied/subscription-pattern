import { Consumer as Presentation } from "../components/consumer";
import { useSubscription } from "../hooks/use-subscription";

export const Consumer = ({ value }) => {
  const { status } = useSubscription({ value });

  return <Presentation value={value} status={status} />;
};
