import React from 'react';

// interface
import type { PropsAnchor } from '@/commons/interface';

export const Anchor = ({ children, href, target, rel, className }: PropsAnchor) => {
	return React.createElement(
		'a',
		{ href: href, target: target, rel: rel, className: className },
		children,
	);
};
