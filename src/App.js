import React, { Component } from 'react'
import './style_sheets/main.scss'
import { Provider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <Provider>
        <Router>
          <div className="app-container">
            <h1>ROSS KISER HAS ARRIVED!!!</h1>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
