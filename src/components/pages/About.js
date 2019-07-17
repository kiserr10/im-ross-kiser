import React, { useEffect, useRef } from 'react'
import portrait from '../../assets/images/ross_face.png'
import data from '../../assets/json/core_content.json';
import { TweenMax, TimelineLite, Back, Power1 } from 'gsap'

const About = () => {
  let bioRef = useRef(null);
  let titleRef = useRef(null);
  let tl = new TimelineLite({ delay: .3 });


  useEffect(() => {
    tl.from(titleRef, .7, { autoAlpha: 0, x: -200, ease: Back.easeInOut })
      .from(bioRef, .7, { autoAlpha: 0, y: 100, ease: Power1.easeInOut })
  })

  return (
    <div className="about-wrapper">
      <div className="about-bio">
        <h1 ref={element => titleRef = element}>me.</h1>  
        <p ref={element => bioRef = element}>{data.bio}</p>
      </div>
      <img className="art-face" src={portrait} alt="Ross Abstract Face" />
    </div>
  )
} 

export default About; 