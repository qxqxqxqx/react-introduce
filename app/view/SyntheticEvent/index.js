/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-12-02 10:39:32 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-12-02 16:03:36
 * @describe: 文件描述 
 */
import React from 'react';

export default class SyntheticEvent extends React.Component {
	constructor(props) {

		super(props);
		this.handleSynthetic=this.handleSynthetic.bind(this);
	
	}

	componentDidMount() {

		document.querySelector('.native-event').addEventListener('click', this.handleNative);

	}

	// 合成事件
	handleSynthetic(e) {

		e.persist();
		console.log('------syntheticEvent:', e);
		
	}

	// 原生事件内
	handleNative(e) {

		// 取消冒泡
		// e.stopPropagation();
		console.log('--------nativeEvent:', e);

	}

	componentWillUnmount() {
		
		document.querySelector('.native-event').removeEventListener('click', this.handleNative);

	}
	

	render() {

		return (
			<div>
				<button className='native-event' onClick={this.handleSynthetic}>
					浏览器原生事件vs合成事件
				</button>
			</div>
		);

	}
}