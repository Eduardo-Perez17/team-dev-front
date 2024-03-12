// Components
import { PaginationArticle } from '../../Home/PaginationArticle';
import { ImageLoad } from '../../ImageLoad';
import { CardPost } from '../../CardPost';
import { Box } from '../../Box';

export const ContentData = ({
	allPosts,
	allTags,
	sawTecnology,
	paginationIncrement,
	paginationDecrement,
	pagePagination,
}) => {
	return (
		<Box className='content_data_item'>
			{!sawTecnology ? (
				<>
					<Box className='card_post_container'>
						<CardPost allPosts={allPosts} />
					</Box>
					<PaginationArticle
						paginationIncrement={paginationIncrement}
						paginationDecrement={paginationDecrement}
						pagePagination={pagePagination}
						allPosts={allPosts}
					/>
				</>
			) : (
				<>
					{allTags.map(tags => (
						<Box className='content_data_tags' key={tags?.id}>
							<ImageLoad image={tags?.tagImage} />
							<Box className='content_data_tags_article'>
								<Box className={`tags ${tags?.tag}`}>{tags?.tag}</Box>
							</Box>
						</Box>
					))}
				</>
			)}
		</Box>
	);
};
