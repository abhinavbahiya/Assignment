import React from 'react';
import {Link} from 'react-router';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ['Home', 'About', 'Contact', 'ReachUs', 'Abhinav'],
      navMenu: [],
      dropdownMenu: []
    }

    this.getNavigationBar = this.getNavigationBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getNavigationDropdownBar = this.getNavigationDropdownBar.bind(this);
  };

  componentWillMount() {
    this.calculateWidth();
  }

  calculateWidth() {
    let screenSize = window.innerWidth;
    screenSize =  screenSize - 440;
    let mainNav = Math.floor(screenSize / 100);
    for(let index = 0; index < mainNav; index ++) {
      this.state.navMenu[index] = this.state.menu[index];
    }
    if (this.state.menu.length >= mainNav) {
      for(let index = mainNav, j = 0; index < this.state.menu.length; index++, j++) {
        this.state.dropdownMenu[j] = this.state.menu[index];
      }
    }
    this.setState(this.state);
  }

  getNavigationBar() {
    return this.state.navMenu.map((item, index) => {
        return <li key = {index}>
                 <a className='fixedWidth' href='javascript:void(0);'>
                   {item}
                 </a>
               </li>
    });
  }

  getNavigationDropdownBar() {
    return this.state.dropdownMenu.map((item, index) => {
        return <li key = {index}>
                 <a className='fixedWidth' href='javascript:void(0);'>
                   {item}
                 </a>
               </li>
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.refs.newCategory.value.length) {
      let newMenu = this.state.menu;
      newMenu.push(this.refs.newCategory.value);
      this.setState({
        menu: newMenu
      });
      this.refs.newCategory.value = '';
    }
    this.calculateWidth();
  }

  getDropdown() {
    if(this.state.dropdownMenu.length) {
      return <li className="dropdown">
        <a href='javascript:void(0);'
           className="dropdown-toggle"
           data-toggle="dropdown"
           role="button"
           aria-haspopup="true"
           aria-expanded="false">More
          <span className="caret"></span>
          </a>
        <ul className="dropdown-menu">{this.getNavigationDropdownBar()}</ul>
      </li>
    }
  }

   render() {

      return (
        <div>
          <ul className="nav nav-tabs">
            {this.getNavigationBar()}
            {this.getDropdown()}
            <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
              <input ref = 'newCategory' type="text" className="form-control"></input> &nbsp;
              <input type="submit" value="Add Category" className="btn btn-default" />
            </form>
          </ul>
          <div>
            <Link to="#">
              Go to Assignment 1
            </Link>
          </div>
        </div>
      );
    }
  }

export default NavigationBar;
