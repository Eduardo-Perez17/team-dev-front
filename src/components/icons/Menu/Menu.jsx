export const Menu = ({ fill, height = '40', width = '40', className, onClick }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={height}
			viewBox='0 -960 960 960'
			width={width}
			className={className}
			onClick={onClick}
		>
			<path
				fill={fill}
				d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'
			/>
		</svg>
	);
};
