import React, { Component } from 'react'
import './style_sheets/main.scss'
import { Provider } from './context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/shared/Header';
import PageContent from './components/shared/PageContent';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <Provider>
        <Router>
          <div className="app-wrapper">
            <Route path='/' component={Header} />
            <Route path='/' component={PageContent} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
