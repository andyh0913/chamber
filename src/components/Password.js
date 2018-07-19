import React, { Component } from 'react'

import keyboardURL from '../img/keyboard.jpg';
import bgm1URL from '../media/bgm1.ogg';

export default class Password extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    let {history} = this.props;
    window.addEventListener('keypress', (e) => {
      if(e.keyCode == 13){
        if(document.getElementById("password").value == "rachel") history.push("/game");
        else {
          window.alert("似乎有什麼搞錯了......");
        }
      }
    })
    window.addEventListener("contextmenu", (e) => {e.preventDefault()});
  }
  render() {
    return (
      <div className="background">
        <img src={keyboardURL} />
        <input id="password" type="text" className="password" autoFocus align="center" maxLength="6" />
        <audio autoPlay>
          <source src={bgm1URL} type="audio/ogg" />
        </audio>
      </div>
    )
  }
}
