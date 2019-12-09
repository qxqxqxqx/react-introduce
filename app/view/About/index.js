/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-10-31 19:26:18 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-12-02 16:59:51
 * @describe: 文件描述 
 */
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import './style.scss';

const { Header, Content } = Layout;

export default function About(props) {
	
	const {location: {pathname}} = props.param;

	return (
		<Layout className="about-layout">
			<Header>
				<div className="logo">
					React Training
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[pathname]}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="/about/set-state">
						<NavLink to="/about/set-state">SetState</NavLink>
					</Menu.Item>
					<Menu.Item key="/about/life-cycle">
						<NavLink to="/about/life-cycle">LifeCycle</NavLink>
					</Menu.Item>
					<Menu.Item key="/about/synthetic-event">
						<NavLink to="/about/synthetic-event">SyntheticEvent</NavLink>
					</Menu.Item>
					<Menu.Item key="/about/context-api">
						<NavLink to="/about/context-api">ContextApi</NavLink>
					</Menu.Item>
					<Menu.Item key="/about/hooks">
						<NavLink to="/about/hooks">Hooks</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
			<Content className="about-content">
				<div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 24 }}>
					{props.children}
				</div>
			</Content>
		</Layout>
	);

}