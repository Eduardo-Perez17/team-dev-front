// Components
import { ArticlePostsImage } from '../ArticlePostsImage';
import { Box } from '../../Box';
import { Title } from '../../Title';

const LastCoursesItems = ({ allPosts }) => {
	console.log(allPosts);

	return (
		<>
			{allPosts &&
				allPosts?.map(post => (
					<Box
						className={`latest_article_courses course_${post.tags.tag}`}
						key={post.id}
					>
						<ArticlePostsImage />
						<Box className='article_post_content'>
							<Title title='md'>{post.title}</Title>
						</Box>
					</Box>
				))}
		</>
	);
};

export default LastCoursesItems;
