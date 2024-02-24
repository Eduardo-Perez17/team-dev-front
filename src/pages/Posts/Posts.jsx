import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import { usePosts } from '../../hook/usePosts';

// Components
import {
	PostUrlHeader,
	PostUrlContent,
	PostNavigation,
} from '../../components/Post';
import { Box } from '../../components/Box';

// Errors and loaders
import { ErrorFailedFetchPostUrl } from '../../components/errors';
import { Spinning } from '../../components/Loaders';

// Styles
import './_posts.scss';

const Posts = () => {
	const { slug } = useParams();
	const { getPostByUrl, postByUrl, savedPostById, error, loading } = usePosts();

	useEffect(() => {
		getPostByUrl({ url: slug });
	}, []);

	return (
		<Box className='post_url'>
			<>
				{loading ? (
					<Box className='post_url_loader'>
						<Spinning />
					</Box>
				) : (
					<>
						{!error ? (
							<>
								<PostUrlHeader postByUrl={postByUrl} />
								<PostUrlContent postByUrl={postByUrl} />
								<Box className='navigation'>
									<PostNavigation
										postId={postByUrl?.data?.id}
										likesPost={postByUrl?.data?.likes}
										disLikesPost={postByUrl?.data?.dislikes}
										savedPostById={savedPostById}
									/>
								</Box>
							</>
						) : (
							<ErrorFailedFetchPostUrl />
						)}
					</>
				)}
			</>
		</Box>
	);
};

export default Posts;
