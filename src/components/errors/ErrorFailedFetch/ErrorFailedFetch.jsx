// Images
import { CRYING } from '../../../utils/images';

// Components
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Styles
import '../_errors.scss';

export const ErrorFailedFetch = () => {
	// md
	return (
		<Box className='error_failed_fetch'>
			<img src={CRYING.img} alt={CRYING.alt} />
			<Title title='lg'>
				Oopss... Parece que hubo un <span>error.</span>
			</Title>
			<Paragraph>
				Revisa tu conexión wifi y si el problema persiste, comunícate con los
				desarrolladores.
			</Paragraph>
		</Box>
	);
};
