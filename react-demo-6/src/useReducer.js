import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const initial = {
  n:0
}
const reducer = (state,action) => {
  if(action.type === 'add'){
    return{n:state.n+action.number}
  }else{
    throw new Error('unkown type')
  }
}
const App = props => {
  const [state,dispatch] = useReducer(reducer,initial)
  const onClick = () => {
    dispatch({type:'add',number:4})
  }
  return (
    <div>
      n:{state.n}
      <button onClick={onClick}>+1</button>
    </div>

  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

