import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  )
}

export default SocialMedia