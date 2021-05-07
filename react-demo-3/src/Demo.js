import React from 'react';

class Demo extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            x:0
        }
    }
    onClick = () => {
        this.setState((state) => ({x:state.x+1}))
        this.setState((state) => ({x:state.x-1}))
    }
    // shouldComponentUpdate(newProps,newStates){
    //     if(this.state.n === newStates.n){
    //         return false
    //     }else{
    //         return true
    //     }
    // }
    render(){
        console.log('render了一次');
        return (
            <div>
                {this.state.x}
                <button onClick={this.onClick}>+1</button>
            </div>
        )
    }
}

export default Demo