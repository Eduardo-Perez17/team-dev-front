import React from 'react';

export const Box = ({ children, className, onClick }) => {
	return React.createElement(
		'div',
		{ className: className, onClick },
		children,
	);
};
