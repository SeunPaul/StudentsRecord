import React from 'react';
import Tile from '../Tile/tile';
import {maleJthreeList, femaleJthreeList} from './jthreeList';
import SearchBox from '../searchbox';

class Jthree extends React.Component{
	constructor(){
		super()
		this.state = {
			mJthreeL: maleJthreeList,
			fJthreeL: femaleJthreeList,
			searchContent: ""

		}
	}

	onSearch = (event) =>{
		this.setState({searchContent: event.target.value})
		}

	render(){

		const filteredMJthreeL = this.state.mJthreeL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		const filteredFJthreeL = this.state.fJthreeL.filter((student) =>{
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
						filteredMJthreeL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>female</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredFJthreeL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
			</div>
		);
	}
		
}

export default Jthree;