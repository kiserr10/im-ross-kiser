import React, { Component } from 'react';


export const Context = React.createContext()

export class Provider extends Component {
  state = {
    isSideOpen: false
  }

  updateSideBarStatus = () => {
    this.setState({ isSideOpen: !this.state.isSideOpen })
  }

  render() {
    return(
      <Context.Provider value={{ 
        state: this.state,
        updateSideBarStatus: this.updateSideBarStatus 
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer