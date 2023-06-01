import { useEffect, useState } from "react";

export const useHost = () => {
  const [host, setHost] = useState<string | undefined>(location.host);

  useEffect(() => {
    setHost(location.host);
  }, []);

  return host;
};
