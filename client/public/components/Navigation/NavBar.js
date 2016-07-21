import React, { Component } from 'react';
import ProfileAvatar from './Profile/ProfileAvatar'
import HamburgerMenu from './Drawer/HamburgerMenu'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
}
  nav(){
    return(

      <div id="Navigation">
       <ProfileAvatar/>
       <HamburgerMenu/>
       <h1 id="title" className = "text-center">PickUpz</h1>
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
