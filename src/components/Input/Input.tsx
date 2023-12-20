import React from 'react';

import type { PropsInput } from '@/commons/interface';

export const Input = ({
	type,
	value,
	placeholder,
	onChange,
	name,
	className,
}: PropsInput) => {
	return React.createElement('input', {
		type: type,
		value: value,
		placeholder: placeholder,
		onChange: onChange,
		name: name,
		className: className,
	});
};
