import { useMemo } from "react";
import "./Rays.css";

const RAY_COUNT = 140;
const CX = 930, CY = 10;
const BASE_RADIUS = 2400;

export default function Rays() {
  const lines = useMemo(() =>
    Array.from({ length: RAY_COUNT }, (_, i) => {
      const a = (i / RAY_COUNT) * Math.PI * 2;
      const r = BASE_RADIUS
        + Math.sin(i * 47.3) * 350
        + Math.cos(i * 23.7) * 250
        + Math.sin(i *  7.1) * 180;
      return (
        <line
          key={i}
          x1={CX} y1={CY}
          x2={CX + Math.cos(a) * r} y2={CY + Math.sin(a) * r}
          stroke="currentColor"
          strokeWidth="0.6"
        />
      );
    }),
  []);

  return (
    <svg
      className="rays"
      viewBox="0 0 940 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id="ray-fade"
          cx={CX} cy={CY} r={900}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="currentColor" stopOpacity="0" />
          <stop offset="40%"  stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </radialGradient>
        <mask id="ray-mask">
          <rect x="-5000" y="-5000" width="12000" height="12000" fill="url(#ray-fade)" />
        </mask>
      </defs>

      <g mask="url(#ray-mask)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${CX} ${CY}`}
          to={`360 ${CX} ${CY}`}
          dur="90s"
          repeatCount="indefinite"
        />
        {lines}
      </g>
    </svg>
  );
}
