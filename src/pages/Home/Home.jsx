// Home
import { LatestArticles } from '../../components/Home';

// Components
import { LastCourses } from '../../components/Home/LastCourses';
import { Title } from '../../components/Title';
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

const Home = () => {
	return (
		<Box className='home'>
			<Box className='home_title'>
				<Title title='lg'>Últimos artículos</Title>
				<Title title='lg'>Últimos cursos</Title>
			</Box>
			<Box className='home_content'>
				<LatestArticles />
				<LastCourses />
			</Box>
		</Box>
	);
};

export default Home;
