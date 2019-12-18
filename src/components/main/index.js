import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from 'components/admin';
import Home from 'components/home';

const Main = () => {
	return ( 
		<main className="main">
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/clean/prod' component={Admin}/>
				<Route path='/clean/dev' component={Admin}/>
			</Switch>
		</main>
	);
}

export default Main;
