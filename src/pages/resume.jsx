
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
          <p>{edu.institution}</p>
          <p>{edu.degree}</p>
          <p>{edu.gpa}</p>
          <p>{edu.graduationDate}</p>
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
 

export default function ResumePage() {
 return (
  <>
  <ContactInfo />,
   <Skills />,
   <Summary />,
   <Education />,
    <WorkExperience />
   </>
 )
}
