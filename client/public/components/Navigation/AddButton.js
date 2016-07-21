import React, { Component } from 'react';
import Add from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class AddButton extends Component {
  constructor(props) {
    super(props)
}

  render() {
    return(
    <div id = "addButton">
    	<MuiThemeProvider>
    	 <Add style={{'width':'45px','height':'45px','marginTop':'5px'}}/>
    	</MuiThemeProvider>

	</div>

    )
  }
}
