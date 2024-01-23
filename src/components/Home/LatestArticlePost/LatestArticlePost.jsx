// Images
import { MINI_DEV } from '../../../utils/images';

// Components
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

const LatestArticlePost = ({ allPosts }) => {
	console.log(allPosts);

	return (
		<>
			{allPosts &&
				allPosts?.map(post => (
					<Box className='latest_article_post' key={post.id}>
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
						<Box className='latest_article_post_content'>
							<Title title='md'>{post.title}</Title>
							<Box className='latest_article_post_content_date_tag'>
								<Paragraph
									className={`latest_article_post_content tags ${post?.tags?.tag}`}
								>
									{post?.tags?.tag}
								</Paragraph>
								<Paragraph>{post.updatedAt}</Paragraph>
							</Box>
						</Box>
					</Box>
				))}
		</>
	);
};

export default LatestArticlePost;
