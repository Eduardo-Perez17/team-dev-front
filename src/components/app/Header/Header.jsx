import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { usePosts } from '../../../hook/usePosts';
import { useDebounce } from '../../../hook/useDebounce';

// Path
import { HOME } from '../../../utils/constants';

// styles
import './header.scss';

// images
import { LOGO_DARK, SUN } from '../../../utils/images';

// components
import { SearchHeader } from '../SearchHeader';
import { Input, Box } from '../../';

// icons
import { Search, Menu } from '../../icons';

export const Header = () => {
	const { getAllPosts, loading, error, postsSearch } = usePosts();

	const [inputValue, setInputValue] = useState('');

	const handleChangeSearch = ({ search }) => {
		setInputValue(search);
		searchDebounce({ search });
	};

	const searchDebounce = useCallback(
		useDebounce(({ search }) => {
			getAllPosts({ search });
		}, 500),
		[],
	);

	return (
		<Box className='header'>
			<Link to={HOME}>
				<Box className='header_logo'>
					<img src={LOGO_DARK.img} alt={LOGO_DARK.alt} />
				</Box>
			</Link>
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
							width='25'
							height='25'
						/>
						<Input
							type='text'
							placeholder='Buscar...'
							className='header_search_input_item'
							onChange={e => handleChangeSearch({ search: e.target.value })}
							value={inputValue}
						/>

						<SearchHeader
							loading={loading}
							error={error}
							postsSearch={postsSearch}
						/>
					</Box>

					<Box className='header_theme_network'>
						<img src={SUN.img} alt={SUN.alt} width={35} height={35} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
