import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import PageContent from './PageContent';

const LinkElem = styled(Link)`
  font-size: 1.7rem;
  text-decoration: none;
  color: #323232;
  font-weight: 500;
`;

const SubNav = props => {
  return (
    <div>
      <div>
        <LinkElem to={`/${props.name}/${convertToUrl(props.item.name)}`}>{props.item.name}</LinkElem>
      </div>
    </div>
  )
}
function convertToUrl(str) {
  return str.toLowerCase().split(" ").join("-");
}

export default SubNav;