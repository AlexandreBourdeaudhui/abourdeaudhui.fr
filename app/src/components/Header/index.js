/*
 * Package Import
 */
import React, { Component } from 'react';
import classNames from 'classnames';


/*
 * Local Import
 */

// Component
import Nav from './Nav';


/*
 * Component
 */
class Header extends Component {
  /*
   * State
   */
  state = {
    menuOpen: false,
  };


  /*
   * LifeCycle
   */
  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.onHideMenu();
      }
    });
  }


  /*
   * Actions
   */
  onHideMenu = () => {
    this.setState({ menuOpen: false });
  }

  onShowMenu = () => {
    this.setState({ menuOpen: true });
  }

  onToggleMenu = () => {
    const { menuOpen } = this.state;

    // A changer
    if (menuOpen) {
      this.onHideMenu();
    }
    else {
      this.onShowMenu();
    }
  };


  /*
   * Render
   */
  render() {
    // Destructuring State
    const { menuOpen } = this.state;


    /*
     * View
     */
    return (
      <header id="header" className={classNames({ 'nav-menu--open': menuOpen })}>

        <Nav onHideMenu={this.onHideMenu} {...this.state.header} />

        <div id="header-btn" onClick={this.onToggleMenu}>
          <span />
        </div>
      </header>
    );
  }
}


/*
 * Export
 */
export default Header;
