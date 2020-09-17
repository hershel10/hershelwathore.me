import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am Hershel Wathore.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a Software Engineer and a Project Manager. I like creating nice frontend user interfaces and cool backend services. I am interested in product development and feature specifications.
               </h3>
               <hr/>
               <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/hershel-wathore-8a2a19165/">
              <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/hershel10">
              <i className="fa fa-github" />
              </a>
            </li>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}