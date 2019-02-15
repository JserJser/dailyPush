import React from 'react'
import 'antd/dist/antd.css'
import {Card,Button,notification} from 'antd'
import './notice.css'
export default class Notice extends React.Component{
  openNotification=(type,direction)=>{
    if(direction){
      notification.config({
        placement:direction
      })
    }
    notification[type]({
      message:'我老大很牛逼',
      description:'我老大代码不仅写的牛逼，而且有职业精神，值得我学习'
    })
  }
  render(){
    return(
      <div>
        <Card title="通知提醒框" className="card-wrap" style={{marginBottom:10}}>
          <Button type="primary" onClick={()=>{this.openNotification('success')}}>success</Button>
          <Button type="primary" onClick={()=>{this.openNotification('warning')}}>warning</Button>
          <Button type="primary" onClick={()=>{this.openNotification('info')}}>info</Button>
          <Button type="primary" onClick={()=>{this.openNotification('error')}}>error</Button>          
        </Card>
        <Card title="通知提醒框方向" className="card-wrap" style={{marginBottom:10}}>
          <Button type="primary" onClick={()=>{this.openNotification('success','topLeft')}}>success</Button>
          <Button type="primary" onClick={()=>{this.openNotification('warning','topRight')}}>warning</Button>
          <Button type="primary" onClick={()=>{this.openNotification('info','bottomLeft')}}>info</Button>
          <Button type="primary" onClick={()=>{this.openNotification('error','bottomRight')}}>error</Button>          
        </Card>
      </div>
    )
  }
}