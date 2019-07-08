import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Consumer } from '../../../context';
import Home from '../../pages/Home';
import About from '../../pages/About';

//
class PageContent extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.content = null
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Consumer>
        {(context) => (
          <div className="page-content" ref={content => this.content = content}>
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={this.props.location.key}
                timeout={{ enter: 1400, exit: 300 }}
                classNames={'fade'}
              >
                <section className="route-section">
                  <Switch location={this.props.location}>
                    <Route exact path='/' component={Home} />  
                    <Route path='/about' component={About} />  
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
            { this.props.children }
          </div>
        )}
        </Consumer>
      )
    }
  }

export default withRouter(PageContent);