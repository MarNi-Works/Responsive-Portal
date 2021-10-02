import React from "react";

export interface IData {
  id: string
  label: string
  icon: React.ReactElement | React.FC
  sales: string
}

export interface IStatisticsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  data: IData[]
}
