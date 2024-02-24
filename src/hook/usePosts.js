import { useContext, useState } from 'react';

// Services
import { API_PUBLIC } from '../services/api';

// Endpoints
import { POSTS_ENDPOINT, POSTS_URL_ENDPOINT, POSTS_SAVED_ENDPOINT } from '../utils/constants';

// Helpers
import { createQueryString } from '../utils/helpers/createQuery';
import { dateFormat } from '../utils/helpers/dateFormat';

// Context
import ContextUser from '../context/UserContext';

export const usePosts = () => {
	const { jwt } = useContext(ContextUser);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const [postsSearch, setPostsSearch] = useState([]);
	const [postByUrl, setPostByUrl] = useState({});
	const [allPosts, setAllPosts] = useState([]);
	const [post, setPost] = useState({});

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
				return true
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

			response = response.data.data;
			const data = await dateFormat({ response: response });

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

			setPostByUrl(response)
			setLoading(true);
			return true
		} catch (error) {
			setError(true);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const editPostById = async ({ id, body }) => {
		try {
			setLoading(true);

			const response = await API_PUBLIC({
				endpoint: `${POSTS_ENDPOINT}/${id}`,
				method: 'PATCH',
				body: body,
				jwt,
			});

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(true);
				setLoading(false);
				throw new Error(response.message);
			}

			setLoading(false);
			setPost(response);
			return true
		} catch (error) {
			setLoading(false);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const savedPostById = async ({ id }) => {
		try {
			setLoading(true);

			const response = await API_PUBLIC({
				endpoint: `${POSTS_ENDPOINT}${POSTS_SAVED_ENDPOINT}/${id}`,
				jwt,
			});

			if (response?.statusCode && response?.statusCode !== 200) {
				setError(true);
				setLoading(false);
				throw new Error(response.message);
			}

			setLoading(false);
			return true
		} catch (error) {
			setLoading(false);
			throw new Error(error.message);
		} finally {
			setLoading(false);
		}
	}

	return {
		postsSearch,
		getAllPosts,
		getPostByUrl,
		editPostById,
		savedPostById,
		allPosts,
		post,
		postByUrl,
		error,
		loading,
	};
};
