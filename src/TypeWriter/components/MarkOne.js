import React from 'react'
import Typewriter from 'typewriter-effect'

const MarkOne = () => {
  return (
    <div className='mark'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hi I am Yogi")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Yogendra Awasthi")
            .start();
        }}
      />
    </div>
  )
}

export default MarkOne