import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphaA: 0,
      alphaB: 0,
      alphaC: 0,
      X: 0,

      betaA: 0,
      betaB: 0,
      betaC: 0,
      Y: 0,

      gammaA: 0,
      gammaB: 0,
      Z: 0,

      IV: 0,
      V: 0
    };

    this.alphaAChange = this.alphaAChange.bind(this);
    this.alphaBChange = this.alphaBChange.bind(this);
    this.alphaCChange = this.alphaCChange.bind(this);
    this.alphaXChange = this.alphaXChange.bind(this);
    this.thitaChange  = this.thitaChange.bind(this);
    this.constantChange = this.constantChange.bind(this);
  }
  
  alphaAEffects(value) {    
    this.setState({X: value*10 }); //A = 10% of X
    this.setState({IV: value/0.15 }); //A = 15% of Thita
    this.setState({V: value*5 }); //A = 20% of Constant    

    this.setState({alphaB : value/20});//B = 5% of A

    var c = value*10 - (value + value/20);
    this.setState({alphaC : c}); // C = X - (A + B)

    var y = value*10 - value/0.15;
    this.setState({Y : y}); //Thita  = X - Y

    var z = (value*5 - (value*10));
    this.setState({Z : z}); //constant = X + Z   
  }

  alphaXEffects(value) {
    this.setState({IV: (value - parseFloat(this.state.Y)) }); //thita = X-Y 
    this.setState({V: (value + parseFloat(this.state.Z)) }); //constant = X+Z
  }

  alphaAChange(event) {
    var value = parseFloat(event.target.value);
    this.setState({alphaA: value});
    
    this.alphaAEffects(value);    
  }

  alphaBChange(event) {
    var value = parseFloat(event.target.value);
    this.setState({alphaB: value});
    this.setState({alphaA: 20*value});//B = 5% of A
    this.alphaAEffects(20*value);    
  }

  alphaCChange(event){
    var value = parseFloat(event.target.value);
    this.setState({alphaC: value});
    var a = parseFloat(this.state.alphaA);
    var b = parseFloat(this.state.alphaB);
    var x = a + b + value;
    this.setState({X: x }); // X = A + B + C
    //this.setState({alphaA: x/10 });
    this.alphaXEffects(x);    
  }

  alphaXChange(event){
    var value = parseFloat(event.target.value);
    this.setState({X: value});
    this.setState({alphaA: value/10});//A = 10% of X
    this.alphaAEffects(value/10);    
  }

  thitaChange(event){
    var value = parseFloat(event.target.value);
    this.setState({IV: value});
    this.setState({alphaA: value*0.15});//A = 15% of Thita
    this.alphaAEffects(value*0.15); 
  }

  constantChange(event){
    var value = parseFloat(event.target.value);
    this.setState({V: value});
    this.setState({alphaA: value/5});//A = 20% of Constant
    this.alphaAEffects(value/5);
  }

  render() {
    return (
      <div>
        <h2> ALPHA </h2>        
        alphaA = <input type="number" value={this.state.alphaA} onChange={this.alphaAChange} />
        alphaB = <input type="number" value={this.state.alphaB} onChange={this.alphaBChange} />
        alphaC = <input type="number" value={this.state.alphaC} onChange={this.alphaCChange} />
        X      = <input type="number" value={this.state.X} onChange={this.alphaXChange} />

        <h2> BITA </h2>
        betaA = <input type="number" value={this.state.betaA} onChange={this.alphaChange} />
        betaB = <input type="number" value={this.state.betaB} onChange={this.alphaChange} />
        betaC = <input type="number" value={this.state.betaC} onChange={this.alphaChange} />
        Y     = <input type="number" value={this.state.Y} onChange={this.alphaChange} />

        <h2> GAMMA </h2>
        gammaA = <input type="number" value={this.state.gammaA} onChange={this.alphaChange} />
        gammaB = <input type="number" value={this.state.gammaB} onChange={this.alphaChange} />
        Z      = <input type="number" value={this.state.Z} onChange={this.alphaChange} />

        <h2> THITA </h2>        
        IV     = <input type="number" value={this.state.IV} onChange={this.thitaChange} />

        <h2> CONSTANT </h2>        
        V      = <input type="number" value={this.state.V} onChange={this.constantChange} />

      </div>    
    );
  }
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

      // alphaA: props.alphaA,
      // alphaB: props.alphaB,
      // alphaC: props.alphaC,
      // X: '',

      // betaA: props.betaA,
      // betaB: props.betaB,
      // betaC: props.betaC,
      // Y: props.Y,

      // gammaA: props.gammaA,
      // gammaB: props.gammaB,
      // Z: props.Z,

      // IV: props.IV,

      // V: props.V,

      // name: props.name,
      // status: props.status
//     };
//     this.calculateValue = this.calculateValue.bind(this);
//     this.changeState = this.changeState.bind(this);
//   }


//   changeState = (key, value) => {
//     this.setState({  
//       key : value 
//     });
//     console.log(key, "   ===    " ,  value);    
//   }
  
//   calculateValue(key, value){
//     this.changeState(key, value);
//     switch(key) {
//       case 'alphaA':
        // this.changeState('X', value*10);
        // this.changeState('IV', value*0.15);
        // this.changeState('V', value*20);
//         break;
      
//     }
// }

//   render() {
//     return (
//       <div>
// <input className="form-control" type="text" value={this.state.name} id={'todoName' + this.props.id} onChange={e => this.onTodoChange(e.target.value)}/>
//         <h2> ALPHA </h2>        
//         alphaA = <input type="number" value={this.state.alphaA} onChange={e=>this.calculateValue('alphaA', parseFloat(e.target.value))} />
//         alphaB = <input type="number" value={this.state.alphaB} onChange={e=>this.calculateValue('alphaB', parseFloat(e.target.value))} />
//         alphaC = <input type="number" value={this.state.alphaC} onChange={e=>this.calculateValue('alphaC', parseFloat(e.target.value))} />
//         X      = <input type="number" value={this.state.X} onChange={e=>this.calculateValue('X', parseFloat(e.target.value))} />

//         <h2> BITA </h2>
//         betaA = <input type="number" value={this.state.betaA} onChange={e=>this.calculateValue('betaA', parseFloat(e.target.value))} />
//         betaB = <input type="number" value={this.state.betaB} onChange={e=>this.calculateValue('betaB', parseFloat(e.target.value))} />
//         betaC = <input type="number" value={this.state.betaC} onChange={e=>this.calculateValue('betaC', parseFloat(e.target.value))} />
//         Y     = <input type="number" value={this.state.Y} onChange={e=>this.calculateValue('Y', parseFloat(e.target.value))} />

//         <h2> GAMMA </h2>
//         gammaA = <input type="number" value={this.state.gammaA} onChange={e=>this.calculateValue('gammaA', parseFloat(e.target.value))} />
//         gammaB = <input type="number" value={this.state.gammaB} onChange={e=>this.calculateValue('gammaB', parseFloat(e.target.value))} />
//         Z      = <input type="number" value={this.state.Z} onChange={e=>this.calculateValue('Z', parseFloat(e.target.value))} />

//         <h2> THITA </h2>        
//         IV     = <input type="number" value={this.state.IV} onChange={e=>this.calculateValue('IV', parseFloat(e.target.value))} />

//         <h2> CONSTANT </h2>        
//         V      = <input type="number" value={this.state.V} onChange={e=>this.calculateValue('V', parseFloat(e.target.value))} />

//       </div>
//     );
//   }
// }

export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//       show: true
//     };
//   }

//   IncrementItem = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
//   DecreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
//   }
//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.IncrementItem}>Click to increment by 1</button>
//         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//         <button onClick={this.ToggleClick}>
//           { this.state.show ? 'Hide number' : 'Show number' }
//         </button>
//         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//       </div>
//     );
//   }
// }

// export default App;
