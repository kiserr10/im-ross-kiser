import React, { useEffect, useRef } from 'react'
import data from '../../assets/json/core_content';
import { ReactComponent as Google } from '../../assets/images/icons/google.svg'; 
import { ReactComponent as Facebook } from '../../assets/images/icons/facebook.svg'; 
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg'; 
import { ReactComponent as Github } from '../../assets/images/icons/github.svg'; 
import { ReactComponent as LinkedIn } from '../../assets/images/icons/linkedin2.svg'; 
import { TimelineLite, Back } from 'gsap';

const createIcon = (icon) => {
  switch(icon){
    case 'Gmail':
      icon = <Google />
      break;
    case 'Facebook':
      icon = <Facebook />
      break;
    case 'Instagram':
      icon = <Instagram />
      break;
    case 'Github':
      icon = <Github />
      break;
    case 'LinkedIn':
      icon = <LinkedIn />
      break;
    default:
      break;
  }
  return icon; 
}


const Contact = () => {
  let contactRefs = useRef([])
  let currentRef = contactRefs.current

  useEffect(() => {
    let tl = new TimelineLite({ delay: .5 })
    tl.staggerFrom(currentRef, 1, { autoAlpha: 0, y: 200, ease: Back.easeOut.config(1) }, .1, '-=.2')
  })


  return (
    <div className="contact-wrapper">
      <h1>friend.</h1>
      <div className="contacts-box">
        {data.contacts.map((contact, i) => {
          return(
            <div 
              key={i} 
              className="contact" 
              ref={el => contactRefs.current[i] = el}
            >
              <a href={contact.url} target="_blank" rel="noopener noreferrer">{createIcon(contact.name)}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Contact