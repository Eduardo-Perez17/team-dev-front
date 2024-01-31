import React, { useCallback, useState } from 'react';

// Mui
import { styled, css } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';

// Styles
import './_modalHeaderSearch.scss';

// Hooks
import { usePosts } from '../../../hook/usePosts';
import { useDebounce } from '../../../hook/useDebounce';

// Components
import { ErrorFailedFetchSearch } from '../../errors';
import { Paragraph } from '../../Paragraph';
import { Dots } from '../../Loaders';
import { Input } from '../../Input';
import { Box } from '../../Box';


// Icons and images
import { Search } from '../../icons/Search/Search';
import { PENGUIN } from '../../../utils/images';

export function SearchHeader({ handleClose, open }) {
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

	console.log(postsSearch);

	// TODO: validar que si no encontro nada, que aparezca el mismo pinguino y el mensaje de not found

	return (
		<div className='header_search_posts'>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: StyledBackdrop }}
				className='modal'
			>
				<Fade in={open}>
					<ModalContent sx={style}>
						<Box className='main_modal_input'>
							<Search fill='#09f' />
							<Input
								type='text'
								placeholder='Buscar...'
								className='modal_input'
								id='search'
								onChange={e => handleChangeSearch({ search: e.target.value })}
								value={inputValue}
							/>
						</Box>

						<Box className='search_content'>
							{loading ? (
								<Box className='loader_search'>
									<Dots />
								</Box>
							) : (
								<>
									{!error ? (
										<>
											{inputValue === '' ? (
												<Box className='input_value_clear'>
													<Paragraph>¿Que estás buscando?</Paragraph>
													<img src={PENGUIN.img} alt={PENGUIN.alt} />
												</Box>
											) : (
												<Box className='header_search'>
													<></>
												</Box>
											)}
										</>
									) : (
										<ErrorFailedFetchSearch />
									)}
								</>
							)}
						</Box>
					</ModalContent>
				</Fade>
			</Modal>
		</div>
	);
}

const Backdrop = React.forwardRef((props, ref) => {
	const { open, ...other } = props;
	return (
		<Fade in={open}>
			<div ref={ref} {...other} />
		</Fade>
	);
});

Backdrop.propTypes = {
	open: PropTypes.bool,
};

const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
};

const StyledBackdrop = styled(Backdrop)`
	z-index: -1;
	position: fixed;
	inset: 0;
	background-color: rgb(0 0 0 / 0.5);
	-webkit-tap-highlight-color: transparent;
`;

const style = {
	position: 'absolute',
	top: '35%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 530,
};

const ModalContent = styled('div')(
	({ theme }) => css`
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#20252c'};
		box-shadow: 0 4px 12px
			${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
		border-radius: 5px;
		width: 100%;
	`,
);
