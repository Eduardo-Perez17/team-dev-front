import { useEffect } from 'react';

// Hooks
import { usePosts } from '../../../hook/usePosts';

// Components
import { LastCoursesItems } from '../LastCoursesItems';
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

// Errors
import { ErrorFailedFetchCourse } from '../../errors';

// Loaders
import { Spinning } from '../../Loaders/Spinning';

// Utils
import { POSTS_TYPE } from '../../../utils/constants';

// Styles
import './_lastCourses.scss';

const LastCourses = () => {
	const { getAllPosts, allPosts, loading, error } = usePosts();

	useEffect(() => {
		getAllPosts({
			page: 1,
			limit: 3,
			type: POSTS_TYPE.COURSE,
		});
	}, []);

	return (
		<Box className='last_courses'>
			{loading ? (
				<Box className='latest_article_spinning'>
					<Spinning />
				</Box>
			) : (
				<>
					{!error ? (
						<Box className='last_courses_posts'>
							<LastCoursesItems allPosts={allPosts} />
							<Paragraph className='last_courses_posts_more paragraph_blue'>
								ver más cursos
							</Paragraph>
						</Box>
					) : (
						<ErrorFailedFetchCourse />
					)}
				</>
			)}
		</Box>
	);
};

export default LastCourses;
