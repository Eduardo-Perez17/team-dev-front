// Components
import { Box, Input, Button } from '../../';

const LoginForm = () => {
	return (
		<Box className='login_form'>
			<form className='form'>
				<label htmlFor='email'>
					Usuario
					<Input
						type='email'
						placeholder='dev@gmail.com'
						className='input'
						id='email'
						name='email'
					/>
				</label>

				<label htmlFor='password'>
					Contraseña
					<Input
						type='password'
						placeholder='contraseña'
						className='input'
						id='password'
						name='passoword'
					/>
				</label>

				<Button type='submit' className='button'>
					Iniciar sesion
				</Button>
			</form>
		</Box>
	);
};

export default LoginForm;
