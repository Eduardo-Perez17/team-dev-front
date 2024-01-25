import { useEffect, useState } from 'react';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { LatestArticlePost } from '../LatestArticlePost';
import { PaginationArticle } from '../PaginationArticle';
import { Spinning } from '../../Loaders/Spinning';
import { ErrorFailedFetch } from '../../errors';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Contants
import { TYPE_CONSTANTS } from '../../../utils/constants';

// Styles
import './_latestArticle.scss';

export const LatestArticles = () => {
	const { getAllPosts, allPosts, loading, error } = usePosts();
	const [pagePagination, setPagePagination] = useState(1);

	const paginationIncrement = () => {
		setPagePagination(pagePagination + 1);
	};

	const paginationDecrement = () => {
		setPagePagination(pagePagination - 1);
	};

	useEffect(() => {
		getAllPosts({
			page: pagePagination,
			limit: 7,
			search: TYPE_CONSTANTS.NORMAL,
		});
	}, [pagePagination]);

	return (
		<Box className='latest_article'>
			<Box className='latest_article_title'>
				<Title title='lg'>Últimos artículos</Title>
			</Box>

			{loading ? (
				<Box className='latest_article_spinning'>
					<Spinning />
				</Box>
			) : (
				<>
					{!error ? (
						<Box className='latest_article_posts'>
							<LatestArticlePost allPosts={allPosts} />
							<PaginationArticle
								paginationIncrement={paginationIncrement}
								paginationDecrement={paginationDecrement}
								pagePagination={pagePagination}
								allPosts={allPosts}
							/>
						</Box>
					) : (
						<ErrorFailedFetch />
					)}
				</>
			)}
		</Box>
	);
};
