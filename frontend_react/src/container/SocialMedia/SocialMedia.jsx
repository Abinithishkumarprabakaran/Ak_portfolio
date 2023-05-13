import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className='app__socialmedia'>
      <div>
        <FiMail />
      </div>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  )
}

export default SocialMedia
