/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-10-30 20:07:24 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-11-28 14:43:00
 * @describe: setstate 组件内状态 
 */
import React from 'react';
import { Button } from 'antd';

export default class SetState extends React.Component {
	state = {
		count: 0,
		uselessState: ''
	}

	componentDidMount() {

		this.setState((state) => ({
			count: state.count + 1
		}));
		// 异步的
		console.log('--------componentDidMount:', this.state.count);
		document.querySelector('.original-event').addEventListener('click', () => {

			this.handleOriginal();

		});

	}

	handleCount() {

		this.setState((state) => ({
			count: state.count + 1
		}));
		// 异步的
		console.log('--------count:', this.state.count);

	}

	// 定时器内
	handleSync() {

		setTimeout(() => {

			// 同步的
			this.setState((state) => ({
				count: state.count + 1
			}));
			console.log('--------Timeoutcount:', this.state.count);

		}, 0);

	}

	// 原生事件内
	handleOriginal() {

		// 同步的
		this.setState((state) => ({
			count: state.count + 1
		}));
		console.log('--------Originalcount:', this.state.count);

	}

	handleUselessState() {

		this.setState({
			uselessState: 'hhhhhhhhhhhhh'
		});

	}

	render() {

		console.log('-------------rerendered');
		const { count } = this.state;
		return (
			<div>
				<h2>点击了{count}次</h2>
				<Button style={{ marginBottom: 8 }} onClick={() => this.handleCount()} type="primary" block>
					点我测试
				</Button>
				<Button style={{ marginBottom: 8 }} onClick={() => this.handleSync()} type="dashed" block>
					点我测试异步
				</Button>
				<Button style={{ marginBottom: 8 }} className='original-event' block>
					点我测试原生事件
				</Button>
				<Button style={{ marginBottom: 8 }} type="danger" onClick={() => this.handleUselessState()} block>
					点我测试无用state
				</Button>
			</div>
		);

	}
}