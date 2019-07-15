import React from 'react'
import data from '../../assets/json/core_content';
import { ReactComponent as Google } from '../../assets/images/icons/google.svg'; 
import { ReactComponent as Facebook } from '../../assets/images/icons/facebook.svg'; 
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg'; 
import { ReactComponent as Github } from '../../assets/images/icons/github.svg'; 
import { ReactComponent as LinkedIn } from '../../assets/images/icons/linkedin2.svg'; 

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

  return (
    <div className="contact-wrapper">
      <h1>friend.</h1>
      <div className="contacts-box">
        {data.contacts.map((contact) => {
          return(
            <div className="contact">
              {createIcon(contact)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Contact