// Home
import { LatestArticles } from '../../components/Home';

// Components
import { LastCourses } from '../../components/Home/LastCourses';
import { HeaderHome } from '../../components/Home/HeaderHome';
import { Title } from '../../components/Title';
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

const Home = () => {
	return (
		<Box className='home'>
			<HeaderHome />
			{/* <Box className='home_content'>
				<LatestArticles />
				<LastCourses />
			</Box> */}
		</Box>
	);
};

export default Home;
