/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-10-31 10:16:26 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-10-31 16:54:12
 * @describe: home 
 */
import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'public/logo.svg';
import './style.scss';

export default function App() {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Learn Once, Write Anywhere.
				</p>
				<Link className="App-link" to="/about">Learn React</Link>
			</header>
		</div>
	);

}
