import React from 'react';
import Tile from '../Tile/tile';
import {maleSthreeList, femaleSthreeList} from './sthreeList';
import SearchBox from '../searchbox';

class Sthree extends React.Component{
	constructor(){
		super()
		this.state = {
			mSthreeL: maleSthreeList,
			fSthreeL: femaleSthreeList,
			searchContent: ""

		}
	}

	onSearch = (event) =>{
		this.setState({searchContent: event.target.value})
		}

	render(){

		const filteredMSthreeL = this.state.mSthreeL.filter((student) =>{
			return student.name.toLowerCase().includes(this.state.searchContent.toLowerCase())
		})
		const filteredFSthreeL = this.state.fSthreeL.filter((student) =>{
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
						filteredMSthreeL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
				<h3 className = 'calisto pl3 bg-light-gray h2 flex items-center'>female</h3>
				<div className = 'flex flex-wrap pa3'>
					{
						filteredFSthreeL.map((user, i)=>{
							return <Tile key = {user.name} user = {user} onRouteChange = {this.props.onRouteChange} onStudentPageRequest = {this.props.onStudentPageRequest}/>

						})
					}
				</div>
			</div>
		);
	}
		
}

export default Sthree;