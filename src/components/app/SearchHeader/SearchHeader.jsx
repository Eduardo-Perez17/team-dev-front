import { Box } from '../../Box';

// Loaders
import { Dots } from '../../Loaders/Dots';

// Errors
import { ErrorFailedFetchSearch } from '../../errors';

export const SearchHeader = ({ loading, postsSearch, error }) => {
	console.log(postsSearch);

	return (
		<Box className='search_header_pop_up'>
			{loading ? (
				<Box className='latest_article_spinning'>
					<Dots />
				</Box>
			) : (
				<>
					{!error ? (
						<Box className='latest_article_posts'>
							{/* {postsSearch?.data?.data.map(post => (
								<Box key={post.id}>{post.title}</Box>
							))} */}
						</Box>
					) : (
						<ErrorFailedFetchSearch />
					)}
				</>
			)}
		</Box>
	);
};
