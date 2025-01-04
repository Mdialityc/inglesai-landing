import React, { ReactNode } from "react";
import { Button } from "./button";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  action?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InglesaiButton({
  children,
  className,
  variant,
  action,
}: Props) {
  const primaryVariant =
    "bg-button hover:bg-button-hover text-button-foreground ";
  const secondaryVariant =
    "bg-secondary hover:bg-button-hover text-button-foreground";
  const tertiaryVariant =
    "bg-background hover:bg-button-hover text-secondary hover:text-button-foreground";

  const bgColor = clsx(
    `${
      !variant
        ? primaryVariant
        : variant === "primary"
        ? primaryVariant
        : variant === "secondary"
        ? secondaryVariant
        : tertiaryVariant
    }`
  );

  const animation = clsx(
    `focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105`
  );

  return (
    <Button
      size="lg"
      className={
        `${bgColor} ${animation} text-xl font-semibold rounded-lg` + className
      }
      onClick={action}
    >
      {children}
    </Button>
  );
}
