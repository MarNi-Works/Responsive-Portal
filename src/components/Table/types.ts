export interface THead {
  id: string
  header: string
}

export interface TBody {
  id: string
  name: string
  img: any
  rank: string
  area: string
  stars: any
  points: string
}

export interface ITableProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  data: TBody[];
  head: THead[]
}
