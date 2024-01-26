// Images
import { SLEEPING } from '../../../utils/images';

// Components
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

export const ErrorFailedFetchSearch = () => {
	return (
		<Box className='error_search'>
			<img src={SLEEPING.img} alt={SLEEPING.alt} />
			<Paragraph>
				¡Hubo un <span>error</span>! Revisa tu conexión wifi y si el problema
				persiste, comunícate con los desarrolladores.
			</Paragraph>
		</Box>
	);
};
