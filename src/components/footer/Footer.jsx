import React from 'react'
import './footer.css'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandTiktok } from 'react-icons/tb'




const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>Konstantinos Tzallas</a>

      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer"><TbBrandTiktok /></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Konstantinos Tzallas. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer