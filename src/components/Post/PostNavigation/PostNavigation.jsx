import { Link } from 'react-router-dom';

// PATH
import { HOME } from '../../../utils/constants/path.constants'

// Icons
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// Components
import { Box } from '../../Box';

export const PostNavigation = () => {
	return (
		<>
			<Link to={HOME}>
				<Box className='navigation_icon'>
					<HomeOutlinedIcon />
				</Box>
			</Link>

			<Box className='navigation_icon'>
				<FavoriteBorderIcon />
			</Box>
			<Box className='navigation_icon'>
				<ThumbUpOutlinedIcon />
			</Box>
			<Box className='navigation_icon'>
				<ThumbDownAltOutlinedIcon />
			</Box>
		</>
	);
};
