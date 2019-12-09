/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-10-30 14:02:22 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-12-02 10:40:12
 * @describe: LifeCircle 生命周期
 */
import React from 'react';
import { Button } from 'antd';

export default class LifeCycle extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
			count: 0
		};
		this.handleClick = this.handleClick.bind(this);
	
	}

	/** 
	 * @param {nextprops} props 
	 * @param {nesxtstate} state
	 * @returns null || object 
	 * @description 该方法内无法访问this 仅可用于state完全依赖于props
	 */
	static getDerivedStateFromProps(props, state) {

		console.log('getDerivedStateFromProps-props:', props);
		console.log('getDerivedStateFromProps-state:', state);
		return null;

	}
	
	// UNSAFE_componentWillMount() {

	// 	// 可能会执行多次
	// 	console.log('UNSAFE_componentWillMount');
	
	// }

	/**
	 * @returns void 0
	 * @description after render 
	 */
	componentDidMount () {

		console.log('componentDidMount');

	}

	// UNSAFE_componentWillReceiveProps () {

	// 	console.log('componentDidMount');
	
	// }

	/**
	 * 
	 * @param {nextProps} nextProps 
	 * @param {nextState} nextState
	 * @returns Boolean 是否更新
	 * @description 多用于本次状态于下次状态的比较来进行是否更新 从而可以做相关的性能优化 
	 */
	shouldComponentUpdate(nextProps, nextState) {

		console.log('shouldComponentUpdate');
		return true;

	}

	// UNSAFE_componentWillUpdate () {

	// 	console.log('UNSAFE_componentWillUpdate');

	// }

	/**
	 * 
	 * @param {prevProps} prevProps 
	 * @param {prevState} prevState 
	 * @returns snapShot 
	 */
	getSnapshotBeforeUpdate(prevProps, prevState) {

		console.log('getSnapshotBeforeUpdate');
		return 'returned from getSnapshotBeforeUpdate';

	}

	/**
	 * 
	 * @param {prevProps} prevProps 
	 * @param {prevState} prevState 
	 * @param {snapShot} snapShot
	 * @returns viod 0
	 * @description 发生于render之后 可根据现在状态于之前状态的比较来决定是否做相关的副作用操作 
	 */
	componentDidUpdate(prevProps, prevState, snapShot) {
		
		console.log('componentDidUpdate');
		console.log('snapShot:', snapShot);

	}

	/**
	 * 卸载前触发 处理清除定时器 解绑原生事件等操作
	*/
	componentWillUnmount() {

		console.log('componentWillUnmount');
	
	}
	
	
	handleClick () {

		this.setState({
			count: this.state.count + 1
		});
	
	}

	render () {

		console.log('render');
		const {count} = this.state;
		return (
			<div>
				<h2>点击了{count}次</h2>
				<Button onClick={this.handleClick}>点击测试</Button>
			</div>
		);
	
	}
}