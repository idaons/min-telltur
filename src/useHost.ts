import { useEffect, useState } from "react";

export const useHost = () => {
  const [host, setHost] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHost(location.host);
  }, []);

  return host;
};
