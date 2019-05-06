import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const TopNavItems = [
  {
    link: '/',
    name: 'fab fa-apple'
  },
	{
		link: '/mac',
		name: 'Mac'
	},
	{
		link: '/ipad',
		name: 'iPad'
	},
	{
		link: '/iphone',
		name: 'iPhone'
	},
	{
		link: '/watch',
		name: 'Watch'
	},
	{
		link: '/tv',
		name: 'TV'
	},
	{
		link: '/music',
		name: 'Music'
	},
	{
		link: '/support',
		name: 'Support'
	}
];

const NavBar = styled.div`background: #323232;`;

const NavList = styled.ul`list-style-type: none;`;

const NavWrapper = (props) => {
	return (
		<NavBar>
			<nav>
				<NavList>
          {TopNavItems.map((item, index) => <Nav item={item} key={index} />)}
				</NavList>
			</nav>
		</NavBar>
	);
};

export default NavWrapper;
