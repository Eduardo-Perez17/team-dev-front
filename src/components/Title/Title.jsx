import React from 'react';

// constants
import { sizeElement } from '../../utils/constants';

export const Title = ({ children, className, title }) => {
	return React.createElement(
		sizeElement[title] || 'h1',
		{ className: className },
		children,
	);
};

export default Title;
