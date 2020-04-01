import React from 'react';
import schoolLogo from './schoolLogo.png';
import './studentProfile.css';

const StudentProfile = (props)=>{
	return(
		<div className = ' background bg-white ph2 pb2 '>
			<div className = ' container'>
				<div className = ' tc sHeader'>
					<img className = 'sImageL h3 w3 br-100' src = {props.currentStudent.image} alt = 'default'/>
					<img className = 'sImageR h3' src = {schoolLogo} alt = 'default'/>
					<h4>BESTLAND COLLEGE STUDENT PROFILE</h4>
				</div>
				<div className = 'pDetails mt5'>
					<p className = 'f5 b mv2 '>Personal Details</p>
					<table className = 'f6'>
						<tbody>
							<tr>
								<td>Student Name</td>
								<td>{props.currentStudent.name}</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>{props.currentStudent.sex}</td>
							</tr>
							<tr>
								<td>Date Of Birth</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Religion</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Nationality</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>State Of Origin</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Residential Address</td>
								<td>29, Emmanuel street, Okerube, Ikotun, Lagos</td>
							</tr>
						</tbody>	
					</table>
				</div>
				<div className = 'aInformation mt5'>
					<p className = 'f5 b mv2 '>Academic Information</p>
					<table className = 'f6'>
						<tbody>
							<tr>
								<td>Class</td>
								<td>{props.currentStudent.Class}</td>
							</tr>
							<tr>
								<td>Department</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Post Held</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Year Of Entry</td>
								<td>sample text required graduation introductory</td>
							</tr>
							<tr>
								<td>Results</td>
								<td>sample text</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className = 'aInformation mt5'>
					<p className = 'f5 b mv2 '>Sponsor Information</p>
					<table className = 'f6'>
						<tbody>
							<tr>
								<td>Name</td>
								<td>sample text</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>sample text</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>	
		</div>
	)
}

export default StudentProfile;