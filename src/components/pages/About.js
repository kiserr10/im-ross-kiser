import React, { Component } from 'react'
import portrait from '../../assets/images/ross_face.png'


class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <img className="art-face" src={portrait} alt="Ross Abstract Face" />
      </div>
    )
  }
}

export default About;