import React from 'react'
import './end.css'
import WL from './whatsapp logo.png'

const End = () =>{
	return(
		<div className = "footer">
			<h3>sponsors</h3>
			<div className = "imageList">
				<img className = "footerImg" src = {WL} alt = "default"/>

			</div>
		</div>



		);

}

export default End;