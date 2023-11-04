import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
 

  return (
    <div className="container pt-4">
    
<p>
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
</p>

<footer>
<ul>
            <li class="footer"><a href="https://github.com/drawlin22"/> Github<a/></li>
            <li class="footer"><a href="https://www.instagram.com/"/>Instagram<a/></li>
            <li class="footer"><a href="https://www.linkedin.com/in/donnie-rawlings-7b33941a7"/>Linkedin<a/></li>
        </ul>
</footer>
    </div>
  );
}
