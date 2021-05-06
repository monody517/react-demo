import React from 'react';
import ReactDOM from 'react-dom';


let n = 0
const App = () =>
React.createElement('div',null,[
  n,
  React.createElement('button',{
    onClick:() =>{
      n+=1;
      console.log(n);
      ReactDOM.render(App(),document.querySelector('#app'));
    }
  },"+1")
])

ReactDOM.render(App(),document.querySelector('#app'));

