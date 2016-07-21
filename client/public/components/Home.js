import React, { Component } from 'react';
import SearchHome from '../containers/searchHome';
import NavBar from './Navigation/NavBar';
import SearchHome from '../containers/searchHome';
export default class Home extends Component {
  constructor(props) {
    super(props)
}


  render() {
    return(
      <div>
	      <NavBar/>
	      <SearchHome/>
      </div>
    )
  }
}
