export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
  className?: string
  isloading?: boolean
  objectFit?: 'contain' | 'cover'
  placeholder?: any
  rounded?: boolean
  semiRounded?: boolean
  src: string
}