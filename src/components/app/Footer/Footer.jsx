// styles
import './_footer.scss';

// components
import { Box, Anchor } from '../../../components';

export const Footer = () => {
	return (
		<>
			<Box className='footer'>
				<Box className='footer_anchor'>
					<Anchor
						href='https://www.linkedin.com/in/eduardo-enrique-p%C3%A9rez-salcedo-792136211/'
						target='_blank'
						rel='noreferrer'
						className='footer_network'
					>
						GitHub
					</Anchor>
					<Anchor
						href='https://github.com/Eduardo-Perez17'
						target='_blank'
						rel='noreferrer'
						className='footer_network'
					>
						Linkedin
					</Anchor>
					<Anchor
						href='mailto:a.eduardoperez.fp2019@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='footer_network'
					>
						Gmail
					</Anchor>
				</Box>

				<Box className='footer-credits'>
					<p>
						Desarrollado por <strong>Team Dev</strong> y diseño basado en{' '}
						<strong>
							<Anchor
								href='https://midu.dev'
								target='_blank'
								rel='noreferrer'
								className='footer_network'
							>
								midu.dev
							</Anchor>
						</strong>
					</p>
				</Box>
			</Box>
		</>
	);
};
