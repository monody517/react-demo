import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {x:1}
  }
  
  onClick = () => {
    this.setState({x:this.state.x+1},
      () => {this.setState({x:this.state.x+1})})
  }
  onClick2 = () => {
    this.setState((state) => ({x:state.x+1}))
    this.setState((state) => ({x:state.x+1}))
  }
  render(){
    return(
      <div className="App">
        App
        <button onClick = {this.onClick}>+1</button>
        <B name={this.state.x}></B>
        <Demo />
      </div>
    )
  }
}

class B extends React.Component{
  componentWillReceiveProps(nextProps,nextContext){
    console.log('props变化了');
  }
  render(){
    return(
      <div className="B">
        {this.props.name}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

