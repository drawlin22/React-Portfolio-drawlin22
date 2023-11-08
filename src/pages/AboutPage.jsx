import React from 'react';

import { Link } from 'react-router-dom';
import profileImage from '../assets/img/Profile.jpeg';

export default function AboutPage() { 
 

  return (
    <div className="container pt-4">
    <div className="row">
      <div className="col-md-6">
        <img 
          src={profileImage} alt="Donnie Rawlings"
          height="100px"
          width="400px"
          className="img-fluid"
             />
             <br></br>
          </div>
          <div className="col-md-6">

    <p className="lead text-zoom">
            My name is Donnie Rawlings, and I decided to change my career after twenty-two years of working in retail and restaurant upper management. 
        I enjoy problem solving and finding unique ways to overcome daily hurdles as they arise needing quick solutions. 
    </p>
    
    <p className="lead text-zoom">    
        In the last five years I have been involved in the roll out of multiple new divisions of my company. Most recently as part of enhancing the performace of my division I have been involved
        with teams to develop applications and websites to improve efficiency. I have really thrived in that space. This made me excited to make a leap into a new field. I am certain that joining your
        team would be mutually benificial. 
    </p>
    
    <p className="lead text-zoom">
        I bring with me not only decades of problem solving, but also the experience of managing teams through constantly chaning work environments. I have my MBA in business managment,
        and am currently working through a full stack bootcamp at UC Davis.
    
    </p>
        </div>
        </div>
        </div>
      )
    }
    
    