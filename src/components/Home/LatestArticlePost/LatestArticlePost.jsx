import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { TruncatedTexts } from '../../TruncatedTexts';
import { ArticlePostsImage } from '../ArticlePostsImage';
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Utils
import { POSTS } from '../../../utils/constants/path.constants';

// TODO: Sacar el ArticlePostsImage en un componente para poder usarlo en todas las imaegnes

const LatestArticlePost = ({ allPosts }) => {
	return (
		<>
			{allPosts &&
				allPosts?.map((post, index) => (
					<React.Fragment key={post.id}>
						<Link
							to={`${POSTS}/${post.url}`}
							className='latest_article_post_link'
						>
							<Box className='latest_article_post'>
								<ArticlePostsImage post={post} />
								<Box className='latest_article_post_content'>
									<Title title='md'>{post.title}</Title>
									<Box className='latest_article_post_content_date_tag'>
										<TruncatedTexts posts={allPosts} index={index} />
										<Box className='latest_article_post_content_date_tag_info'>
											<Paragraph
												className={`latest_article_post_content tags ${post?.tags?.tag}`}
											>
												{post?.tags?.tag}
											</Paragraph>
											<Paragraph>{post.updatedAt}</Paragraph>
										</Box>
									</Box>
								</Box>
							</Box>
						</Link>
					</React.Fragment>
				))}
		</>
	);
};

export default LatestArticlePost;
