// Components
import { ImageLoad } from '../../ImageLoad';
import { CardPost } from '../../CardPost';
import { Box } from '../../Box';

export const ContentData = ({ allPosts, allTags, sawTecnology }) => {

	return (
		<Box className='content_data_item'>
			{!sawTecnology ? (
				<Box className='card_post_container'>
					<CardPost allPosts={allPosts} />
				</Box>
			) : (
				<>
					{allTags.map(tags => (
						<Box className='content_data_tags' key={tags?.id}>
							<ImageLoad image={tags?.tagImage} />
							<Box className='content_data_tags_article'>
								<Box className={`tags ${tags?.tag}`}>
									{tags?.tag}
								</Box>
							</Box>
						</Box>
					))}
				</>
			)}
		</Box>
	);
};
