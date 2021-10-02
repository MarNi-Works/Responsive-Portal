import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { IFieldProps } from './types';
import Button from '../Button';

const Input: React.FC<IFieldProps> = props => {
  const {
    className,
    defaultValue,
    error,
    errorText,
    icon,
    id,
    label,
    name,
    placeholder,
    required,
    type,
    value,
    ...defaultProps
  } = props

  return (
    <StyledInput className={cn('input', className)}>
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...defaultProps}
      />
      <Button
        noBaseStyle
        className='input__searchBtn'
        icon={icon}
      />
    </StyledInput>
  )
}

export default Input

const StyledInput = styled.div`
  position: relative;
  flex: 1;

  .input__searchBtn {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 1rem;
    color: #6E7384;
    border: transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    cursor: text;
    outline: none;
    width: 100%;
    height: 40px;
    padding: 0 0.5rem 0 44px;
    border-radius: 4px;
    background-color: rgb(235 238 248 / 40%);
    border: 1px solid #E7E7EA;
    box-shadow: 0 0 0 0 #E5E9F5;
    transition: all 0.2s ease;

    &:focus {
      border: 1px solid #3E59B7;
      box-shadow: 0 0 0 3px #E5E9F5;

      + {
        button {
          color: #3E59B7;
        }
      }
    }
  }
`