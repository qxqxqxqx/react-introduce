/*
 * @Author: qiaoxin
 * @Email: qiaoxinfc@gmail.com
 * @Date: 2019-12-05 10:25:48
 * @LastEditors: qiaoxin
 * @LastEditTime: 2019-12-09 10:04:37
 * @Description: Function Component
 */
import React, {useContext, useState, useEffect} from 'react';
import { ThemeContext, LanguageContext } from './context';
import Row from './Row';

export default function FunctionComponent(props) {
	
	const name = useFormInput('Mary');
	const surname = useFormInput('Poppins');
	const theme = useContext(ThemeContext);
	const local = useContext(LanguageContext);
	useDocumentTitle(name.value + ' ' + surname.value);
	const width = useWindowWidth();

	return (
		<div className={theme}>
			<Row lable='Name'>
				<input {...name}/>
			</Row>
			<Row lable='Surame'>
				<input {...surname}/>
			</Row>
			<Row lable='Language'>
				{local}
			</Row>
			<Row lable='Width'>
				{width}
			</Row>
		</div>
	);

}


// localhooks
function useWindowWidth() {

	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {

		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {

			window.removeEventListener('resize', handleResize);

		};

	});
	return width;

}

function useDocumentTitle(title) {

	useEffect(() => {

		console.log('---------useDocumentTitle:', useDocumentTitle);
		document.title = title;

	}, [title]);

}

function useFormInput(initialValue) {
	
	const [value, setValue] = useState(initialValue);
	function handleValueChange(e) {

		setValue(e.target.value);
	
	}
	return {
		value,
		onChange: handleValueChange
	};

}