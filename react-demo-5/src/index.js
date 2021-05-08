import React from 'react';
import ReactDOM from 'react-dom';

let _state = []
let index = 0
const myUseState = initialValue => {
  const currentIndex = index 
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]  
  const setState = newValue => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1
  return [_state[currentIndex],setState]
}
const render = () => {
  index = 0
  ReactDOM.render(<App></App>,document.getElementById('root'))
}

const App = props => {
  const [n,setN] = myUseState(0)
  const [m,setM] = myUseState(0)
  const [z,setZ] = myUseState(0)
  const onClick = () => {
    setN(n+1)
  }
  const onClick2 = () => {
    setM(m+1)
  }
  const onClick3 = () => {
    setZ(z+1)
  }
  return (
    <div>
      n:{n}
      <button onClick={onClick}>+1</button>
      m:{m}
        <button onClick={onClick2}>+1</button>
        z:{z}
        <button onClick={onClick3}>+1</button>
    </div>

  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


