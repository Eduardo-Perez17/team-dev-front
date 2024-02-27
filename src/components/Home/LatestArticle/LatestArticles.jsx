import { useEffect, useState } from 'react';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { LatestArticlePost } from '../LatestArticlePost';
import { PaginationArticle } from '../PaginationArticle';
import { Box } from '../../Box';

// Errors
import { ErrorFailedFetch } from '../../errors';

// Loaders
import { Spinning } from '../../Loaders/Spinning';

// Contants
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
			limit: 6,
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
							<LatestArticlePost allPosts={allPosts} />
							{/* <PaginationArticle
								paginationIncrement={paginationIncrement}
								paginationDecrement={paginationDecrement}
								pagePagination={pagePagination}
								allPosts={allPosts}
							/> */}
						</Box>
					) : (
						<ErrorFailedFetch />
					)}
				</>
			)}
		</Box>
	);
};
