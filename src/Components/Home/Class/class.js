import React from 'react';
import Jone from './Jss1/jss1';
import Jtwo from './Jss2/jss2';
import Jthree from './Jss3/jss3';
import Sone from './Sss1/sss1';
import Stwo from './Sss2/sss2';
import Sthree from './Sss3/sss3';

const Class = (props)=>{
	if(props.currentClass === 'J1'){
		return <Jone onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	else if(props.currentClass === 'J2'){
		return <Jtwo onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	else if(props.currentClass === 'J3'){
		return <Jthree onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	else if(props.currentClass === 'S1'){
		return <Sone onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	else if(props.currentClass === 'S2'){
		return <Stwo onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	else if(props.currentClass === 'S3'){
		return <Sthree onRouteChange = {props.onRouteChange} onStudentPageRequest = {props.onStudentPageRequest}/>
	}
	
}

export default Class;