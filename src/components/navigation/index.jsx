import React from 'react';

const navLinks = [
	{
		label: 'home'
	}
]

function Navigation() {
	return (
		<div>
			<a href="/">Logo</a>

			<ul>
				{ navLinks.map(navItem => <li>{navItem.label}</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
