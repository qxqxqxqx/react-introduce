/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-04 14:58:01
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-04 15:11:54
 * @Description: 动态context
 */
import React from 'react';

/**
 * context start
*/
export const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
};

export const ThemeContext = React.createContext(
	themes.dark // default value
);
/**
 * context end
*/

/**
 * ThemedButton start
*/
class ThemedButton extends React.Component {
	render() {

		let props = this.props;
		let theme = this.context;
		return (
			<button
				{...props}
				style={{ backgroundColor: theme.background, color: 'red' }}
			/>
		);
	
	}
}
ThemedButton.contextType = ThemeContext;
/**
 * ThemedButton end
*/

/**
 * DynamicContext start
*/
// An intermediate component that uses the ThemedButton
function Toolbar(props) {

	return (
		<ThemedButton onClick={props.changeTheme}>
			Change Theme
		</ThemedButton>
	);

}

export default class DynamicContext extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
			theme: themes.light,
		};

		this.toggleTheme = () => {

			this.setState(state => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		
		};
	
	}

	render() {

		// The ThemedButton button inside the ThemeProvider
		// uses the theme from state while the one outside uses
		// the default dark theme
		return (
			<div>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar changeTheme={this.toggleTheme} />
				</ThemeContext.Provider>
				<div>
					<ThemedButton >
						default theme
					</ThemedButton>
				</div>
			</div>
		);
	
	}
}

/**
 * DynamicContext end
*/