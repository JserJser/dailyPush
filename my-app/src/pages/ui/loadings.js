import 'antd/dist/antd.css'
import React from 'react'
import './loadings.css'
import{Card,Button,Spin,Icon,Alert} from 'antd'
export default class Loadings extends React.Component{
  render(){
    const icon=<Icon type="plus" style={{fontSize:24}}/>
    const iconLoading=<Icon type="loading" style={{fontSize:24}}/>
    return(
      <div>
        <Card title="spining 用法" className="card-wrap">
        <Spin size="small" style={{marginLeft:10}}/>
        <Spin/>
        <Spin size="large" style={{marginLeft:10}}/>
        <Spin indicator={icon}/>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="欢迎欢迎react"
            type="info"
          />
        <Spin>
          <Alert
            message="React"
            description="欢迎欢迎react"
            type="warning"
          />
        </Spin>
        <Spin tip="加载中..." style={{marginTop:10}}>
          <Alert
            message="React"
            description="欢迎欢迎react"
            type="info"
          />
        </Spin>
        <Spin indicator={iconLoading}>
          <Alert
            message="React"
            description="欢迎欢迎react"
            type="warning"
          />
        </Spin>
        </Card>
      </div>
    )
  }
}