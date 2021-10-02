import React from 'react';

type IconType =
  | string
  | React.FC
  | React.Component
  | React.ComponentElement<any, any>

enum FieldPropsEnum {
  'email',
  'number',
  'password',
  'text',
  'url'
}

export interface IFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
  errorText?: string;
  icon?: IconType;
  id?: string
  label?: string;
  type: keyof typeof FieldPropsEnum;
}
