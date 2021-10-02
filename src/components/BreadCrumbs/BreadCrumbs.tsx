import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { IBreadCrumbsProps } from './types';

const BreadCrumbs: React.FC<IBreadCrumbsProps> = (props) => {
  const { className, label } = props

  return (
    <StyledBreadCrumbs className={cn('BreadCrumb', className)}>
      <h1>{label}</h1>
    </StyledBreadCrumbs>
  );
};

export default BreadCrumbs;

const StyledBreadCrumbs = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem;

  h1 {
    font-size: 1.25rem;
  }
`