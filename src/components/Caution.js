import React, { Component } from 'react'
import bgm2URL from '../media/bgm2.ogg';
import alarmURL from '../media/alert.ogg';
import explodeURL from '../media/explode.ogg';

export default class Caution extends Component {
  constructor() {
    super();

    this.state = {
      alarmPlayed: false,
      explodePlayed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('http://192.168.4.99/H');
      setTimeout(() => {
        fetch('http://192.168.4.99/L');
      }, 2000);
    }, 2000);
    window.addEventListener("contextmenu", (e) => {e.preventDefault()});
    document.getElementById("bgm2").play();

    setInterval(() => {
      fetch('http://192.168.4.1/status').then((data) => {
        return data.json();
      }).then((data) => {
        if(this.state.explodePlayed) return;
        if(data.alarm && !this.state.alarmPlayed) {
          this.setState({ alarmPlayed: true });
          document.getElementById('alarm').play();
        }
        if(data.explode && !this.state.explodePlayed) {
          this.setState({ explodePlayed: true });
          document.getElementById('alarm').pause();
          document.getElementById('bgm2').pause();
          setTimeout(() => {
            document.getElementById('explode').play();
          }, 500);
        }
      })
    }, 200);
  }

  render() {
    return (
      <div className="caution">
        <h1>小心頭上</h1>
        <audio id="bgm2">
          <source src={bgm2URL} type="audio/ogg" />
        </audio>
        <audio id="alarm" loop="loop">
          <source src={alarmURL} type="audio/ogg" />
        </audio>
        <audio id="explode">
          <source src={explodeURL} type="audio/ogg" />
        </audio>
      </div>
    )
  }
}
