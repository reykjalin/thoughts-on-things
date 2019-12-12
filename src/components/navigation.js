import React from 'react'
import { Link } from 'gatsby'

const ListLink = ( props ) => (
	<li style={{ display: 'inline-block', marginRight: '1rem' }}>
		<Link to={ props.to }>{ props.children }</Link> 
	</li>
);

export const Navigation = () => {
	return (
		<nav>
			<ul>
				<ListLink to={ '/' }>home</ListLink>
				<ListLink to={ '/blog' }>blog</ListLink>
				<ListLink to={'/about'}>about</ListLink>
			</ul>
		</nav>
	);
}
