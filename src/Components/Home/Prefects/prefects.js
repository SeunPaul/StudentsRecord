import React from 'react';
import './prefects.css';
import Card from './Card/card';
import { prefectList } from './prefectList'



const Students = () =>{
	return(
		<div className = "main">
			<h2>Our prefects</h2>
			<div className = "cards">
				{
					prefectList.map((user, i) =>{
						return <Card key = {i} name = {prefectList[i].name} sex = {prefectList[i].sex} Class = {prefectList[i].class}/>
					})
				}
				
			</div>
		</div>

	);
}

export default Students;