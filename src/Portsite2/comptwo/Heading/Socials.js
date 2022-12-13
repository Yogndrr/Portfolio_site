import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs"

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
    </div>
  )
}

export default Socials