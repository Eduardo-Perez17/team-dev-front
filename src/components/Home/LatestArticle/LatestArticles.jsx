import { useEffect } from 'react';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { Box } from '../../../components/Box';

// Styles
import './_latestArticle.scss';

export const LatestArticles = () => {
	const { getAllPosts, allPosts } = usePosts();

	useEffect(() => {
		getAllPosts();
		console.log(allPosts);
	}, []);

	return <Box>LatestArticles</Box>;
};
