import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavListItem = styled.li`
	margin: 0 3rem;
	display: inline-block;
`;

const LinkElem = styled(NavLink)`
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
`;

const Nav = props => {
  const icon = "fab fa-apple";
  return (
    <NavListItem>
      <LinkElem to={`${props.item.link}`}>{props.item.name === icon ? <i className={icon} /> : props.item.name}</LinkElem>
    </NavListItem>
  )
}

export default Nav;