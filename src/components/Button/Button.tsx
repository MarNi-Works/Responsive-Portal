import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { IButtonProps } from './types';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    label,
    layout = 'primary',
    noBaseStyle,
    icon,
    isLoading
  } = props

  const baseCls = cn('', {
    [`button button__${layout}`]: !noBaseStyle
  }, className)

  return (
    <StyledButton className={baseCls}>
      {isLoading ? <HiOutlineDotsHorizontal /> : icon}
      {label}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  outline: none;
  width: auto;
  height: 40px;
  padding: 0 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  color: #4A5065;
  transition: all 0.2s ease;

  &.button__primary {
    color: #FFFFFF;
    background-color: #3E59B7;
    border: 1px solid #3E59B7;

    &:hover {
      background-color: #324792;
      border: 1px solid #324792;
    }
  }

  &.button__secondary {
    color: #4A5065;
    background-color: #FFFFFF;
    border: 1px solid #3E59B7;

    &:hover {
      background-color: #EBEEF8;
    }
  }
`