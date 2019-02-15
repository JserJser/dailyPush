import React from 'react'
export default class Child extends React.Component{
  constructor(props){
    super(props)
    this.state=0
  }
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    console.log('did mount')
  }
  componentWillReceiveProps(newProps){
    console.log('will props',newProps)
  }
  shouldComponentUpdate(){
    console.log('shouldupdate')
    return true
  }
  componentDidUpdate(){
    console.log('didupdate')
  }
  render(){
    return(
      <div>
        <p>这是用来测试子组件的生命周期</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}