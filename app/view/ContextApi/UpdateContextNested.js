/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-04 15:15:18
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-04 15:26:29
 * @Description: 在内部组件更新context
 */
import React from 'react';
import {themes} from './DynamicContext';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
	theme: themes.dark,
	toggleTheme: () => { },
});

// function ThemeTogglerButton() {

// 	// The Theme Toggler Button receives not only the theme
// 	// but also a toggleTheme function from the context
// 	// click事件执行的正是UpdateContextNested组件内的this.toggleTheme
// 	return (
// 		<ThemeContext.Consumer>
// 			{({ theme, toggleTheme }) => (
// 				<button
// 					onClick={toggleTheme}
// 					style={{ backgroundColor: theme.background, color: 'red' }}>
// 					Toggle Theme
// 				</button>
// 			)}
// 		</ThemeContext.Consumer>
// 	);

// }

class ThemeTogglerButton extends React.Component {
	// context每次更改必定会引起重新渲染
	shouldComponentUpdate(nextProps, nextState) {

		return false;
	
	}

	render () {

		return (
			<ThemeContext.Consumer>
				{({ theme, toggleTheme }) => (
					<button
						onClick={toggleTheme}
						style={{ backgroundColor: theme.background, color: 'red' }}>
						Toggle Theme
					</button>
				)}
			</ThemeContext.Consumer>
		);
	
	}
}

// Provider组件
export default class UpdateContextNested extends React.Component {
	constructor(props) {

		super(props);

		this.toggleTheme = () => {

			this.setState(state => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		
		};

		// State also contains the updater function so it will
		// be passed down into the context provider
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	
	}

	render() {

		// The entire state is passed to the provider
		return (
			<ThemeContext.Provider value={this.state}>
				<Content />
			</ThemeContext.Provider>
		);
	
	}
}

// 中间组件
function Content() {

	return (
		<div>
			<ThemeTogglerButton />
		</div>
	);

}
