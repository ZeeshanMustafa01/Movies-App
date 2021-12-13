import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { register } from '../services/userService';
import { loginWithJwt } from '../services/authService';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '', name: '' },
		errors: {},
	};

	schema = {
		username: Joi.string().required().email().label('Username'),
		password: Joi.string().required().min(5).label('Password'),
		name: Joi.string().required().label('Name'),
	};

	doSubmit = async () => {
		try {
			const response = await register(this.state.data);
			loginWithJwt(response.headers['x-auth-token']);
			window.location = '/';
		} catch (err) {
			if (err.response && err.response === 400) {
				const errors = { ...this.state.errors };
				errors.username = err.response.data;
				this.setState({ errors });
			}
		}
		console.log('Submitted');
	};

	render() {
		return (
			<div className='input-container'>
				<h1 className='info'>Register to Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username', 'text', 'autoFocus')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderInput('name', 'Name')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
