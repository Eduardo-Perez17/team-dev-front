// Images
import { SWEAT } from '../../../utils/images';

// Components
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

const ErrorFailedFetchCourse = () => {
	return (
		<Box className='error_failed_fetch'>
			<img src={SWEAT.img} alt={SWEAT.alt} />
			<Title title='lg'>
				Aaay... ¡Un <span>error!</span>
			</Title>
			<Paragraph>
				Revisa tu conexión wifi y si el problema persiste, comunícate con los
				desarrolladores.
			</Paragraph>
		</Box>
	);
};

export default ErrorFailedFetchCourse;
