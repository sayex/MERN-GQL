import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutation';
import { useState } from 'react';
import Auth from '../utils/auth';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [login, { error }] = useMutation(LOGIN_USER);

	const submitFormHandler = async () => {
		try {
			const { data } = await login({
				variables: { email, password }
			});
			Auth.login(data.login.token);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<h1>Login</h1>
			<input onChange={(e) => setEmail(e.target.value)} type="text" />
			<input onChange={(e) => setPassword(e.target.value)} type="password" />
			<button onClick={submitFormHandler}>Login</button>
		</div>
	);
};

export default Login;
