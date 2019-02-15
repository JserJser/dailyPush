import React from 'react'
import 'antd/dist/antd.css'
import { Card,Button,message } from 'antd';
export default class Messages extends React.Component{
  showMessage=(type)=>{
    message[type]('恭喜你，你是写完了这个项目')
  }
  render(){
    return(
      <div>
        <Card className="Card-wrap" title="全局提示框">
        <Button type="primary" onClick={()=>{this.showMessage('success')}}>success</Button>
        <Button type="primary" onClick={()=>{this.showMessage('warning')}}>warning</Button>
        <Button type="primary" onClick={()=>{this.showMessage('info')}}>info</Button>
        <Button type="primary" onClick={()=>{this.showMessage('error')}}>error</Button>
        </Card>
      </div>
    )
  }
}