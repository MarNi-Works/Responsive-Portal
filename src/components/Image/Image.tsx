import React from 'react';
import cn from 'classnames';
import { IImageProps } from './types';
import { HiOutlineUserCircle } from 'react-icons/hi';
import styled from 'styled-components';

const Image: React.FC<IImageProps> = (props) => {
  const {
    alt,
    className,
    isloading,
    objectFit = 'cover',
    placeholder = HiOutlineUserCircle,
    rounded,
    semiRounded,
    src,
    ...rest
  } = props

  return (
    <StyledImage className={cn('', className)}>
      {src ? (
        <img
          className={cn('image', {
            [`object-fit-${objectFit}`]: objectFit,
            'rounded': rounded,
            'semi-rounded': semiRounded
          })}
          alt={alt}
          src={src}
          {...rest}
        />
      ) : (
        placeholder
      )}
    </StyledImage>
  )
}

export default Image

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img.image {
    width: 100%;
    height: 100%;
    background-position: top;

    &.object-fit-contain {
      object-fit: contain;
    }

    &.object-fit-cover {
      object-fit: cover;
    }

    &.rounded {
      border-radius: 50%;
    }

    &.semi-rounded {
      border-radius: 4px;
    }
  }
`