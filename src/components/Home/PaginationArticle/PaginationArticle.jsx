// Icons
import { RightArrow } from '../../icons/RightArrow';
import { LeftArrow } from '../../icons/LeftArrow';

// Components
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

const PaginationArticle = ({
	paginationIncrement,
	paginationDecrement,
	pagePagination,
	allPosts,
}) => {
	return (
		<Box className='pagination'>
			{pagePagination > 1 && (
				<Box className='latest_previous_article' onClick={paginationDecrement}>
					<LeftArrow fill='#09f' className='left_arrow' />
					<Paragraph>artículos más recientes</Paragraph>
				</Box>
			)}
			{allPosts.length >= 7 && (
				<Box className='latest_previous_article' onClick={paginationIncrement}>
					<Paragraph>artículos anteriores</Paragraph>
					<RightArrow fill='#09f' className='right_arrow' />
				</Box>
			)}
		</Box>
	);
};

export default PaginationArticle;
