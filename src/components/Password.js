import React, { Component } from 'react'

import keyboardURL from '../img/keyboard.jpg';

export default class Password extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    let {history} = this.props;
    window.addEventListener('keypress', (e) => {
      if(e.keyCode == 13){
        if(document.getElementById("password").value == "rachel") history.push("/game");
      }
    })
  }
  render() {
    return (
      <div className="background">
        <img src={keyboardURL} />
        <input id="password" type="text" className="password" autoFocus align="center" maxLength="6" />
      </div>
    )
  }
}
