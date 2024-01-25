// Components
import { ArticlePostsImage } from '../ArticlePostsImage';
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

const LatestArticlePost = ({ allPosts }) => {
	return (
		<>
			{allPosts &&
				allPosts?.map(post => (
					<Box className='latest_article_post' key={post.id}>
						<ArticlePostsImage post={post} />
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
