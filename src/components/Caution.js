import React, { Component } from 'react'
import bgm2URL from '../media/bgm2.ogg';

export default class Caution extends Component {
  componentDidMount() {
    setTimeout(() => {
      fetch('http://192.168.4.99/H');
      setTimeout(() => {
        fetch('http://192.168.4.99/L');
      }, 2000);
    }, 2000);
    window.addEventListener("contextmenu", (e) => {e.preventDefault()});
  }

  render() {
    return (
      <div className="caution">
        <h1>小心頭上</h1>
        <audio autoPlay>
          <source src={bgm2URL} type="audio/ogg" />
        </audio>
      </div>
    )
  }
}
