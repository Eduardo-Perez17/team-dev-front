import { useContext, useState } from 'react';

// Services
import { API_PUBLIC } from '../services/api';

// Endpoints
import { TAGS_ENDPOINT } from '../utils/constants';

// Context
import ContextUser from '../context/UserContext';

export const useTags = () => {
	const { jwt } = useContext(ContextUser);

	const [loading, setLoading] = useState(false);
	const [allTags, setAllTags] = useState([]);
	const [error, setError] = useState(false);

	const getAllTags = async () => {
		try {
			setLoading(true);

			const response = await API_PUBLIC({
				endpoint: `${TAGS_ENDPOINT}`,
				jwt,
			});

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(true);
				setLoading(false);
				throw new Error(response.message);
			}

			setAllTags(response);
			setLoading(false);
			return response;
		} catch (error) {
			setError(true);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { error, loading, allTags, getAllTags };
};
