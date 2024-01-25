// Images
import { MINI_DEV } from '../../../utils/images';

import { Box } from '../../Box';

const ArticlePostsImage = ({ post }) => {
	return (
		<Box className='latest_article_post_image'>
			{post?.image?.url ? (
				<img
					src={post?.image?.url}
					alt={post?.image?.url}
					className='latest_article_post_image_item'
				/>
			) : (
				<img
					src={MINI_DEV.img}
					alt={MINI_DEV.alt}
					className='latest_article_post_image_item latest_article_post_image_item_default'
				/>
			)}
		</Box>
	);
};

export default ArticlePostsImage;
