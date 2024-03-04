import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Utils
import { HOME, NOT_FOUND, LOGIN, POSTS, CONTENT } from '../utils/constants/path.constants';

// Components
import { Layaout } from '../Layaout';

// Pages
import { Home, NotFound, Login, Posts, Content } from '../pages';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Layaout />}>
					<Route path={HOME} element={<Home />} />
					<Route path={`${POSTS}/:slug`} element={<Posts />} />
					<Route path={CONTENT} element={<Content />} />
					<Route path={LOGIN} element={<Login />} />
					<Route path={NOT_FOUND} element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
