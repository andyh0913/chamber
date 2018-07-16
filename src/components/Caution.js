import React, { Component } from 'react'

export default class Caution extends Component {
  componentDidMount() {
    setTimeout(() => {
      fetch('http://192.168.4.99/H');
      setTimeout(() => {
        fetch('http://192.168.4.99/L');
      }, 2000);
    }, 2000);
  }

  render() {
    return (
      <div className="caution">
        <h1>小心頭上</h1>
      </div>
    )
  }
}
