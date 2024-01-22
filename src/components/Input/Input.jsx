import React from 'react';

export const Input = ({
	type,
	value,
	placeholder,
	onChange,
	name,
	className,
	id,
}) => {
	return React.createElement('input', {
		type: type,
		value: value,
		placeholder: placeholder,
		onChange: onChange,
		name: name,
		id: id,
		className: className,
	});
};
