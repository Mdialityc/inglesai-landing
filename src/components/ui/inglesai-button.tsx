import React, { ReactNode } from "react";
import { Button } from "./button";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function InglesaiButton({
  children,
  className,
  variant,
}: Props) {
  const primaryVariant =
    "bg-button hover:bg-button-hover text-button-foreground";
  const bgColor = clsx(
    `${
      !variant
        ? primaryVariant
        : variant === "primary"
        ? primaryVariant
        : "bg-secondary hover:bg-button-hover"
    }`
  );
  return (
    <Button
      size="lg"
      className={className + ` ${bgColor} text-xl font-semibold rounded-lg`}
    >
      {children}
    </Button>
  );
}
