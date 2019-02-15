import React from 'react'
import 'antd/dist/antd.css'
import {Card,Button,Modal} from 'antd'
import './modals.css'
export default class Modals extends React.Component{
  state={
    showModal1:false,
    showModal2:false,
    showModal3:false,
    showModal4:false
  }
  handleOpen=(type)=>{
    this.setState({
      [type]:true
    })
  }
  handleConfirm=(type)=>{
    // Modal.confirm()
    // Modal['confirm']
    // var a={confirm:function(){}}
    // a.confirm()
    // a['confirm']
    Modal['type']({
      title:'确认',
      content:'我会成为高级前端',
      onOk(){
        console.log('ok')
      },
      onCancel(){
        console.log('cancel')
      }

    })
  }
  render(){
    return(
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={()=>{this.handleOpen('showModal1')}}>open</Button>
          <Button type="primary" onClick={()=>{this.handleOpen('showModal2')}}>自定义页脚</Button>
          <Button type="primary" onClick={()=>{this.handleOpen('showModal3')}}>距离顶部20</Button>
          <Button type="primary" onClick={()=>{this.handleOpen('showModal4')}}>水平垂直居中</Button>
        </Card>
        <Modal 
          title="React"
          visible={this.state.showModal1}
          onCancel={()=>{
            this.setState({
              showModal1:false
            })
          }}
          onOk={()=>{
            this.setState({
              showModal1:false
            })
          }}
        >
        <p>你好棒棒棒棒棒棒棒棒鸭～</p>
        </Modal>
        <Modal 
          title="React"
          style={{top:20}}
          visible={this.state.showModal3}
          okText="好的"
          cancelText="算了"
          onCancel={()=>{
            this.setState({
              showModal3:false
            })
          }}
          onOk={()=>{
            this.setState({
              showModal3:false
            })
          }}
        >
        <p>距离顶部20</p>
        </Modal>
        <Modal 
          title="React"
          wrapClassName="vertical-center-modal"
          style={{top:20}}
          visible={this.state.showModal4}
          onCancel={()=>{
            this.setState({
              showModal3:false
            })
          }}
          onOk={()=>{
            this.setState({
              showModal4:false
            })
          }}
        >
        <p>水平垂直居中</p>
        </Modal>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={()=>{this.handleConfirm('confirm')}}>confirm</Button>
          <Button type="primary" onClick={()=>{this.handleConfirm('info')}}>info</Button>
          <Button type="primary" onClick={()=>{this.handleConfirm('success')}}>success</Button>
          <Button type="primary" onClick={()=>{this.handleConfirm('warning')}}>warning</Button>
        </Card>
      </div>
    )
  }
}