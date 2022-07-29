import { useEffect, useRef } from "react";

export const usePollingEffect = (
  asyncCallback,
  dependencies = [],
  {
    interval = 30, // 30 seconds,
    onCleanUp = () => {}
  } = {}
) => {
  const timeoutIdRef = useRef(null);
  useEffect(() => {
    let stopped = false;
    (async function pollingCallback() {
      try {
        await asyncCallback();
      } finally {
        // Set timeout after it finished, unless stopped
        timeoutIdRef.current =
          !stopped && setTimeout(pollingCallback, interval * 1000);
      }
    })();
    // Clean up if dependencies change
    return () => {
      stopped = true; // prevent racing conditions
      clearTimeout(timeoutIdRef.current);
      onCleanUp();
    };
  }, [dependencies, interval, onCleanUp, asyncCallback]);
};

export default usePollingEffect;
