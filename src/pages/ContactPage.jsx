import React, { useState } from 'react';

export default function ContactPage() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [nameError, setNameError] = useState("");
 const [emailError, setEmailError] = useState("");
 const [messageError, setMessageError] = useState("");

 const isValidEmail = (email) => {
   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   return regex.test(email);
 };

 const handleBlur = (event) => {
   switch (event.target.name) {
     case "name":
       setNameError(name ? "" : "Name is required");
       break;
     case "email":
       setEmailError(isValidEmail(email) ? "" : "Invalid email address");
       break;
     case "message":
       setMessageError(message ? "" : "Message is required");
       break;
     default:
       break;
   }
 };

 const handleSubmit = (event) => {
   event.preventDefault();

   setNameError(name ? "" : "Name is required");
   setEmailError(isValidEmail(email) ? "" : "Invalid email address");
   setMessageError(message ? "" : "Message is required");

   if (!name || !email || !message || !isValidEmail(email)) {
     return;
   }

   // Handle form submission here
 };

 return (
   <>
     <form onSubmit={handleSubmit}>
       <label>
         Name:
         <input
           type="text"
           name="name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           onBlur={handleBlur}
         />
         {nameError && <p>{nameError}</p>}
       </label>
       <label>
         Email:
         <input
           type="text"
           name="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           onBlur={handleBlur}
         />
         {emailError && <p>{emailError}</p>}
       </label>
       <label>
         Message:
         <textarea
           name="message"
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           onBlur={handleBlur}
         />
         {messageError && <p>{messageError}</p>}
       </label>
       <input type="submit" value="Submit" />
     </form>
   </>
 );
}
