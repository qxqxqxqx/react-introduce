/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-05 10:42:11
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-05 14:09:57
 * @Description: 
 */
import React from 'react';

export default function Row(props) {
	
	const {lable, children} = props;
	return (
		<div className='row-container'>
			<div className='line-wrap'>
				<label>{lable}</label>
			</div>
			<div className='child-wrap'>
				{children}
			</div>
		</div>
	);

}