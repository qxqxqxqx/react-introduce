/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-06 10:55:15
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-06 11:04:50
 * @Description: context 基础应用
 */
import React from 'react';
import { Button } from 'antd';
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "primary" as the default).
const ThemeContext = React.createContext('primary');

export default class ContextBase extends React.Component {
	render() {

		// Use a Provider to pass the current theme to the tree below.
		// Any component can read it, no matter how deep it is.
		// In this example, we're passing "danger" as the current value.
		return (
			<ThemeContext.Provider value="danger">
				<Toolbar />
			</ThemeContext.Provider>
		);

	}
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {

	return (
		<div>
			<ThemedButton />
		</div>
	);

}

class ThemedButton extends React.Component {
	// Assign a contextType to read the current theme context.
	// React will find the closest theme Provider above and use its value.
	// In this example, the current theme is "danger".
	static contextType = ThemeContext;
	render() {

		console.log('------context-type:', this);
		return <Button type={this.context} >context api 测试</Button>;

	}
}