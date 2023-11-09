import React from 'react';
import gitHub from '../assets/img/Github.png';
import linkedIn from '../assets/img/linkedin.png';
import devTo from '../assets/img/Devto.png';

export function Footer() { /* footer links to my github, linkedin, and dev.to */
 return (
     <div>
         <div className="container">
             <div className="row">
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href={"https://github.com/drawlin22"} target="_blank" rel="noopener noreferrer"><img className="spin-on-hover" src ={gitHub} height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href="https://dev.to/drawlin22" target="_blank" rel="noopener noreferrer"><img className="spin-on-hover" src={devTo} height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href="https://www.linkedin.com/in/donnie-rawlings-7b33941a7" target="_blank" rel="noopener noreferrer"><img className="spin-on-hover" src={linkedIn}height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
             </div>
         </div>
     </div>
 );
}


