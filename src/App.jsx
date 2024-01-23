// Components
import { RoutesApp } from './RoutesApp';

// Context
import { UserContextProvider } from './context/UserContext';

function App() {
	return (
		<UserContextProvider>
			<RoutesApp />
		</UserContextProvider>
	);
}

export default App;
