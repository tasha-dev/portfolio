// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ReactNode } from "react";

// Creating and exporting Footer component as default
export default function Footer(): ReactNode {
  // Returning JSX
  return (
    <footer className="mt-10">
      <small className="truncate block">
        © 2025 Mahdi Tasha. All rights reserved.
      </small>
    </footer>
  );
}
