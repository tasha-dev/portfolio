// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
import ASCIIText from "./ASCIIText";

// Creating and exporting MahdiText component as default
export default function MahdiText(): JSX.Element {
  // Returning JSX
  return (
    <div className="relative mb-10 h-[200px] overflow-hidden">
      <ASCIIText text="T4$H4" enableWaves={false} />
    </div>
  );
}
