import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState(initial);

  const transition = mode => setMode(mode);

  const back = () => {
    if (!history) {
      return setMode(null);
    }
    if (history.length === 1) {
      setMode(history[0]);
    }
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  };

  return { mode, transition, back };
}
