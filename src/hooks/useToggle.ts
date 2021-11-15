import React, { useCallback, useState } from "react"

export default function useToggle(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue)
  const toggle = useCallback(() => {
    setValue(!value);
  }, []);
  
  return [value, toggle] as const;
};
