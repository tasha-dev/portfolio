// Codes by mahdi tasha
// Importing part
import { useEffect, useState } from 'react';

// Creating and exporting useMediaQuery custom hook which handles media query
export function useMediaQuery(query: string): boolean {
  // Defining states of component
  const [matches, setMatches] = useState(false);

  // Using useEffect to set "matches" state when query changes
  useEffect(() => {
    // Defining matchMedia variable
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    // Adding event listener of change to medita variable
    media.addEventListener('change', listener);

    // Removing event listener
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  // Retuning The state
  return matches;
}
