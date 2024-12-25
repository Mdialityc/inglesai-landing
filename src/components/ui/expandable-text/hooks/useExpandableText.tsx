"use client";
import { useEffect, useRef, useState } from "react";

export default function useExpandableText() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isExpanded]);
  return { isExpanded, contentRef, setIsExpanded };
}
