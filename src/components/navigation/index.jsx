import React from 'react';
import links from './links';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div>
			<a href="/">Logo</a>

			<ul>
				{ links.map(({label, to}, index) =>
					<li key={index}>
						<NavLink to={to} activeClassName="selected">{label}</NavLink>
					</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
