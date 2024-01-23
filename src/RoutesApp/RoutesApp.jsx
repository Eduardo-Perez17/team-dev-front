import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Utils
import { HOME, NOT_FOUND, LOGIN } from '../utils/constants/path.constants';

// Components
import { Layaout } from '../Layaout';

// Pages
import { Home, NotFound, Login } from '../pages';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Layaout />}>
					<Route path={HOME} element={<Home />} />
					<Route path={LOGIN} element={<Login />} />
					<Route path={NOT_FOUND} element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
