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

// const macs = [
//   {
//     name: 'MacBook'
//   },
//   {
//     name: 'MacBook Air'
//   },

//   {
//     name: 'MacBook Pro'
//   },

//   {
//     name: 'iMac'
//   },

//   {
//     name: 'iMac Pro'
//   },

//   {
//     name: 'Mac Pro'
//   },

//   {
//     name: 'Mac mini'
//   },

//   {
//     name: 'Accessories'
//   },

//   {
//     name: 'High Sierra'
//   },

//   {
//     name: 'Compare'
//   },

// ]

// {macs.map((mac, index) => <SubNav mac={mac} key={index} />)}


const SubNav = props => {
  return (
    <div>
      <div>
        <LinkElem to={`/mac/${convertToUrl(props.mac.name)}`}>{props.mac.name}</LinkElem>
      </div>
      <Route exact path={`/mac/${convertToUrl(props.mac.name)}`} render={() => <PageContent name={props.mac.name}/>}/>
    </div>
  )
}

function convertToUrl(str) {
  return str.toLowerCase().split(" ").join("-");
}

export default SubNav;