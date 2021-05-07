import React from 'react';

class Demo extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            width:undefined
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
    componentDidMount(){
        const x = document.querySelector('#x')
        const {width} = x.getBoundingClientRect()
        this.setState({width})
    }
    render(){
        console.log('render了一次');
        return (
            <div id='x'>
                {this.state.x}
                <button onClick={this.onClick}>+1</button>
                {this.state.width}
            </div>
        )
    }
}

export default Demo