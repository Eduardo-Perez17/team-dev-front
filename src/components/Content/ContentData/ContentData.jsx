// Components
import { Box } from '../../Box';

export const ContentData = ({ allPosts, allTags, sawTecnology }) => {

  console.log(allTags)

	return (
		<Box className='content_data_item'>
			{!sawTecnology ? (
				<>
					{allPosts.map(post => (
						<h1 key={post?.id}>{post?.title}</h1>
					))}
				</>
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
