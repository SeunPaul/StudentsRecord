import React from 'react';
import Tile from '../Tile/tile';
import {maleJoneList, femaleJoneList} from './joneList';
import SearchBox from '../searchbox';

class Jone extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			mJoneL: maleJoneList,
			fJoneL: femaleJoneList,
			searchContent: ""

		}
	}

	onSearch = (event) =>{
		this.setState({searchContent: event.target.value})
		}

	render(){

		const filteredMjoneL = this.state.mJoneL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		const filteredFjoneL = this.state.fJoneL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		
		return(
			<div className = 'bg-white pt2'>
				<div className = 'tc'>
					<SearchBox onSearch = {this.onSearch}/>
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>male</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredMjoneL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>female</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredFjoneL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
			</div>
		);
	}
		
}

export default Jone;