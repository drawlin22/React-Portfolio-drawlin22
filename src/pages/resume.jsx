
import React from 'react';
import {resumeData} from './resumeData';


function ContactInfo() {
 return (
   <div>
     <p><i>{resumeData.contact.address}</i></p>
     <p><i>{resumeData.contact.phone} {resumeData.contact.email}</i></p>
     <h1>{resumeData.contact.name}</h1>
     
   </div>
 );
}

function Skills() {
  return (
    <div>
      <h2>Skills/Talents/Abilitites</h2>
      <p>{resumeData.skills}</p>
    </div>
  );
 }
 
 function Summary() {
  return (
    <div>
      <h2>Summary</h2>
      <p>{resumeData.summary}</p>
    </div>
  );
 }

 function Education() {
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
 
 function WorkExperience() {
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

 function Proficiencies() {
  return (
    <div>
      <h2>Proficiencies</h2>
      <p>{resumeData.proficiencies}</p>
    </div>
  );
 }
 

export default function ResumePage() {
 return (
  <>
  <br></br>
    <a href="src/assets/resume/Resume.pdf" download="Resume">
     <button>Download My Resume</button>
   </a>
   <br></br>
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
