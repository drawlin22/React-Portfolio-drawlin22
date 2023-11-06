import React from 'react';

export function Footer() {
 return (
     <div>
         <div className="container">
             <div className="row">
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href="https://github.com/drawlin22" target="_blank" rel="noopener noreferrer"><img src ="src/assets/img/Github.png" height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href="https://dev.to/drawlin22" target="_blank" rel="noopener noreferrer"><img src="src/assets/img/Devto.png"height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
               <div className="col">
                  <ul className ="list-unstyled">
                      <li className="footer"><a href="https://www.linkedin.com/in/donnie-rawlings-7b33941a7" target="_blank" rel="noopener noreferrer"><img src="src/assets/img/linkedin.png"height ="50px" width="50px"/></a></li>
                  </ul>
               </div>
             </div>
         </div>
     </div>
 );
}


