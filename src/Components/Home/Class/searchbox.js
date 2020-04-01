import React from 'react';


const SearchBox = (props)=>{
	return(
		<div className = 'mb2'>
			<input 
				className = 'pa2 bg-washed-yellow'
				type = 'search' 
				placeholder = 'search student'
				onChange = {props.onSearch}
			/>
		</div>

		)
}

export default SearchBox;