import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Customers from '../src/components/Customers';
import Price from '../src/components/Price';
import Login from '../src/components/Login';
import Logout from './components/Logout';
import Register from '../src/components/Register';
import MovieForm from './components/MovieForm';
import NotFound from './components/NotFound';
import LoginContext from './utils/LoginContext';
import { getCurrentUser } from './services/authService';
import ProtectedRoute from './components/common/ProtectedRoute';
import './App.css';

function App() {
	const [user, setuser] = useState();

	useEffect(() => {
		setuser(getCurrentUser());
	}, []);

	return (
		<LoginContext.Provider value={user}>
			<ToastContainer />
			<Navbar />
			<main className='container'>
				<Switch>
					<ProtectedRoute path='/movie/:id' component={MovieForm} />
					<Route path='/movies' component={Movies} />
					<Route path='/customers' component={Customers} />
					<Route path='/price' component={Price} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route path='/logout' component={Logout} />
					<Route path='/not-found' component={NotFound} />
					<Redirect path='/' exact to='/movies' />
					<Redirect to='/not-found' />
				</Switch>
			</main>
			<Footer />
		</LoginContext.Provider>
	);
}

export default App;
