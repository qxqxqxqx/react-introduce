/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-10-30 11:10:55 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-11-21 18:35:20
 * @describe: 入口文件
 */
'use strict';
import 'whatwg-fetch';
import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from 'app/router';
import 'antd/dist/antd.less';
import './reset.scss';

// const ReactNode = undefined;
// const ReactNode = false;
// const ReactNode = null;
// const ReactNode = 'hello world';
// const ReactNode = ['hello world', 'hello react'];
// const ReactNode = <h1>hello world</h1>;
// const ReactNode = [<h1 key="1">hello world</h1>, <h1 key="2">hello world</h1>];
const ReactNode = <AppRouter />;

ReactDom.render(
	ReactNode,
	document.querySelector('#App')
);