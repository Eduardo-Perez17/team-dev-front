import { useContext, useState } from 'react';

// Services
import { API_PUBLIC } from '../services/api';

// Endpoints
import { POSTS_ENDPOINT, POSTS_URL_ENDPOINT } from '../utils/constants';

// Helpers
import { createQueryString } from '../utils/helpers/createQuery';
import { dateFormat } from '../utils/helpers/dateFormat';

// Context
import ContextUser from '../context/UserContext';

export const usePosts = () => {
	const { jwt } = useContext(ContextUser);

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const [allPosts, setAllPosts] = useState([]);
	const [postsSearch, setPostsSearch] = useState([]);
	const [postByUrl, setPostByUrl] = useState({})

	const getAllPosts = async ({ page = 1, limit = 7, type, search }) => {
		try {
			setLoading(true);

			if (search) {
				const query = createQueryString({ search });
				const response = await API_PUBLIC({
					endpoint: `${POSTS_ENDPOINT}?${query}`,
					jwt,
				});

				if (response?.statusCode && response?.statusCode !== 200) {
					setError(true);
					setLoading(false);
					throw new Error(response.message);
				}

				setPostsSearch(response);
				setError(false);
			}

			const query = createQueryString({ page, limit, type });
			let response = await API_PUBLIC({
				endpoint: `${POSTS_ENDPOINT}?${query}`,
				jwt,
			});

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(true);
				setLoading(false);
				throw new Error(response.message);
			}

			response = response.data.data
			const data = await dateFormat({ response: response })

			setAllPosts(data);
			setLoading(false);
			return response;
		} catch (error) {
			setError(true);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const getPostByUrl = async ({ url }) => {
		try {
			const response = await API_PUBLIC({
				endpoint: `${POSTS_ENDPOINT}${POSTS_URL_ENDPOINT}/${url}`,
				jwt,
			});

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(true);
				setLoading(false);
				throw new Error(response.message);
			}

			console.log(response)
			setPostByUrl(response)
			setLoading(true);
		} catch (error) {
			setError(true);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { postsSearch, getAllPosts, getPostByUrl, allPosts, postByUrl, error, loading };
};
