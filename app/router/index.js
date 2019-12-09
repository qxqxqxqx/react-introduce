/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-09-11 10:58:27 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-12-02 16:58:41
 * @describe: 路由 
 */
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('app/view/Home'));
const About = React.lazy(() => import('app/view/About'));
const LifeCycle = React.lazy(() => import('app/view/LifeCycle'));
const SetState = React.lazy(() => import('app/view/SetState'));
const SyntheticEvent = React.lazy(() => import('app/view/SyntheticEvent'));
const ContextApi = React.lazy(() => import('app/view/ContextApi'));
const Hooks  = React.lazy(() => import('app/view/Hooks'));

export default function AppRouter() {

	return (
		<React.Suspense fallback={'loading...'}>
			<Router>
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/about' render={param => (
						<About param={param}>
							<Switch>
								<Route path='/about/set-state' component={SetState} />
								<Route path='/about/life-cycle' component={LifeCycle} />
								<Route path='/about/synthetic-event' component={SyntheticEvent} />
								<Route path='/about/context-api' component={ContextApi} />
								<Route path='/about/hooks' component={Hooks} />
								<Redirect to='/about/set-state' />
							</Switch>
						</About>	
					)} />
					<Redirect to='/home' />
				</Switch>
			</Router>
		</React.Suspense>
	);
  
}