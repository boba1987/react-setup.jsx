import React from 'react';
import routes from '../../constants/routes';

const navLinks = [
	{
		label: 'home',
		id: 1,
		url: routes.home
	}
]

function Navigation() {
	return (
		<div>
			<a href="/">Logo</a>

			<ul>
				{ navLinks.map(({id, label}) => <li key={id}>{label}</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
