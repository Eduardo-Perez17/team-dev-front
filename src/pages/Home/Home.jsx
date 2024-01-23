// Home
import { LatestArticles } from '../../components/Home';

// Components
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

const Home = () => {
	return (
		<Box className='home'>
			<LatestArticles />
		</Box>
	);
};

export default Home;
