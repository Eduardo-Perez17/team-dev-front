import { useEffect, useState } from 'react';

// Components
import { HeaderSearhTypePosts } from '../HeaderSearhTypePosts';
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

// Icons
import { File, Book } from '../../icons';

// Utils
import { POSTS_TYPE } from '../../../utils/constants';

export const HeaderSearchFound = ({ postsSearch, inputValue }) => {
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
						<Box key={post.id}>
							<HeaderSearhTypePosts post={post}>
								<File
									className='post_search_item_icon'
									width='25'
									height='25'
									fill='#fff'
								/>
							</HeaderSearhTypePosts>
						</Box>
					))}
				</Box>
			</Box>
			<Box className='header_search_found_container'>
				<Paragraph className='header_search_found_title'>Cursos</Paragraph>
				<Box className='header_search_found_container_items'>
					{postCourse?.map(post => (
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
					))}
				</Box>
			</Box>
		</>
	);
};
