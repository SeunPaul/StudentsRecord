import React from 'react'
import './footer.css'
import WL from './whatsapp logo.png'

const Footer = () =>{
	return(
		<div className = "footer">
			<h3>sponsors</h3>
			<div className = "imageList">
				<img className = "footerImg" src = {WL} alt = "images"/>

			</div>
		</div>



		);

}

export default Footer;