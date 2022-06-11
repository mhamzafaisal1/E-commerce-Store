import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Muhammad Hamza Faisal All rights reserved</p>
      <p className="icons">
        <a href='https://twitter.com/HamzaFaisal_20/' target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
        <a href='' ><AiFillGithub /></a>
      </p>
    </div>
  )
}

export default Footer