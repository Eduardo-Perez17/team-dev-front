import type { ReactNode } from 'react';

// ! ningun any

export interface PropsChildrenEvent {
	children?: ReactNode;
	className?: string;
	onClick?: any;
}

export interface PropsTitle {
	children?: ReactNode;
	className?: string;
	title?: any;
}

// ! quitar las opcionales cuando se pueda
export interface PropsInput {
	className?: string;
	type?: string;
	placeholder?: string;
	name?: string | number;
	value?: string | number;
	onChange?: any;
}

export interface PropsSvg {
	fill?: string;
	height?: string;
	width?: string;
	className?: string;
}

export interface PropsAnchor {
	children: ReactNode;
	href: string;
	target: string;
	rel: string;
	className: string;
}
