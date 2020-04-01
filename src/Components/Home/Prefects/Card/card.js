import React from 'react';
import './card.css';
import seun from './seun.jpg';


const Card = (props) =>{
	return(
		<div className = "card">
			<div className = "photo">
				<img className = 'cardImg' src= {seun} alt = ""/>
			</div>
			<div>
				<h4>{props.name}</h4>
				<p>{props.sex}</p>
				<p>{props.Class}</p>
			</div>
			
		</div>	
	);
}

export default Card;