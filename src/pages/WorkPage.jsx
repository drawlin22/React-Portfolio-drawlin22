import React from "react";

import { workData } from "./workData";

export default function WorkPage() {
  return (
    <div className="container pt-4">
      <div className="row">
 {workData.map((article) => (
   <div className="col-md-4" key={article.id}>
<div className="card" key={article.id}>
 <div className="card-body" style={{height: '425px'}}>
   <h5 className="card-title text-center"><strong>{article.title}</strong></h5>
   <p className="card-text">{article.description}</p>
   <a href={article.repo} target="_blank" rel="noopener noreferrer" className="card-link glow-on-hover">Github Repo</a>
   <a href={article.link}>
     <img src={article.imageSrc} title={article.title} alt={article.title} className="card-img-bottom glow-on-hover" 
     height="200px" width="50px"/>
   </a>
 </div>
</div>
<br></br>
   </div>
 ))}
</div>
    </div>
  );
}