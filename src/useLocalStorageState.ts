import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useLocalStorageState<S = undefined>(
  key: string,
  defaultValue: S,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [S, Dispatch<SetStateAction<S>>, boolean] {
  const [state, setState] = useState<S>(
    typeof defaultValue === "function" ? defaultValue() : defaultValue
  );

  const [keyExist, setKeyExist] = useState(false);

  useEffect(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (!localStorageValue) return;

    setKeyExist(true);

    try {
      setState(deserialize(localStorageValue));
    } catch (error) {
      window.localStorage.removeItem(key);
    }
  }, [deserialize, key]);

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState, keyExist];
}

export { useLocalStorageState };
