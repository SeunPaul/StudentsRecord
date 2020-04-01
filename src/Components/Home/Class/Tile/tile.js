import React from 'react';
import './tile.css';


const Tile = (props) =>{
	return(
		<div 
			onClick = {()=>{
					props.onRouteChange('StudentProfile')
					props.onStudentPageRequest(props.user)
				}
			}
			className = 'tile flex mb3 mr3 pointer link dim'
		>
			<img className = 'br-100 h3 w3 mr3 mb2'alt = "default" src = {props.user.image} />
			<div className = 'flex items-center bb b--dark-red'>
				<h4 className = 'mv0'>{props.user.name}</h4>
			</div>
		</div>

	);
}

export default Tile;