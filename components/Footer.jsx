import React from 'react';
import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Smart Gadgets | All rights reserverd @2022</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer