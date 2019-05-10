import React from 'react';
import styled from 'styled-components';

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 3.5rem;
  font-weight: 600;
`;

const PageContent = props => {
  return (
    <div>
      <ProductTitle>{props.name}</ProductTitle>
    </div>
  )
}; 

export default PageContent;