import React from 'react';

export interface IHeaderData {
  id: string
  header: string
}

export interface IBodyData {
  id: string
  name: string
  img: string
  rank: string
  area: string
  stars: any
  points: string
}

export interface IPerformersProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  thead_data: IHeaderData[];
  tbody_data: IBodyData[];
}
