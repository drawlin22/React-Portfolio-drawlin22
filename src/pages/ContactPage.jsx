import React from 'react';
import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
// import Profile from '../components/UI/ProfileSections/ProfileDetailed';
// import Container from '../components/UI/ListItem';

// import API from '../utils/API';

export default function ContactPage() {
 
  return (
    <>
    <p>WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address</p>
               
               {/* <form action="mailto:tacobellboi@yahoo.com" method="post" class="form">

                   <label for="fname">First Name</label>
                   <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
               
                   <label for="lname">Last Name</label>
                   <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                   <label for="subject"></label>
                   <textarea id="subject" name="subject" placeholder="How Can I help?" style="height:200px"></textarea>
               
                   <input type="submit" value="Submit"/>
               
                 </form> */}

    </>
  );
}
