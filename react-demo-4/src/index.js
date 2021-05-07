import React from 'react';
import ReactDOM from 'react-dom';
import Demo from'./demo.js'

const App = props => {
  const [n,setN] = React.useState(0)
  const [childVisible,setChildVisible] = React.useState(true)
  const onClick = () => {
    setN(n+1)
  }

  React.useEffect(() => {
    console.log('useEffect');
  },[n])
  return (
    <div>
      n:{n}
      <button onClick={onClick}>+1</button>
      {childVisible ? <button onClick={()=>setChildVisible(false)}>show</button>:<button onClick={()=>setChildVisible(true)}>hidden</button>}
      {childVisible ? <Child></Child> : null}
      <Demo></Demo>
    </div>
  )
}

const Child = () => {
  React.useEffect(()=>{
    return()=>{
      console.log('销毁了');
    }
  })
  return (
    <div>child</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

