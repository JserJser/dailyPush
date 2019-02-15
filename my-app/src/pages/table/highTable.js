import React from 'react'
import 'antd/dist/antd.css'
import {Card,Table, Modal,message,Button} from 'antd'
import {Utils} from './../../utils/utils'
import axios from './../../axios/index'
export default class Hightable extends React.Component{
  state={
    dataSource2:[]
  }
  params={
    page:1
  }
  componentDidMount(){
    const data=[
      {
        id:'0',
        userName:'jser',
        sex:'girl',
        hobby:'jump'
      },
      {
        id:'1',
        userName:'小LUA',
        sex:'girl',
        hobby:'eat'

      },
      {
        id:'2',
        userName:'jYung',
        sex:'girl',
        hobby:'dance'
      }
    ]
    data.map((item,index)=>{
      item.key=index;
    })
    // 把数据存起来
    this.setState({
      dataSource:data
    })
    this.request()
    this.request02()
  }
  //动态获取mock数据
  request=()=>{
    // axios.get(baseUrl+'/table/list').then((res)=>{
    //   // console.log(JSON.stringify(res))
    //   if(res.status=='200'&& res.data.code=='0'){
    //     this.setState({
    //       dataSource2:res.data.result
    //     })
    //   }
    // })
    let _this=this;
    axios.ajax({
      url:'/table/list',
      data:{
        params:{
          page:this.params.page
        }
      }
    }).then((res)=>{
      if(res.code==0){
        res.result.list.map((item,index)=>{
          item.key=index;
        })
        this.setState({
          dataSource:res.result.list
        })
      }
    })
  }
  request02=()=>{
    // axios.get(baseUrl+'/table/list').then((res)=>{
    //   // console.log(JSON.stringify(res))
    //   if(res.status=='200'&& res.data.code=='0'){
    //     this.setState({
    //       dataSource2:res.data.result
    //     })
    //   }
    // })
    let _this=this;
    axios.ajax({
      url:'/table/high/list',
      data:{
        params:{
          page:this.params.page
        }
      }
    }).then((res)=>{
      if(res.code==0){
        res.result.list.map((item,index)=>{
          item.key=index;
        })
        this.setState({
          dataSource3:res.result.list
        })
      }
    })
  }
  handleChange=(pagination,filters,sorter)=>{
    console.log(';;;;;',sorter)
    this.setState({
      sortOrder:sorter.order
    })
  }
  handleDelete=(item)=>{
    let id=item.id;
    Modal.confirm({
      title:'确认',
      content:'您确认要删除此条数据吗',
      onOk:()=>{
        message.success('确认删除成功');
        this.request02()
      }
    })
  }
  render(){
    const columns=[
      {
        title:'id',
        dataIndex:'id',
        width:150
      },
      {
        title:'用户名',
        dataIndex:'userName',
        width:150
      },{
        title:'性别',
        dataIndex:'sex',
        width:150
      },
      {
        title:'爱好',
        dataIndex:'hobby',
        width:150
      } 
    ]
    const columns1=[
      {
        title:'id',
        dataIndex:'id',
        width:150,
        fixed:'left'
      },
      {
        title:'用户名',
        dataIndex:'userName',
        width:150,
        fixed:'left'
      },{
        title:'性别',
        dataIndex:'sex',
        width:150
      }
      ,
      {
        title:'爱好',
        dataIndex:'hobby9',
        width:150
      }
      ,
      {
        title:'爱好',
        dataIndex:'hobby8',
        width:150
      }
      ,
      {
        title:'爱好',
        dataIndex:'hobby7',
        width:150
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby6',
        width:150
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby5',
        width:150
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby4',
        width:150
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby3',
        width:150,
        fixed:'right'
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby2',
        width:150,
        fixed:'right'
      }      ,
      {
        title:'爱好',
        dataIndex:'hobby1',
        width:150,
        fixed:'right'
      }
    ]
    const columns3=[
      {
        title:'id',
        dataIndex:'id',
        width:150
      },
      {
        title:'年龄',
        dataIndex:'age',
        width:150,
        sorter:(a,b)=>{
          return a.age-b.age;
        },
        sortOrder:this.state.sortOrder
      },
      {
        title:'用户名',
        dataIndex:'userName',
        width:15
      },{
        title:'性别',
        dataIndex:'sex',
        width:150
      },
      {
        title:'爱好',
        dataIndex:'hobby',
        width:150
      }
    ]
    const columns4=[
      {
        title:'id',
        dataIndex:'id',
        width:150
      },
      {
        title:'年龄',
        dataIndex:'age',
        width:150
      },
      {
        title:'用户名',
        dataIndex:'userName',
        width:150
      },{
        title:'性别',
        dataIndex:'sex',
        width:150
      },
      {
        title:'爱好',
        dataIndex:'hobby',
        width:150
      },
      {
        title:'操作',
        render:(text,item)=>{
          return <Button onClick={(item)=>this.handleDelete(item)}>删除</Button>
        }
      }
    ]
    return(
      <div>
         <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y:240}}
          />
        </Card>
        <Card title="左侧固定" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns1}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x:3200}}
          />
        </Card>
        <Card title="操作按钮" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource3}
            pagination={false}
          />
        </Card>
        
      </div>
    )
  }
}