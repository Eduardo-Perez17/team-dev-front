import React from 'react';

const Paragraph = ({ children, className }) => {
	return React.createElement('p', { className: className }, children);
};

export default Paragraph;
