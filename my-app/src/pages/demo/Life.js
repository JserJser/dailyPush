import React from 'react'
import Child from './Child'
import {Button} from 'antd'
import './index.less'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  handleAdd=()=>{
    this.setState({
      count:this.state.count+1
    })

    
  }
  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    })
      
    
  }
  render(){
    return(<div>
      <p>react生命周期</p>
      <Button onClick={this.handleAdd}>点击</Button>
      <button onClick={this.handleClick} className="box">点击</button>
      <button onClick={this.handleAdd}>+</button>
      <p className="box">{this.state.count}</p>
      <Child name={this.state.count}/>
    </div>)
  }
}