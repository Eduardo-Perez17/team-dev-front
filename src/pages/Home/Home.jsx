// Home
import { LatestArticles } from '../../components/Home';

// Components
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

import { useAuth } from '../../hook/useAuth';
import { useEffect } from 'react';

const Home = () => {
	const { login } = useAuth();

	const loginUser = async () => {
		const user = await login({
			email: 'eduardo@gmail.com',
			password: 'Qwerty1#!',
		});
		console.log(user);
	};

	// TODO: Cambiar a un usuario comun y usar variables de entorno
	useEffect(() => {
		loginUser();
	}, []);

	return (
		<Box className='home'>
			<LatestArticles />
		</Box>
	);
};

export default Home;
