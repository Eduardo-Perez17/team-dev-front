// Components
import { RightArrow } from '../../icons/RightArrow';
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

const PreviousArticle = () => {
	return (
		<Box className='latest_previous_article'>
			<Paragraph>artículos anteriores</Paragraph>
			<RightArrow fill='#09f' className='right_arrow' />
		</Box>
	);
};

export default PreviousArticle;
