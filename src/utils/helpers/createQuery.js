export const createQueryString = (params = {}) => {
	const keys = Object.keys(params).filter(
		key => ![undefined, null, ''].includes(params[key]),
	);

	if (keys.length === 0) return '';

	return keys
		.reduce((arr, key) => {
			arr.push(`${key}=${params[key]}`);
			return arr;
		}, [])
		.join('&');
};
