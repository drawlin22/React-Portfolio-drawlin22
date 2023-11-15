
import React from 'react'; 
import {resumeData} from './resumeData'; /* importing the resume data */


function ContactInfo() { /* contact info */
 return (
   <div>
     <p><i>{resumeData.contact.address}</i></p>
     <p><i>{resumeData.contact.phone} {resumeData.contact.email}</i></p>
     <h1>{resumeData.contact.name}</h1>
     
   </div>
 );
}

function Skills() { /* skills */
  return (
    <div>
      <h2>Skills/Talents/Abilitites</h2>
      <p>{resumeData.skills}</p>
    </div>
  );
 }
 
 function Summary() { /* summary */
  return (
    <div>
      <h2>Summary</h2>
      <p>{resumeData.summary}</p>
    </div>
  );
 }

 function Education() { /* education */
  return (
    <div>
      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <p><strong>{edu.institution}  </strong>{ edu.location}</p>
          <p><i>{edu.degree}</i></p>
          <p>GPA {edu.gpa}</p>
          <p>Graduation: {edu.graduationDate}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
 }
 
 function WorkExperience() { /* work experience */
  return (

    <div>
      <h2>Work Experience</h2>
      {resumeData.workExperience.map((work, index) => (
        <div key={index}>
          <p>{work.company}</p>
          <p>{work.position}</p>
          <p>{work.duration}</p>
        </div>
      ))}
    </div>
  );
 }

 function Proficiencies() { /* proficiencies */
  return (
    <div>
      <h2>Proficiencies</h2>
      <p>{resumeData.proficiencies}</p>
    </div>
  );
 }
 

export default function ResumePage() { /* redering the resume page with each component */
 return (
  <>
  
   <br></br>
   <Proficiencies />,
  {/* <ContactInfo />, */}
   <Skills />,
   <Summary />,
   <Education />,
    <WorkExperience />
   </>
 )
}
