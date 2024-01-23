import React from 'react';

const Button = ({ className, type, children }) => {
	return React.createElement(
		'button',
		{ className: className, type: type },
		children,
	);
};

export default Button;
