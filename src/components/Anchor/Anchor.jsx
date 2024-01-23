import React from 'react';

export const Anchor = ({ children, href, target, rel, className }) => {
	return React.createElement(
		'a',
		{ href: href, target: target, rel: rel, className: className },
		children,
	);
};
