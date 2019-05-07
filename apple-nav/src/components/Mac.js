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

const macs = [
  {
    name: 'MacBook'
  },
  {
    name: 'MacBook Air'
  },

  {
    name: 'MacBook Pro'
  },

  {
    name: 'iMac'
  },

  {
    name: 'iMac Pro'
  },

  {
    name: 'Mac Pro'
  },

  {
    name: 'Mac mini'
  },

  {
    name: 'Accessories'
  },

  {
    name: 'High Sierra'
  },

  {
    name: 'Compare'
  },

]

const Mac = props => {
  return (
    <Container>
      <Title>Mac</Title>
      <ListContainer>
        {macs.map((mac, index) => <SubNav mac={mac} key={index} />)}
      </ListContainer>
    </Container>
  )
}

export default Mac;