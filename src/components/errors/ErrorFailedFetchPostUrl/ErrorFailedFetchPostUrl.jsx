// Images
import { AMAZED } from '../../../utils/images';

// Components
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Styles
import '../_errors.scss';

export const ErrorFailedFetchPostUrl = () => {
	return (
		<Box className='error_failed_fetch'>
			<img src={AMAZED.img} alt={AMAZED.alt} />
			<Title title='lg'>
				No puede ser.
			</Title>
			<Paragraph>
				Revisa tu conexión wifi y si el problema persiste, comunícate con los
				desarrolladores.
			</Paragraph>
		</Box>
	);
};


