// styles
import './footer.css';

// components
import { Box, Anchor } from '@/components';

export const Footer = () => {
	return (
		<Box className='grid_father'>
			<Box className='grid_son'>
				<Box className='footer'>
					<Anchor href='https://www.linkedin.com/in/eduardo-enrique-p%C3%A9rez-salcedo-792136211/' target='_blank' rel="noreferrer" className='footer_network'>GitHub</Anchor>
					<Anchor href='https://github.com/Eduardo-Perez17' target='_blank' rel="noreferrer" className='footer_network'>Linkedin</Anchor>
					<Anchor href="mailto:a.eduardoperez.fp2019@gmail.com" target='_blank' rel="noreferrer" className='footer_network'>Gmail</Anchor>
				</Box>
			</Box>
		</Box>
	);
};
