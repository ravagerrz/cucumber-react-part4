import React,  {Component}  from 'react';
import './App.css';


function App () {
  return (
  <div>
    <h1 className = "App">Welcome to my first appp:</h1>
    <Amount render={amount => <addition amount={amount} />} />
    
  </div>
);
}
 
class Amount extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      amount: 0,
    };
  }
 
  addition = () => {
    this.setState(state => ({ amount: state.amount=state.amount + 1 }));
  };
 
  
 
  render() {
    return (
      <div>
        <button type="button" onClick={this.addition} className = "App-header"> press button</button>
        <p className = "Appnumber">Addition: {this.state.amount}</p>
        {this.props.render(this.state.amount)}
      </div>
    );
  }
}
 


export default App;
