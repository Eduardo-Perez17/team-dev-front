import React from 'react';
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
					<React.Fragment key={post.id}>
						<Link to={`${POSTS}/${post.url}`} className='latest_article_post_link'>
							<Box
								className={`latest_article_courses course_${post.tags.tag}`}
								key={post.id}
							>
								<ArticlePostsImage post={post} />
								<Box className='article_post_content'>
									<Title title='md'>{post.title}</Title>
								</Box>
							</Box>
						</Link>
					</React.Fragment>
				))}
		</>
	);
};

export default LastCoursesItems;
