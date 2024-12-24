"use client";

import { useState } from "react";

interface ExpandableTextProps {
  title: string;
  subtitle: string;
  content: string;
  initialHeight?: number;
}

export default function ExpandableText({
  title,
  subtitle,
  content,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-xl p-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <h2 className="text-2xl mb-4">{subtitle}</h2>
      <div className="relative">
        <div
          className={`${
            !isExpanded ? "max-h-[100px] overflow-hidden" : ""
          } transition-all duration-300 ease-in-out`}
        >
          <p className="text-gray-700 leading-relaxed mb-2">{content}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-700 font-medium mt-2 "
        >
          {isExpanded ? "Leer menos..." : "Leer más..."}
        </button>
      </div>
    </div>
  );
}
