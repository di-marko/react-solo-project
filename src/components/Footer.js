import React from 'react';
import twitter from '../images/twitter-square-brands.svg';
import facebook from '../images/facebook-square-brands.svg';
import instagram from '../images/instagram-square-brands.svg';
import linkedin from '../images/linkedin-brands.svg';
import discord from '../images/discord-brands.svg';

export default function Footer() {
  return (
    <div className="footer">
      <img className="icon" src={twitter} alt="Twitter" />
      <img className="icon" src={facebook} alt="FB" />
      <img className="icon" src={instagram} alt="Instagram" />
      <img className="icon" src={linkedin} alt="LinkedIn" />
      <img className="icon" src={discord} alt="Discord" />
    </div>
  );
}
