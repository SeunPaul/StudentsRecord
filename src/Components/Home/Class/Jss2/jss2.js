import React from 'react';
import Tile from '../Tile/tile';
import {maleJtwoList, femaleJtwoList} from './jtwoList';
import SearchBox from '../searchbox';

class Jtwo extends React.Component{
	constructor(){
		super()
		this.state = {
			mJtwoL: maleJtwoList,
			fJtwoL: femaleJtwoList,
			searchContent: ""

		}
	}

	onSearch = (event) =>{
		this.setState({searchContent: event.target.value})
		}

	render(){

		const filteredMJtwoL = this.state.mJtwoL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		const filteredFJtwoL = this.state.fJtwoL.filter((student) =>{
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
						filteredMJtwoL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>female</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredFJtwoL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
			</div>
		);
	}
		
}

export default Jtwo;