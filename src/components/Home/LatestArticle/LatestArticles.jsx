import { useEffect } from 'react';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { LatestArticlePost } from '../LatestArticlePost';
import { PreviousArticle } from '../PreviousArticle';
import { Spinning } from '../../Loaders/Spinning';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Styles
import './_latestArticle.scss';

export const LatestArticles = () => {
	const { getAllPosts, allPosts, loading } = usePosts();

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<Box className='latest_article'>
			<Box className='latest_article_title'>
				<Title title='md'>Últimos artículos</Title>
			</Box>

			{loading ? (
				<Box className='latest_article_spinning'>
					<Spinning />
				</Box>
			) : (
				<Box className='latest_article_posts'>
					<LatestArticlePost allPosts={allPosts} />
					<PreviousArticle />
				</Box>
			)}
		</Box>
	);
};
