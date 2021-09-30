import React from "react";

type IconType =
  | string
  | React.FC
  | React.Component
  | React.ComponentElement<any, any>

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: IconType;
  isLoading?: boolean;
  label?: string;
  layout?: 'solid' | 'outline';
  noBaseStyle?: boolean;
}
