const RightArrow = ({
	fill,
	height = '40',
	width = '40',
	className,
	onClick,
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			width={width}
			height={height}
			className={className}
			onClick={onClick}
		>
			<path
				fill={fill}
				d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z'
			/>
		</svg>
	);
};

export default RightArrow;
