import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
}
  nav(){
    return(
      <div id="Navigation">
       
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
