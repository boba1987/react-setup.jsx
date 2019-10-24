import React from 'react';
import { pageLinks } from '../../routes/config';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div>
			<a href="/">Logo</a>

			<ul>
				{ pageLinks.map(({label, to, exact}, index) =>
					<li key={index}>
						<NavLink to={to} exact={exact} activeClassName="selected">{label}</NavLink>
					</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
