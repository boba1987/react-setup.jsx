import React from 'react';
import links from './links';

function Navigation() {
	return (
		<div>
			<a href="/">Logo</a>

			<ul>
				{ links.map(({id, label, url}) => <li key={url}>{label}</li>) }
			</ul>

		</div>
  	);
}

export default Navigation;
