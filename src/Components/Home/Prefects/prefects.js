import React from 'react';
import Card from './Card/card';
import { prefectList } from './prefectList'



const Students = () =>{
	return(
		<div className = "bg-white tc ph4 pv3">
			<h2 className = "times fw4 f3 tracked mv5">OUR PREFECTS</h2>
			<div className = "flex flex-wrap justify-center">
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