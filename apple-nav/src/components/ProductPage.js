import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SubNav from './SubNav/SubNav';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

const ListContainer = styled.div`
  margin: 2rem 0 0;
  display: flex;
  justify-content: space-around;
`;


const ProductPage = props => {
  console.log(props);
  return (
    <Container>
      <Title>{props.name}</Title>
      <ListContainer>
        <div>Sometihng</div>
        {/* {macs.map((mac, index) => <SubNav mac={mac} key={index} />)} */}
      </ListContainer>
    </Container>
  );
}

export default ProductPage;