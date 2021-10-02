import React from "react";

export interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode
}
