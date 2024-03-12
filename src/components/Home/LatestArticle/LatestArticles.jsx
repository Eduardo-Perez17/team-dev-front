import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { CardPost } from '../../CardPost';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Errors
import { ErrorFailedFetch } from '../../errors';

// Loaders
import { Spinning } from '../../Loaders/Spinning';

// Contants
import { CONTENT } from '../../../utils/constants/path.constants';
import { POSTS_TYPE } from '../../../utils/constants';

// Styles
import './_latestArticle.scss';

export const LatestArticles = () => {
	const { getAllPosts, allPosts, loading, error } = usePosts();
	// const [pagePagination, setPagePagination] = useState(1);

	// const paginationIncrement = () => {
	// 	setPagePagination(pagePagination + 1);
	// };

	// const paginationDecrement = () => {
	// 	setPagePagination(pagePagination - 1);
	// };

	useEffect(() => {
		getAllPosts({
			limit: 8,
			type: POSTS_TYPE.NORMAL,
		});
	}, []);

	return (
		<Box className='latest_article'>
			{loading ? (
				<Box className='latest_article_spinning'>
					<Spinning />
				</Box>
			) : (
				<>
					{!error ? (
						<Box className='latest_article_posts'>
							<Box className='latest_article_posts_header'>
								<Title title='md'>Documentaciones</Title>
								<Link to={CONTENT}>Más contenido +</Link>
							</Box>
							<Box className='card_post_container'>
								<CardPost allPosts={allPosts} completeRoute={true} />
								{/* <PaginationArticle
								paginationIncrement={paginationIncrement}
								paginationDecrement={paginationDecrement}
								pagePagination={pagePagination}
								allPosts={allPosts}
							/> */}
							</Box>
						</Box>
					) : (
						<ErrorFailedFetch />
					)}
				</>
			)}
		</Box>
	);
};
