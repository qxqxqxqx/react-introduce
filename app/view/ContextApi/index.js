/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-11-29 14:44:26 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-12-02 17:14:20
 * @describe: context api 介绍 
 */
import React from 'react';
import { Tabs } from 'antd';
import DynamicContext from './DynamicContext';
import UpdateContextNested from './UpdateContextNested';
import MultipleContexts from './MultipleContexts';
import ContextBase from './ContextBase';

const { TabPane } = Tabs;
export default class ContextApi extends React.Component {
	render() {

		return (
			<Tabs defaultActiveKey="context-base" tabPosition='left' style={{ height: 220 }}>
				<TabPane tab='context-base' key='context-base'>
					<ContextBase></ContextBase>
				</TabPane>
				<TabPane tab='dynamic-context' key='dynamic-context'>
					<DynamicContext></DynamicContext>
				</TabPane>
				<TabPane tab='update-nested' key='update-nested'>
					<UpdateContextNested></UpdateContextNested>
				</TabPane>
				<TabPane tab='mutiple-context' key='mutiple-context'>
					<MultipleContexts></MultipleContexts>
				</TabPane>
			</Tabs>
		);
	
	}
}