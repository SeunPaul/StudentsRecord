import React from 'react';
import './header.css';

const Header = () =>{
	return(
		<div className = "layer">
			<h1>WELCOME TO BESTLAND SCHOOL</h1>
			<ul>
					<li><button>JSS 1</button></li>
					<li><button>JSS 2</button></li>
					<li><button>JSS 3</button></li>
					<li><button>SSS 1</button></li>
					<li><button>SSS 2</button></li>
					<li><button>SSS 3</button></li>
			</ul>
		</div>

	);
}

export default Header;
