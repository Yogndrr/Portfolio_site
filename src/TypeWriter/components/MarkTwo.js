import React from 'react'
import Typewriter from 'typewriter-effect'

const MarkTwo = () => {

  const skills = [
    "Web Developer",
    "Web Designer",
    "UI/UX Designer"
  ]

  const messages = {
    autoStart: true,
    loop: true,
    delay: 40,
    strings: skills
  }

  return (
    <div className='mark'>
      <Typewriter options={messages} />
    </div>
  )
}

export default MarkTwo