import React, { useState } from 'react';

export default function useString(init?: string): [string, (value: any) => void] {
  const [str, setStr] = useState<string>(init === undefined ? "" : init);

  const stringFilter = (value: any) => {
    if (value === null || value === undefined) {
      setStr("");
    } else if (typeof value === 'string') {
      setStr(value);
    } else {
      console.warn("unsupported types: " + (typeof value));
    }
  }

  return [str, stringFilter];
}
