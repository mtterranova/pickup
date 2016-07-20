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
