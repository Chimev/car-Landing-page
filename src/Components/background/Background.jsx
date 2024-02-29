import React from 'react'
import './background.css'
import images from '../../constant/images'
const Background = ({playStatus, heroCount}) => {
  
  if(playStatus) {
    return (
      <video className='background' autoPlay loop muted >
        <source src={images.video1} type='video/mp4' />
      </video>
    )

  }
  else if(heroCount === 0){
    return <img src={images.image1} className='background' alt="" />
  }
  else if(heroCount === 1){
    return <img src={images.image2} className='background' alt="" />
  }
  else if(heroCount === 2){
    return <img src={images.image3} className='background' alt="" />
  }


}

export default Background