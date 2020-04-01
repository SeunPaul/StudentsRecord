import React from 'react';
import './start.css';

const Start = (props) =>{
	return(
		<div className = "layer ">
			<h1>{props.headerText}</h1>
			<ul className = 'headerUl'>
				<li className = 'headerLi'>
					<button
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('J1', 'JSS 1')
							}
						} 
						className = 'pointer headerButton'
					>
						JSS 1
					</button>
				</li>
				<li className = 'headerLi'>
					<button 
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('J2', 'JSS 2')
							}
						} 
						className = 'pointer headerButton'
					>
						JSS 2
					</button>
				</li>
				<li className = 'headerLi'>
					<button 
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('J3', 'JSS 3')
							}
						} 
						className = 'pointer headerButton'
					>
						JSS 3
					</button>
				</li>
				<li className = 'headerLi'>
					<button 
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('S1', 'SSS 1')
							}
						} 
						className = 'pointer headerButton'
					>
						SSS 1
					</button>
				</li>
				<li className = 'headerLi'>
					<button 
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('S2', 'SSS 2')
							}
						} 
						className = 'pointer headerButton'
					>
						SSS 2
					</button>
				</li>
				<li className = 'headerLi'>
					<button 
						onClick = {()=> {
								props.onRouteChange('Class')
								props.onClassChange('S3', 'SSS 3')
							}
						} 
						className = 'pointer headerButton'
					>
						SSS 3
					</button>
				</li>
			</ul>
		</div>

	);
}

export default Start;
