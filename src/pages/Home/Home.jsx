// Components
import { LatestArticles } from '../../components/Home/LatestArticle';
import { HomeAnalytics } from '../../components/Home/HomeAnalytics';
import { HeaderHome } from '../../components/Home/HeaderHome';
import { Slider } from '../../components/app';
import { Box } from '../../components/Box';

// Styles
import './_home.scss';

const Home = () => {
	return (
		<Box className='home'>
			<HeaderHome />
				<Box className='container_slider'>
					<Slider className='slider_one' />
					<Slider className='slider_two' />
					<Slider className='slider_three' />
				</Box>
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
