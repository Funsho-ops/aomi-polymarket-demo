"use client";

import { useState, type FC } from "react";
import { cn } from "@aomi-labs/react";

export type NetworkSelectProps = {
  className?: string;
};

export const NetworkSelect: FC<NetworkSelectProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm",
        className
      )}
      onClick={() => setOpen(!open)}
    >
      <span>Network</span>
    </button>
  );
};