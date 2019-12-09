/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-05 10:21:48
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-09 10:03:52
 * @Description: class组件实现方式
 */
import React from 'react';
import Row from './Row';
import { ThemeContext, LanguageContext } from './context';

export default class ClassComponent extends React.Component{
	constructor(props) {

		super(props);
		this.state = {
			name: 'Mary',
			surname: 'Poppins',
			width: window.innerWidth
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSurnameChange = this.handleSurnameChange.bind(this);
		this.handleResize = this.handleResize.bind(this);
	
	}

	handleNameChange (e) {

		this.setState({
			name: e.target.value
		});
	
	}

	handleSurnameChange (e) {

		this.setState({
			surname: e.target.value
		});
	
	}

	handleResize () {

		this.setState({
			width: window.innerWidth
		});
	
	}

	componentDidMount() {

		document.title = this.state.name + ' ' + this.state.surname;
		window.addEventListener('resize', this.handleResize);
	
	}

	componentDidUpdate(prevProps, prevState) {

		document.title = this.state.name + ' ' + this.state.surname;
	
	}
	

	componentWillUnmount() {

		window.removeEventListener('resize', this.handleResize);
	
	}
	

	render() {

		return (
			<ThemeContext.Consumer>
				{theme => (
					<div className={theme}>
						<Row lable='Name'>
							<input value={this.state.name} 
								onChange={this.handleNameChange}
							/>
						</Row>
						<Row lable='Surname'>
							<input value={this.state.surname} 
								onChange={this.handleSurnameChange}
							/>
						</Row>
						<LanguageContext.Consumer>
							{
								local => (
									<Row lable='Language'>
										{local}
									</Row>
								)
							}
						</LanguageContext.Consumer>
						<Row lable='width'>
							{this.state.width}
						</Row>
					</div>
				)}
			</ThemeContext.Consumer>
		);	
	
	}
}
