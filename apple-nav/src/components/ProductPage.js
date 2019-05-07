import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SubNav from './SubNav/SubNav';
import PageContent from './SubNav/PageContent';
import data from '../data.js';

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

const ProductPage = (props) => {
  const name = props.name;
  const lowerCaseName = props.name.toLowerCase();
	return (
		<Container>
			<Title>{name}</Title>
			<ListContainer>{data.model[lowerCaseName].map((item, index) => <SubNav name={lowerCaseName} item={item} key={index} />)}</ListContainer>
      <div>
        {data.model[lowerCaseName].map((item, index) => (
          <Route exact path={`/${lowerCaseName}/${convertToUrl(item.name)}`} render={() => <PageContent name={item.name} /> } />
        ))}
      </div>
		</Container>
  );
};

function convertToUrl(str) {
  return str.toLowerCase().split(" ").join("-");
}

export default ProductPage;
