/*
 * Package Import
 */
import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';


/*
 * Local Import
 */

// Utils
import { debounce } from 'src/utils';


/*
 * Component
 */
class ReturnTop extends Component {
  /*
   * LifeCycle
   */
  componentDidMount() {
    window.addEventListener('scroll', debounce(this.pageIsScrolled));
  }


  /*
   * Actions
   */
  pageIsScrolled = () => {
    const buttonReturnTop = document.getElementById('return-top');
    const pixelBottom = (window.scrollY + window.innerHeight);

    if (pixelBottom >= 1200) {
      buttonReturnTop.style.display = 'block';
    }
    else {
      buttonReturnTop.style.display = 'none';
    }
  }

  scrollToTop = () => {
    animateScroll.scrollToTop();
  };


  /*
   * Render
   */
  render() {
    return (
      <div id="return-top" onClick={this.scrollToTop} />
    );
  }
}


/*
 * Export
 */
export default ReturnTop;
