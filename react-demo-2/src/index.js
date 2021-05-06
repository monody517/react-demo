import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return(
    <div className="App">
      爸爸
      <Son />
    </div>
  )
}

class Son extends React.Component{
  constructor(){
    super();
    this.state = {
      n:0
    };
  }
  add(){
    this.setState({n:this.state.n + 1})
  }
  render(){
    return (
      <div className="Son">
        儿子 n:{this.state.n}
        <button onClick={()=>this.add()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  const [n,setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子 n:{n}
      <button onClick={() => setN(n+1)}>+1</button>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

