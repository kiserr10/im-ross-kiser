import React, { useEffect, useRef } from 'react'
import portrait from '../../assets/images/ross_face_split.png'
import data from '../../assets/json/core_content.json';
import { TimelineLite, Back, Power1 } from 'gsap'

const About = () => {
  let bioRef = useRef(null);
  let titleRef = useRef(null);
  let tl = new TimelineLite({ delay: .3, paused: true });


  useEffect(() => {
    tl.from(titleRef, .7, { autoAlpha: 0, x: -200, ease: Back.easeInOut })
      .from(bioRef, .7, { autoAlpha: 0, y: 100, ease: Power1.easeInOut })
      .play()
  // eslint-disable-next-line 
  }, [])


  return (
    <div className="about-wrapper">
      <div className="about-bio">
        <h1 ref={element => titleRef = element}>me.</h1>  
        <p ref={element => bioRef = element}>{data.bio}</p>
      </div>
      <div className="art-face">
      </div>
    </div>
  )
} 

export default About; 