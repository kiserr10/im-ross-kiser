import React, { Component } from 'react'
import portrait from '../../assets/images/ross_face.png'
import data from '../../assets/json/core_content.json';


class About extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-bio">
          <h1>me.</h1>
          <p>{data.bio}</p>
        </div>
        <img className="art-face" src={portrait} alt="Ross Abstract Face" />
      </div>
    )
  }
}

export default About;