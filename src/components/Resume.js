import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
            <div className="row item">
                       <div className="twelve columns">
                          <h3>Dartmouth College</h3>
                          <p className="info">
                          Computer Science
                          <span>&bull;</span> <em className="date">June 2021</em></p>
                          <p>
                          Minor in Philosophy
                          </p>
                       </div>
                    </div>
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Microsoft</h3>
                <p className="info">
                  Software Engineering Intern
                  <span>&bull;</span> <em className="date">Septenber 2020</em></p>
                <p>
                  Azure Active Directory
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>TomTom</h3>
                <p className="info">
                  Software Engineering Intern
                  <span>&bull;</span> <em className="date">March 2020</em></p>
                <p>
                  Maps API
                </p>
              </div>
            </div>
            </div> 
         </div>
      </section>
    );
  }
}