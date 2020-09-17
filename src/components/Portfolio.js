import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
          <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href="http://hershel-cs52-lab4.surge.sh/" >
            <img src="images/portfolio/blog.jpg" className="item-img"/>
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>Blog Platform</h5>
                <p>CS52 Lab 4</p>
              </div>
            </div>
            </a>
          </div>
          </div>
          <div className="columns portfolio-item">
          <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dartmouth-cs52-20S/project-greentrace">
            <img src="images/portfolio/greentrace.jpg" className="item-img"/>
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>GreenTrace</h5>
                <p>CS52 Final Project</p>
              </div>
            </div>
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}