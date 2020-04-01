import React from 'react';
import './navigation.css';
import homeLogo from './homeLogo.png';

const Navigation = (props) =>{
	return(
		<div className = "up">
			<div 
			onClick = {() => props.onRouteChange('Home')}
			className = 'leftLi flex ma0 pointer link dim'>
				<img className = 'navImage' alt = 'none' src = {homeLogo}/>
				<p className = 'pa0 ma0'>Home</p>
			</div>
			<div className = 'rightLi flex ma0'>
				<p className = 'pa0 ma0' >Admin</p>
			</div>	
		</div>

	);
}

export default Navigation;