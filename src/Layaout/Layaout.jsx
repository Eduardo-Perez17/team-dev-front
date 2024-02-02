import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Styles
import './_layaout.scss';

// Components
import { Header, Footer, Slider } from '../components/app';
import { Box } from '../components';

// Hooks
import { useAuth } from '../hook/useAuth';

const Layaout = () => {
	const { login } = useAuth();

	// TODO: Cambiar a un usuario comun y usar variables de entorno
	useEffect(() => {
		login({ email: 'eduardo@gmail.com', password: 'Qwerty1#!' });
	}, []);

	return (
		<>
			<Box className='grid-father'>
				<Box className='grid-son'>
					<Header />
					<Outlet />
				</Box>
			</Box>
			<Box className='container_slider'>
				<Slider className='slider_one' />
				<Slider className='slider_two' />
				<Slider className='slider_three' />
			</Box>
			<Footer />
		</>
	);
};

export default Layaout;
