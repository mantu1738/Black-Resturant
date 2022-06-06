import React from "react";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg section__padding flex__center">
    <div className="app__chef-content">
      <div className="app__chef-content_img">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__chef-content_word">
        <p className="p__cormorant heading">Chef's Word</p>
        <img src={images.spoon} alt="spoon" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <img src={images.quote} alt="quote" />
        <p className="p__opensans word">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ducimus vitae voluptatibus labore iure aliquam molestias harum alias
          incidunt consequatur nulla eos recusandae magnam in minus qui, dicta
          nesciunt cum!
        </p>
        <p className="p__cormorant">Kevin Luo</p>
        <p className="p__opensans">Head Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
