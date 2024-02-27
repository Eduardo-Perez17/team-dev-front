// Components
import { LatestArticles } from '../../components/Home/LatestArticle'
import { HomeAnalytics } from '../../components/Home/HomeAnalytics';
import { HeaderHome } from '../../components/Home/HeaderHome';
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

const Home = () => {
	return (
		<Box className='home'>
			<HeaderHome />
			<Box className='article_home'>
				<HomeAnalytics />
				<LatestArticles />
			</Box>
		</Box>
	);
};

export default Home;

// {/* <Box className='home_content'>
// 				<LatestArticles />
// 				<LastCourses />
// 			</Box> */}
