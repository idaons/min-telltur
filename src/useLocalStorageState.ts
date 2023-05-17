import React, { Dispatch, SetStateAction } from "react";

function useLocalStorageState<S = undefined>(
  key: string,
  defaultValue: S,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = React.useState<S>(
    typeof defaultValue === "function" ? defaultValue() : defaultValue
  );

  React.useEffect(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (!localStorageValue) return;

    try {
      setState(deserialize(localStorageValue));
    } catch (error) {
      window.localStorage.removeItem(key);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState };
