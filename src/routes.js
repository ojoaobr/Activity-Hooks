import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Post from './pages/Post';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/post/:id" component={Post} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
