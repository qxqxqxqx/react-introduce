/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-04 15:31:26
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-04 15:38:01
 * @Description: 传递多个context
 */
import React from 'react';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
	name: 'Guest',
});

export default class MultipleContexts extends React.Component {
	render() {

		// App component that provides initial context values
		return (
			<ThemeContext.Provider value='blue'>
				<UserContext.Provider value='admin'>
					<Layout />
				</UserContext.Provider>
			</ThemeContext.Provider>
		);
	
	}
}

// 中间组件
function Layout() {

	return (
		<div>
			<Content />
		</div>
	);

}

// A component may consume multiple contexts
function Content() {

	return (
		<ThemeContext.Consumer>
			{theme => (
				<UserContext.Consumer>
					{user => (
						<p>theme: {theme}; user: {user}</p>
					)}
				</UserContext.Consumer>
			)}
		</ThemeContext.Consumer>
	);

}
