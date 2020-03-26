import React from 'react';
import Tile from '../tile';
import seun from './seun.jpg';

const Jone = () =>{
	return(
		<div className = 'bg-white pa3'>
			<h3>male</h3>
			<div className = 'flex flex-wrap'>
				<Tile name = "Oluwafemi Oluwaseyifunmi Emmanuel" image = {seun}/>
				<Tile name = "Oluwafemi Seun Paul" image = {seun}/>
				<Tile name = "Oluwafemi Oluwaseyifunmi Emmanuel" image = {seun}/>
				<Tile name = "Oluwafemi Oluwaseyifunmi Emmanuel" image = {seun}/>
				<Tile name = "Oluwafemiixdhfoiihl Oluwaseyifunmi Emmanueliushdfolsjfol" image = {seun}/>
				<Tile name = "Oluwafemi Oluwaseyifunmi Emmanuel" image = {seun}/>
				<Tile name = "Oluwafemi Oluwaseyifunmi Emmanuel" image = {seun}/>
			</div>
			<h4>female</h4>
			<div className = 'flex flex-wrap'>
				<Tile name = "Adejumoke Oluwatosin Elizabeth" image = {seun}/>
				<Tile name = "Adejumoke Oluwatosin Elizabeth" image = {seun}/>
				<Tile name = "Adejumoke Oluwatosin Elizabeth" image = {seun}/>
			</div>
		</div>

	);
}

export default Jone;