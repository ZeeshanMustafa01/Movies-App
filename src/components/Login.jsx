import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { getCurrentUser, login } from '../services/authService';
import { Redirect } from 'react-router-dom';

class Login extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {},
		overlay: false,
	};

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password'),
	};

	doSubmit = async () => {
		const { username, password } = this.state.data;
		try {
			await login(username, password);
			const { state } = this.props.location;
			window.location = state ? state.from.pathname : '/';
		} catch (err) {
			if (err.response && err.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.username = err.response.data;
				this.setState({ errors });
			}
		}
		console.log('Submitted');
	};

	render() {
		if (getCurrentUser()) return <Redirect to='/' />;

		return (
			<div className='input-container'>
				<p className='info'>For Login please register First</p>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username', 'text', 'autoFocus')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default Login;
