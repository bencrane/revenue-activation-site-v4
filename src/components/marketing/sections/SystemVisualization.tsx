"use client";

import { useEffect, useState } from "react";

interface DataLine {
  id: number;
  width: number;
  y: number;
  opacity: number;
  hasNode: boolean;
  nodePosition: number;
  active: boolean;
}

export function SystemVisualization() {
  const [lines, setLines] = useState<DataLine[]>([]);
  const [activeLine, setActiveLine] = useState(0);

  // Initialize lines
  useEffect(() => {
    const initialLines: DataLine[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      width: 40 + Math.random() * 50,
      y: i * 38 + 20,
      opacity: 0.15 + Math.random() * 0.25,
      hasNode: Math.random() > 0.4,
      nodePosition: 60 + Math.random() * 30,
      active: false,
    }));
    setLines(initialLines);
  }, []);

  // Animate active line
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 400 480"
        className="w-full h-full max-w-[400px]"
        fill="none"
      >
        {/* Vertical connector line */}
        <line
          x1="40"
          y1="20"
          x2="40"
          y2="460"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border-subtle"
        />

        {/* Data lines */}
        {lines.map((line, index) => (
          <g key={line.id}>
            {/* Horizontal line */}
            <line
              x1="40"
              y1={line.y}
              x2={40 + (line.width * 3)}
              y2={line.y}
              stroke="currentColor"
              strokeWidth="1"
              className={`transition-all duration-700 ${
                index === activeLine
                  ? "text-primary opacity-80"
                  : "text-border-subtle"
              }`}
              style={{ opacity: index === activeLine ? 0.8 : line.opacity }}
            />

            {/* Connection node on vertical line */}
            <circle
              cx="40"
              cy={line.y}
              r={index === activeLine ? 4 : 2}
              className={`transition-all duration-500 ${
                index === activeLine
                  ? "fill-primary"
                  : "fill-text-muted"
              }`}
            />

            {/* End node (if has node) */}
            {line.hasNode && (
              <g>
                <circle
                  cx={40 + (line.width * 3)}
                  cy={line.y}
                  r={index === activeLine ? 6 : 3}
                  className={`transition-all duration-500 ${
                    index === activeLine
                      ? "fill-primary/30 stroke-primary"
                      : "fill-surface-elevated stroke-border-subtle"
                  }`}
                  strokeWidth="1"
                />
                {index === activeLine && (
                  <circle
                    cx={40 + (line.width * 3)}
                    cy={line.y}
                    r="3"
                    className="fill-primary animate-pulse"
                  />
                )}
              </g>
            )}

            {/* Data packet animation on active line */}
            {index === activeLine && (
              <circle
                cx="40"
                cy={line.y}
                r="2"
                className="fill-primary"
              >
                <animate
                  attributeName="cx"
                  from="40"
                  to={40 + (line.width * 3)}
                  dur="1.5s"
                  repeatCount="1"
                  fill="freeze"
                />
                <animate
                  attributeName="opacity"
                  values="1;1;0"
                  dur="1.5s"
                  repeatCount="1"
                  fill="freeze"
                />
              </circle>
            )}
          </g>
        ))}

        {/* Status indicators */}
        <g className="text-text-muted">
          <text x="360" y="30" fontSize="10" fill="currentColor" className="font-mono opacity-40">
            SYS
          </text>
          <circle cx="390" cy="26" r="3" className="fill-primary animate-pulse" />
        </g>
      </svg>
    </div>
  );
}
