// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Creating and exporting Footer component as default
export default function Footer(): ReactNode {
  // Returning JSX
  return (
    <footer className="mt-10">
      <small className="truncate block">
        © {new Date().getFullYear()} Mahdi Tasha. All rights reserved.
      </small>
    </footer>
  );
}
