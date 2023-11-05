import React from "react";

// This is a static page mocking an "About Us" section for our fake user data
import { workData } from "./workData";

export default function WorkPage() {
  return (
    <div className="container pt-4 bg-info">
         {workData.map((article) => (
     <article id={article.id} key={article.id}>
      <p>
       <strong>Project Title: </strong> {article.title}
       </p>
       <p>
          <strong>Project Description:</strong> {article.description}
       </p>
       <br/>
      <br/>
       <a href={article.link}>
         <img
           src={article.imageSrc}
           title={article.title}
           alt={article.title}
           height="500px"
           width="400px"
           className="a"
         />
        
       </a>
      <br/>
      <br/>
       <section className="card-content"></section>
     </article>
   ))}
    </div>
  );
}