import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { HeaderSearhTypePosts } from '../HeaderSearhTypePosts';
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

// Icons
import { File, Book } from '../../icons';

// Utils
import { POSTS_TYPE } from '../../../utils/constants';
import { POSTS } from '../../../utils/constants/path.constants';

export const HeaderSearchFound = ({ postsSearch, onClose }) => {
	const [postNormal, setPostNormal] = useState([]);
	const [postCourse, setPostCourse] = useState([]);

	const filterPosts = ({ type }) => {
		const posts = postsSearch?.data?.data.filter(post => post.type === type);
		return posts;
	};

	const savePostsState = () => {
		const normal = filterPosts({ type: POSTS_TYPE.NORMAL });
		const course = filterPosts({ type: POSTS_TYPE.COURSE });
		setPostNormal(normal);
		setPostCourse(course);
	};

	useEffect(() => {
		savePostsState();
	}, [postsSearch]);

	return (
		<>
			<Box className='header_search_found_container'>
				<Paragraph className='header_search_found_title'>
					Documentación
				</Paragraph>
				<Box className='header_search_found_container_items'>
					{postNormal?.map(post => (
						<React.Fragment key={post.id}>
							<Link
								to={`${POSTS}/${post.url}`}
								className='latest_article_post_link'
								onClick={onClose}
							>
								<Box>
									<HeaderSearhTypePosts post={post}>
										<File
											className='post_search_item_icon'
											width='25'
											height='25'
											fill='#fff'
										/>
									</HeaderSearhTypePosts>
								</Box>
							</Link>
						</React.Fragment>
					))}
				</Box>
			</Box>
			<Box className='header_search_found_container'>
				<Paragraph className='header_search_found_title'>Cursos</Paragraph>
				<Box className='header_search_found_container_items'>
					{postCourse?.map(post => (
						<React.Fragment key={post.id}>
							<Link
								to={`${POSTS}/${post.url}`}
								className='latest_article_post_link'
								onClick={onClose}
							>
								<Box key={post.id}>
									<HeaderSearhTypePosts post={post}>
										<Book
											className='post_search_item_icon'
											width='25'
											height='25'
											fill='#fff'
										/>
									</HeaderSearhTypePosts>
								</Box>
							</Link>
						</React.Fragment>
					))}
				</Box>
			</Box>
		</>
	);
};
