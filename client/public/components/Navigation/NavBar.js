import React, { Component } from 'react'
import ProfileAvatar from './Profile/ProfileAvatar'
import HamburgerMenu from './Drawer/HamburgerMenu'
import Add from '../../containers/add'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: ''
		}
}
	
	handleAddFormClick() {
		this.setState({ addForm: 'FadeIn' })
	}

	nav(){
		return(
		
			<div>
				<div id="Navigation">
					<ProfileAvatar/>
					<HamburgerMenu/>
					<h1 id="title" className = "text-center">PickUpz</h1>

					<div
						onClick = {this.handleAddFormClick.bind(this)}>
							GAME !
					</div>

					<div
						id="addFormWrapper"
						className={this.state.addForm}>

						<Add id="addFormWrapper"/>

					</div>
				</div>
			</div>

		)
	}

	render() {
		return(
			<div>
					{this.nav()}         
			</div>  
		)
	}
}
