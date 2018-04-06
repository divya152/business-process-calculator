import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
      alphaA: 0,
      alphaB: 0,
      alphaC: 0,
      alpha: 0,

      betaA: 0,
      betaB: 0,
      betaC: 0,
      
      gammaA: 0,
      gammaB: 0,

      thita: 0,

      constant: 0

    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  changeTitle = (value) => {
    this.setState({  alphaA : value  });
  }

  render() {
    return (
      <div>
        hello
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }

        <h2> ALPHA </h2>        
        alphaA = <input type="number"  onChange={e=>this.setState({  alphaA : parseInt(e.target.value)  })} />
        alphaB = <input type="number"  onChange={e=>this.setState({  alphaB : parseInt(e.target.value)  })} />
        alphaC = <input type="number"  onChange={e=>this.setState({  alphaC : parseInt(e.target.value)  })} />
        { this.state.show ? <h4> X  = { this.state.alphaA + this.state.alphaB + this.state.alphaC }</h4> : '' }

        <h2> BITA </h2>
        betaA = <input type="number"  onChange={e=>this.setState({  betaA : parseInt(e.target.value)  })} />
        betaB = <input type="number"  onChange={e=>this.setState({  betaB : parseInt(e.target.value)  })} />
        betaC = <input type="number"  onChange={e=>this.setState({  betaC : parseInt(e.target.value)  })} />
        { this.state.show ? <h4> Y  = { this.state.betaA + this.state.betaB + this.state.betaC }</h4> : '' }

        <h2> GAMMA </h2>
        gammaA = <input type="number"  onChange={e=>this.setState({  gammaA : parseInt(e.target.value)  })} />
        gammaB = <input type="number"  onChange={e=>this.setState({  gammaB : parseInt(e.target.value)  })} />
        { this.state.show ? <h4> Z  = { this.state.gammaA + this.state.gammaB  }</h4> : '' }

        <h2> THITA </h2>
        
        { this.state.show ? <h4> IV  = { this.state.thita }</h4> : '' }

        <h2> CONSTANT </h2>
        
        { this.state.show ? <h4> V  = { this.state.constant }</h4> : '' }

      </div>
    );
  }
}

export default App;
