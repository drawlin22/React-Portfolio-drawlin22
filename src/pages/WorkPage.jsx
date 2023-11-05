import React from "react";

import { workData } from "./workData";

export default function WorkPage() {
  return (
    <div className="container pt-4">
         {workData.map((article) => (
     <article id={article.id} key={article.id}>
      <p>
       <strong>Project Title: </strong> {article.title}
       </p>
       <p>
          <strong>Project Description:</strong> {article.description}
       </p>

      <p>
        <strong>Github Repo:</strong>
        <a href= {article.repo} target="_blank" rel="noopener noreferrer">{article.repo}
        </a>
        </p>
       <a href={article.link}>
         <img
           src={article.imageSrc}
           title={article.title}
           alt={article.title}
           height="500px"
           width="1200px"
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