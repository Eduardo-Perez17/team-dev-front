import { useState } from 'react';

// Components
import { Paragraph } from '../../Paragraph';
import { Search } from '../../icons';
import { Input } from '../../Input';
import { Title } from '../../Title';
import { Box } from '../../Box';

import './_headerHome.scss';
import { SearchHeader } from '../../app/SearchHeader';

export const HeaderHome = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box className='header_home'>
				<Title className='header_home_title'>
					<span>Estás un paso más cerca de </span>
					<span>tu objetivo profesional</span>
				</Title>

				<Paragraph className='header_home_paragraph'>
					Aprende con cursos, rutas de especialización y documentación sobre tu
					tecnología favorita.
				</Paragraph>

				<Box className='header_home_input'>
					<label htmlFor='text'>
						¿Qué quieres aprender?
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
					</label>
				</Box>
			</Box>
			<SearchHeader handleClose={handleClose} open={open} />
		</>
	);
};
