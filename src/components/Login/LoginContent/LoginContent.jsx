// Components
import { Box, Title, Paragraph } from '../../../components';

const LoginContent = () => {
	return (
		<Box className='login_content'>
			<Title title='lg' className='login_content_title'>
				¡Hola dev!
			</Title>
			<Paragraph className='login_content_paragraph'>
				¿Eres parte del
				<strong>
					<span> team dev</span>
				</strong>
				? ¿Que esperas? Inicia sesión y comencemos.
			</Paragraph>
		</Box>
	);
};

export default LoginContent;
