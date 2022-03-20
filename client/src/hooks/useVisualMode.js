import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState(initial);

  const transition = mode => setMode(mode);

  return { mode, transition };
}
