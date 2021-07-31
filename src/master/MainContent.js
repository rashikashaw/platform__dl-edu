import React from "react";

import "./MainContent.css";
import LearningModule from "../modules/LearningModule";

//Website Layout Basics CSS - https://www.w3schools.com/css/css_website_layout.asp
//Website Layout Example, used below - https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog
function MainContent() {
  return (
    <div>
      <div class="row">
          <div class="card leftcolumn">
            <h2>JavaScript - Variables</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
          <div class="card rightcolumn">
            <h2>JavaScript - Data Types</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
      </div>
      <LearningModule />
    </div>
  );
}

export default MainContent;
