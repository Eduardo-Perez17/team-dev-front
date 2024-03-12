// Components
import { Box } from '../../Box';
import { CardPost } from '../../CardPost';

export const ContentData = ({ allPosts, allTags, sawTecnology }) => {
	console.log({ allPosts });

	return (
		<Box className='content_data_item'>
			{!sawTecnology ? (
				<CardPost allPosts={allPosts} />
			) : (
				<>
					{allTags.map(tags => (
						<h1 key={tags?.id}>{tags?.tag}</h1>
					))}
				</>
			)}
		</Box>
	);
};
