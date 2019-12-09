/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-04 17:13:32
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-06 18:06:23
 * @Description: Hooks introduce
 */
import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import {ThemeContext, LanguageContext} from './context';
import './styles.scss';

export default function Hooks() {

	return (
		<section className='hooks-container'>
			<ThemeContext.Provider value='classic'>
				<LanguageContext.Provider value='English'>
					<ClassMiddle />
				</LanguageContext.Provider>
			</ThemeContext.Provider>
			<ThemeContext.Provider value='modern'>
				<LanguageContext.Provider value='Chinese'>
					<FunctionMiddle />
				</LanguageContext.Provider>
			</ThemeContext.Provider>
		</section>
	);

}

function ClassMiddle(props) {
	
	return (
		<div className='part'>
			<ClassComponent />
		</div>
	);

}

function FunctionMiddle(props) {

	return (
		<div className='part'>
			<FunctionComponent />
		</div>
	);

}