export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: string;
  isLoading?: boolean;
  label: string;
  layout?: 'solid' | 'outline';
  noBaseStyle?: boolean;
}
