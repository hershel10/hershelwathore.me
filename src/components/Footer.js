import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
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
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}