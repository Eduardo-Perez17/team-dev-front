import { Outlet } from 'react-router-dom';

// Styles
import './_layaout.scss';

// Components
import { Box } from '../components';
import { Header, Footer } from '../components/app';

const Layaout = () => {
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
