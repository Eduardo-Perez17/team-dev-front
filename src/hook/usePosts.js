import { useContext, useState } from 'react';

// Services
import { API_PUBLIC } from '../services/api';

// Endpoints
import { POSTS_ENDPOINT } from '../utils/constants';

// Context
import UserContext from '../context/userContext';

export const usePosts = () => {
	const { jwt, user } = useContext(UserContext);

	console.log(jwt);
	console.log(user);

	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState([]);
	const [error, setError] = useState();

	const getAllPosts = async () => {
		try {
			setLoading(true);

			const response = await API_PUBLIC({ endpoint: POSTS_ENDPOINT, jwt });

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(response);
				setLoading(false);
				throw new Error(response.message);
			}

			console.log(response);
			setAllPosts(response);
			setLoading(false);
			return response;
		} catch (error) {
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { getAllPosts, allPosts, error, loading };
};
