import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               I was born and raised in Cary, North Carolina. I am currently completing my senior year at Dartmouth College. I will be graduating with a major in Computer Science and a minor in Philosophy. I love eating Ben and Jerry's Ice Cream and my favorite flavor is Americone Dream.
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>wathoreh@gmail.com</span>
                     <br></br>
       						   <span>
                     919-413-2199
                    </span>
                    <br></br>
                    <span>hershelwathore.me</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}