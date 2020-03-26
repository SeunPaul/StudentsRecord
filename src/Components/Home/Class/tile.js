import React from 'react';
import './tile.css';


const Tile = (props) =>{
	return(
		<div className = 'tile flex mb3 mr3'>
			<img className = 'br-100 h3 w3 mr3 mb2'alt = "image" src = {props.image}/>
			<div className = 'flex items-center bb b--dark-red'>
				<h4 className = 'mv0'>{props.name}</h4>
			</div>
		</div>

	);
}

export default Tile;