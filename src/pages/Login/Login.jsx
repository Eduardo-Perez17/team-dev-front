// Styles
import './_login.scss';

// components
import { Box } from '../../components/Box';

// components App
import { LoginContent, LoginForm } from '../../components/Login';

const Login = () => {
	return (
		<Box className='login'>
			<LoginContent />
			<LoginForm />
		</Box>
	);
};

export default Login;
