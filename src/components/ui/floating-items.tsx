import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FloatingItems({ children }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {children}
    </div>
  );
}
