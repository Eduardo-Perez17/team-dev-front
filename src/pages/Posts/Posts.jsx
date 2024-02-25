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

import toast, { Toaster } from 'react-hot-toast';

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
	}, [slug]);

	const notify = () => toast.success('Acción satisfactoria');

	return (
		<>
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
											notify={notify}
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

			<Toaster position='top-left' />
		</>
	);
};

export default Posts;
