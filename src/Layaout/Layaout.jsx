import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Styles
import './_layaout.scss';

// Components
import { Box } from '../components';
import { Header, Footer } from '../components/app';

// Hooks
import { useAuth } from '../hook/useAuth';

const Layaout = () => {
	const { login } = useAuth();

	// TODO: Cambiar a un usuario comun y usar variables de entorno
	useEffect(() => {
		login({ email: 'eduardo@gmail.com', password: 'Qwerty1#!' });
	}, []);

	return (
		<Box className='grid-father'>
			<Box className='grid-son'>
				<Header />
				<Outlet />
				<Footer />
			</Box>
		</Box>
	);
};

export default Layaout;
