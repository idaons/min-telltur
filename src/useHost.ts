import { useEffect, useState } from "react";
import { KonkurranseNavn } from "@/types";

export const useHost = () => {
  const [host, setHost] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHost(location.host);
  }, []);

  return host;
};
