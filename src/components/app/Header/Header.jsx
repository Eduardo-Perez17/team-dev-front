import { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

// Path
import { HOME } from '../../../utils/constants';

// styles
import './header.scss';

// images
import { LOGO_DARK } from '../../../utils/images';

// components
import { SearchHeader } from '../SearchHeader';
import { Input, Box } from '../../';

// icons
import { Search, Menu } from '../../icons';

export const Header = () => {
	const [open, setOpen] = useState(false);
	const [menuMobile, setMenuMobile] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleMenuMobile = () => setMenuMobile(!menuMobile);

	return (
		<>
			<Box className='header'>
				<Link to={HOME}>
					<Box className='header_logo'>
						<img src={LOGO_DARK.img} alt={LOGO_DARK.alt} />
					</Box>
				</Link>
				<Box className={menuMobile ? 'header_menu_mobile' : 'header_search'}>
					{menuMobile ? (
						<Box className='header_menu_mobile_item'>
							<Box onClick={handleMenuMobile} className='header_menu_mobile_item_input'>
								<CloseIcon />
								<Box className='header_search_input' onClick={handleOpen}>
									<Search
										className='header_search_input_icon'
										width='25'
										height='25'
									/>
									<Input
										type='text'
										placeholder='Buscar...'
										className='header_search_input_item'
									/>
								</Box>
							</Box>
						</Box>
					) : (
						<>
							<Menu
								className='header_search_icon_menu'
								width='50'
								height='50'
								fill='#fff'
								onClick={handleMenuMobile}
							/>

							<Box className='header_search_desktop'>
								<Box className='header_search_input' onClick={handleOpen}>
									<Search
										className='header_search_input_icon'
										width='25'
										height='25'
									/>
									<Input
										type='text'
										placeholder='Buscar...'
										className='header_search_input_item'
									/>
								</Box>

								<Box className='header_network'>
									{/* <img src={SUN.img} alt={SUN.alt} width={35} height={35} /> */}
									<a
										href='https://github.com/Eduardo-Perez17'
										target='_blank'
										rel='noreferrer'
									>
										<GitHubIcon />
									</a>
								</Box>
							</Box>
						</>
					)}
				</Box>
			</Box>

			<SearchHeader handleClose={handleClose} open={open} />
		</>
	);
};
