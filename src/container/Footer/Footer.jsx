import React from 'react';

import './Footer.css';

import {Newsletter,FooterOverlay} from '../../components';

import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';

import {images} from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">

    <FooterOverlay />

    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">

        <h1 className="app__footer__headtext">Contact us</h1>


        <p className="p__opensans">Dj Ruoro Public Address Services</p>

        <p className="p__opensans">+254764568907</p>

        <p className="p__opensans">+674521526383</p>


      </div>

      <div className="app__footer-links_logo">


          <img src={images.gericht} alt="footer logo"/>

          <p className="p__opensans">"The best way to find yourself is to lose yourself in service of others."</p>

          <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />

          <div className="app__footer-links_icons">

            <FiFacebook />

            <FiTwitter />

            <FiInstagram />




          </div>

      </div>

      <div className="app__footer-links_work">


      <h1 className="app__footer__headtext">Working Hours</h1>


      <p className="p__opensans">Monday-Friday:</p>

      <p className="p__opensans">10:00 Am - 02:00 Pm</p>

      <p className="p__opensans">Sat-Sun</p>

      <p className="p__opensans">10:00 Am - 03:00Pm </p>


      </div>




    </div>

    <div className="footer__copyright">

      <p className="p__opensans">2022 Gericht.All right reserved</p>


    </div>
  </div>
);

export default Footer;
