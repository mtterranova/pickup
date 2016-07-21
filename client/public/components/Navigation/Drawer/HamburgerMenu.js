import React, { Component } from 'react';
import HamburgerIcon from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import SvgIcon from 'material-ui/svg-icons/navigation/menu';
import * as actions from '../../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false
    }
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
}

createGameItems(){
    console.log(this.props.games,"hello");
}

handleOpenDrawer(){
  this.setState({
    open: !this.state.open
  });
}

  render() {
    this.createGameItems();
    return(
    <div id = "HamMenu">

        <button type="button" id="HamburgerButton" onClick={this.handleOpenDrawer} >
          <MuiThemeProvider>
            <SvgIcon style={{'width':'50px','height':'50px'}}/>
          </MuiThemeProvider>
        </button>
        <MuiThemeProvider>
          <Drawer open={this.state.open} openSecondary={true}>
            <ListItem
               primaryText={
                  <p>Basketball</p>
              }
               secondaryText={
                <p>
                  <span>Players: 3/5</span><br />
                  <span>Location: 604 Arizona Ave</span><br />
                </p>
              }
              secondaryTextLines={2}
            />
          </Drawer>
        </MuiThemeProvider>
    </div>  

    )
  }
}

function mapStateToProps(state) {
  return {
    games: state.searchGames,
  }
}

export default connect(mapStateToProps, actions)(HamburgerMenu)
