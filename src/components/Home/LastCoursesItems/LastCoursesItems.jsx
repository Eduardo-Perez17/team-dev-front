import { Link } from 'react-router-dom';

// Utils
import { POSTS } from '../../../utils/constants/path.constants';

// Components
import { ArticlePostsImage } from '../ArticlePostsImage';
import { Title } from '../../Title';
import { Box } from '../../Box';

const LastCoursesItems = ({ allPosts }) => {
	return (
		<>
			{allPosts &&
				allPosts?.map(post => (
					<Link
						to={`${POSTS}/${post.url}`}
						className='latest_article_post_link'
						key={post.id}
					>
						<Box className='latest_article_courses' key={post.id}>
							<Box
								className={`article_post_content_img course_${post.tags.tag}`}
							>
								<ArticlePostsImage post={post} />
							</Box>
							<Box className='article_post_content'>
								<Title title='md'>{post.title}</Title>
							</Box>
						</Box>
					</Link>
				))}
		</>
	);
};

export default LastCoursesItems;
