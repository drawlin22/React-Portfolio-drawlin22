import React from 'react';

import { Link } from 'react-router-dom';
import profileImage from '../assets/img/Profile.jpeg';

import {workData} from './workData';

const projectOne = workData.find(project =>project.id ==="CodeMantic");
const projectTwo = workData.find(project =>project.id ==="placeholder");
const projectThree = workData.find(project =>project.id ==="Weather Dashboard");
const projectFour = workData.find(project =>project.id ==="Work Day Scheduler");

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
          </div>
         
        
          <div className="col-md-6">

    <p className="lead text-zoom">
           <strong> <font size="+2">My name is Donnie Rawlings, and I decided to change my career after twenty-two years of working in retail and restaurant upper management. 
        I enjoy problem solving and finding unique ways to overcome daily hurdles as they arise needing quick solutions.</font> </strong>
    </p>
    
    <p className="lead text-zoom">    
        <strong><font size="+2">In the last five years I have been involved in the roll out of multiple new divisions of my company. Most recently as part of enhancing the performace of my division I have been involved
        with teams to develop applications and websites to improve efficiency. I have really thrived in that space. This made me excited to make a leap into a new field. I am certain that joining your
        team would be mutually benificial.</font> </strong>
    </p>
    
    <p className="lead text-zoom">
        <strong><font size="+2">I bring with me not only decades of problem solving, but also the experience of managing teams through constantly chaning work environments. I have my MBA in business managment,
        and am currently working through a full stack bootcamp at UC Davis.</font></strong>
    
    </p>

  </div>
  </div>
        
  <div className="container pt-4">
 <div className="row">
   <div className="col-md-6">
     <div className="card zoom-card">
       <div className="card-body">
         <h5 className="card-title text-center"><strong>{projectOne.title}</strong></h5>
         <p className="card-text">{projectOne.description}</p>
         <a href={projectOne.link} className="card-link">
           <img src={projectOne.imageSrc} title={projectOne.title} alt={projectOne.title} className="card-img-bottom glow-on-hover" 
           height="200px" width="50px"/>
         </a>
       </div>
     </div>
   </div>
   <div className="col-md-6">
     <div className="card zoom-card">
       <div className="card-body">
       <h5 className="card-title text-center"><strong>{projectTwo.title}</strong></h5>
         <p className="card-text">{projectTwo.description}</p>
         <a href={projectTwo.link} className="card-link">
           <img src={projectTwo.imageSrc} title={projectTwo.title} alt={projectTwo.title} className="card-img-bottom glow-on-hover" 
           height="200px" width="50px"/>
         </a>
       </div>
     </div>
     <br></br>
   </div>
   <div className="col-md-6">
     <div className="card zoom-card">
       <div className="card-body">
       <h5 className="card-title text-center"><strong>{projectThree.title}</strong></h5>
         <p className="card-text">{projectThree.description}</p>
         <a href={projectThree.link} className="card-link">
           <img src={projectThree.imageSrc} title={projectThree.title} alt={projectThree.title} className="card-img-bottom glow-on-hover" 
           height="200px" width="50px"/>
         </a>
       </div>
     </div>
   </div>
   <div className="col-md-6">
     <div className="card zoom-card">
       <div className="card-body">
       <h5 className="card-title text-center"><strong>{projectFour.title}</strong></h5>
         <p className="card-text">{projectFour.description}</p>
         <a href={projectFour.link} className="card-link">
           <img src={projectFour.imageSrc} title={projectFour.title} alt={projectFour.title} className="card-img-bottom glow-on-hover" 
           height="200px" width="50px"/>
         </a>
       </div>
     </div>
     <br></br>
   </div>
 </div>
</div>


  </div>
      
      )
    }
    
    
    