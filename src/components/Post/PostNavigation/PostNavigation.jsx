import { Link } from 'react-router-dom';

// PATH
import { HOME } from '../../../utils/constants/path.constants';

// Icons
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// Components
import { Box } from '../../Box';

// Custom hooks
import { usePostNavigationHook } from '../../../customHooks';
import { useEffect } from 'react';

export const PostNavigation = ({
	postId,
	likesPost,
	disLikesPost,
	savedPostById,
}) => {
	const { buttonLikes, buttonDisLikes } = usePostNavigationHook({
		id: postId,
		likesPost,
		disLikesPost,
	});

	useEffect(()=> {

	}, [])

	return (
		<>
			<Link to={HOME}>
				<Box className='navigation_icon'>
					<HomeOutlinedIcon />
				</Box>
			</Link>

			<Box
				className='navigation_icon'
				onClick={() => savedPostById({ id: postId })}
			>
				{savedPostById ? <BookmarkBorderOutlinedIcon /> : <BookmarkOutlinedIcon /> }
				
			</Box>
			<Box className='navigation_icon' onClick={buttonLikes}>
				{likesPost ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
			</Box>
			<Box className='navigation_icon' onClick={buttonDisLikes}>
				{disLikesPost ? <ThumbDownAltIcon /> : <ThumbDownAltOutlinedIcon />}
			</Box>
		</>
	);
};
