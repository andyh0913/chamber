import React, { Component } from 'react'

import girlURL from '../img/girl.png'

export default class Game extends Component {
  constructor(){
    super();
    this.state = {
      waitTime: 10,
      intervalId: ""
    }
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  timer = () => {
    this.setState({waitTime: this.state.waitTime - 1});
    if(this.state.waitTime<=0){
      let {history} = this.props;
      history.push("/caution");
    }
  }
  render() {
    return (
      <div className="game">
        <img src={girlURL} width="25%"/>
        <img src={girlURL} width="25%"/>    
      </div>
    )
  }
}
