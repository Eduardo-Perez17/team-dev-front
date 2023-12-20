import Image from 'next/image';

// styles
import './header.css';

// images
import { LOGO_DARK, SUN } from '@/utils/images';

// components
import { Input, Box } from '@/components';

// icons
import { Search, Menu } from '@/components/icons';

export const Header = () => {
	return (
		<Box className='grid_father'>
			<Box className='grid_son'>
				<Box className='header'>
					<Box className='header_logo'>
						<Image
							src={LOGO_DARK.img}
							alt={LOGO_DARK.alt}
							width={120}
							height={120}
						/>
					</Box>
					<Box className='header_search'>
						<Menu
							className='header_search_icon_menu'
							width='50'
							height='50'
							fill='#fff'
						/>

						<Box className='header_search_desktop'>
							<Box className='header_search_input'>
								<Search
									className='header_search_input_icon'
									width='20'
									height='20'
								/>
								<Input
									type='text'
									placeholder='Buscar...'
									className='header_search_input_item'
								/>
							</Box>

							<Box className='header_theme_network'>
								<Image src={SUN.img} alt={SUN.alt} width={35} height={35} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
