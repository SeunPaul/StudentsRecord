import React from 'react';
import Tile from '../Tile/tile';
import {maleSoneList, femaleSoneList} from './soneList';
import SearchBox from '../searchbox';

class Sone extends React.Component{
	constructor(){
		super()
		this.state = {
			mSoneL: maleSoneList,
			fSoneL: femaleSoneList,
			searchContent: ""

		}
	}

	onSearch = (event) =>{
		this.setState({searchContent: event.target.value})
		}

	render(){

		const filteredMSoneL = this.state.mSoneL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		const filteredFSoneL = this.state.fSoneL.filter((student) =>{
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
						filteredMSoneL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>female</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredFSoneL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
			</div>
		);
	}
		
}

export default Sone;