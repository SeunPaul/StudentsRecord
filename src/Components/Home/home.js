import React from 'react';
import Navigation from './Navigation/navigation';
import Start from './Start/start';
import Prefects from './Prefects/prefects';
import End from './End/end';
import Class from './Class/class';
import StudentProfile from './StudentProfile/studentProfile';

class Home extends React.Component{
	constructor(){
		super()
		this.state = {
			currentRoute : 'Home',
			currentClass : 'J1',
			headerText : 'WELCOME TO BESTLAND SCHOOL',
			currentStudent : {}
		}
	}

	onRouteChange = (route)=>{
		if(route === 'Home'){
			this.setState({headerText: 'WELCOME TO BESTLAND SCHOOL'})
		}
		this.setState({currentRoute: route})

	}
	onClassChange = (Class, text)=>{
		this.setState({currentClass: Class, headerText: text})
	}

	onStudentPageRequest = (user)=>{
		this.setState({currentStudent: user})
	}

	render(){
		if (this.state.currentRoute === 'Home'){
			return(
				<div>
					<Navigation onRouteChange = {this.onRouteChange}/>
					<Start headerText = {this.state.headerText} onClassChange = {this.onClassChange} onRouteChange = {this.onRouteChange}/>
					<Prefects/>
					<End/>
				</div>
			)
		}else if(this.state.currentRoute === 'Class'){
			return(
				<div>
					<Navigation onRouteChange = {this.onRouteChange}/>
					<Start headerText = {this.state.headerText} onClassChange = {this.onClassChange} onRouteChange = {this.onRouteChange}/>
					<Class currentClass = {this.state.currentClass} onRouteChange = {this.onRouteChange} onStudentPageRequest = {this.onStudentPageRequest}/>
					<End/>
				</div>
			)
		}
		else if(this.state.currentRoute === 'StudentProfile'){
			return(
				<div>
					<Navigation onRouteChange = {this.onRouteChange}/>
					<StudentProfile currentStudent = {this.state.currentStudent}/>
				</div>
			)
		}	
		
	}
}

export default Home;