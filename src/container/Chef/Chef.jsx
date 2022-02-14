import React from 'react';

import './Chef.css';

import {images} from '../../constants'
import {SubHeading} from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img-reverse">


      <img src={images.chef} alt="chef" />


    </div>


    <div className="app__wrapper_info">

      <SubHeading title="Chef's word" />

      <h1 className="headtext__cormorant">What we believes in</h1>


      <div className="app__chef-content">

        <div className="app__chef-content_quote">

          <img src={images.quote} alt="quote"/>

          <p className="p__opensans">Lorem Ipsum is simply printer took a galley of.</p>


        </div>


        <p className="p__opensans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>


      </div>

      <div className="app__chef-sign">

        <p>Kelvin Luo</p>
        <p className="p__opensans">Chef & Founder</p>

        <img src={images.sign} />


      </div>


    </div>
    
  </div>
);

export default Chef;
