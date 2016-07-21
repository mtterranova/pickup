import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List/List';

class ProfileAvatar extends Component {
  constructor(props) {
    super(props)
}
  
  render() {
    return(
      <div id="ProfileAvatar">
        <MuiThemeProvider>
         <Avatar
           src="https://avatars0.githubusercontent.com/u/13908543?v=3&s=400"
          />
        </MuiThemeProvider>

      </div>
    )
  }
}

export default ProfileAvatar;
