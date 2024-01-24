const LeftArrow = ({ width = 40, height = 40, fill, onClick, className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			width={width}
			height={height}
			onClick={onClick}
			className={className}
		>
			<path
				fill={fill}
				d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z'
			/>
		</svg>
	);
};

export default LeftArrow;
