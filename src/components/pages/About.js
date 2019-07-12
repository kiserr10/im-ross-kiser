import React, { Component } from 'react'
import portrait from '../../assets/images/ross_face.png'


class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-bio">
          <p>Long before I became a web developer, technology has been central to my creative practice. I self-taught my way into audio engineering and started my own electronic music record label which has gone on to sign several internationally acclaimed acts. After developing this part of my life for over half a decade, I encountered the world of code. A deeper dimension of technology with which I instantly clicked, it was the perfect alignment of design, creativity, and problem solving that I had been seeking. In 2017, I decided to dive in fully and immerse myself in the culture of development. I continue to use these skillsets as a creative avenue to influence the worlds of my other passions, such as music, rock climbing, and food culture.</p>
        </div>
        <img className="art-face" src={portrait} alt="Ross Abstract Face" />
      </div>
    )
  }
}

export default About;