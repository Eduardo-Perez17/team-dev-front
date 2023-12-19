import type { ReactNode } from 'react';

export interface PropsChildrenEvent {
	children: ReactNode;
	className: string;
	onClick: Event;
}

export interface PropsTitle {
	children: ReactNode;
	className: string;
	title: string;
}
