import React, { Component } from 'react'
// import portrait from '../../assets/images/ross_portrait.png'


class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="hero-image">
          <h1><span>Ross</span><br /><span>Kiser</span></h1>
          {/* <img src={portrait} alt="Ross Kiser Portrait" /> */}
        </div>
      </div>
    )
  }
}

export default Home;