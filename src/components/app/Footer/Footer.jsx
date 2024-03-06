import { Link } from 'react-router-dom';

// MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// styles
import './_footer.scss';

// components
import { Box, Anchor, Paragraph } from '../../../components';

// Utils
import { LOGO_DARK } from '../../../utils/images';
import { MENU, HOME, SERVICES, MORE_CONTENT } from '../../../utils/constants';

export const Footer = () => {
	return (
		<Box className='footer'>
			<Box className='footer_item'>
				<Box className='footer_header'>
					<Link to={HOME}>
						<img
							src={LOGO_DARK?.img}
							alt={LOGO_DARK?.alt}
							className='footer_header_icon'
						/>
					</Link>
					<Paragraph>
						Aprende a desarrollar proyectos web con tutoriales y cursos
						enfocados en crear software reales que puedes monetizar, vender o
						usar para tus propios proyectos.
					</Paragraph>

					<Box className='footer_social_netwoork'>
						<Anchor
							href='https://www.linkedin.com/in/eduardo-enrique-p%C3%A9rez-salcedo-792136211/'
							target='_blank'
							rel='noreferrer'
							className='footer_network'
						>
							<GitHubIcon />
						</Anchor>
						<Anchor
							href='https://github.com/Eduardo-Perez17'
							target='_blank'
							rel='noreferrer'
							className='footer_network'
						>
							<LinkedInIcon />
						</Anchor>
						<Anchor
							href='mailto:a.eduardoperez.fp2019@gmail.com'
							target='_blank'
							rel='noreferrer'
							className='footer_network'
						>
							<EmailIcon />
						</Anchor>
					</Box>
				</Box>

				<Box className='footer_route_content'>
					<Box>
						<Paragraph className='footer_route_content_title'>Contenido</Paragraph>
					</Box>
					<Box className='footer_route_content_article'>
						{MENU.map(path => (
							<Link
								to={path?.path}
								key={path?.id}
								className='footer_route_content_link'
							>
								{path?.name}
							</Link>
						))}
					</Box>
				</Box>

				<Box className='footer_route_content'>
					<Box>
						<Paragraph className='footer_route_content_title'>Servicios</Paragraph>
					</Box>
					<Box className='footer_route_content_article'>
						{SERVICES.map(path => (
							<Link
								to={path?.path}
								key={path?.id}
								className='footer_route_content_link'
							>
								{path?.name}
							</Link>
						))}
					</Box>
				</Box>

				<Box className='footer_route_content'>
					<Box>
						<Paragraph className='footer_route_content_title'>
							Más Contenido
						</Paragraph>
					</Box>
					<Box className='footer_route_content_article'>
						{MORE_CONTENT.map(path => (
							<Link
								to={path?.path}
								key={path?.id}
								className='footer_route_content_link'
							>
								{path?.name}
							</Link>
						))}
					</Box>
				</Box>
			</Box>

			<Box className='footer_footer'>
				<Paragraph>© 2024 Team Dev, Inc. All rights reserved.</Paragraph>
			</Box>
		</Box>
	);
};
