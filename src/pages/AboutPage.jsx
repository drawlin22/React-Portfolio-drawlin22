import React from "react";

// This is a static page mocking an "About Us" section for our fake user data
import { workData } from "./workData";

export default function AboutPage() {
  return (
    <div className="container pt-4">
         {workData.map((article) => (
     <article id={article.id} key={article.id}>
      <p>
        Project Title: {article.title}
       </p>
       <p>
          Project Description: {article.description}
       </p>
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
      
       <section className="card-content"></section>
     </article>
   ))}
    </div>
  );
}