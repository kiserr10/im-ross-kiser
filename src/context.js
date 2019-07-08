import React, { Component } from 'react';


export const Context = React.createContext()

export class Provider extends Component {
  state = {}

  render() {
    return(
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer