"use client";

import { ClassOnlyProps } from "@/type/component";
import DepthText from "./depthText";

export default function DepthTextRender({ className }: ClassOnlyProps) {
  return (
    <DepthText
      className={className}
      text="Mahdi Tasha"
      layers={34}
      depth={2.4}
      faceColor="#f8fafc"
      depthColor="#7c3aed"
      tilt={7.5}
      pointerTracking
      smoothing={0.14}
      perspective={900}
      autoOrbit
      orbitSpeed={0.35}
      fontSize="clamp(3rem, 12vw, 7rem)"
      fontWeight={900}
      shadow
    />
  );
}
