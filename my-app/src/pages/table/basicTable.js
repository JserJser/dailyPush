import React from 'react'
import 'antd/dist/antd.css'
import{Card,Table, Modal,message,Button} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
export default class BasicTable extends React.Component{
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
          dataSource2:res.result.list,
          selectedRowKeys:[],
          selectedRows:null,
          pagination:Utils.pagination(res,(current)=>{
              //todo
              _this.params.page=current;
              this.request()
          })
        })
      }
    })
  }
  onRowClick=(record,index)=>{
    let selectKey=[index]
    Modal.info({
      title:'信息',
      content:`用户名:${record.userName},用户爱好:${record.hobby}`
    })
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem:record
    })
  }
  //多选执行删除
  handleDelete=(()=>{
    let rows=this.state.selectedRows;
    console.log('rows....',rows)
    let ids=[]
    rows.map((item)=>{
      ids.push(item.id)
    })
    Modal.confirm({
      title:'删除提示',
      content:`您确定要删除这些数据吗${ids.join(',')}`,
      onOk:()=>{
        message.success('删除成功')
        this.request()
      }
    })
  })
  render(){
    const columns=[
      {
        title:'id',
        dataIndex:'id'
      },
      {
        title:'用户名',
        dataIndex:'userName'
      },{
        title:'性别',
        dataIndex:'sex'
      },
      {
        title:'爱好',
        dataIndex:'hobby',
        // render(abc){
        //   let config={
        //     '1':游泳,
        //     '2':跑步,
        //     '3':汽车,
        //     '4':桌球,
        //     '5':爬山
        //   }
        //   return config[abc]
        // }
      }
    ]
    const selectedRowKeys=this.state.selectedRowKeys
    const rowSelection={
      type:'radio',
      selectedRowKeys
    }
    const rowCheckSelection={
      type:'checkbox',
      selectedRowKeys,
      onChange:(selectedRowKeys,selectedRows)=>{
      //   let ids=[];
      //   selectedRows.map((item)=>{
      //     ids.push(item.id)
      //   })
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
    }
    return(
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="mock-单选" style={{margin:'10px 0'}}>
          <Table
            bordered
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
            onRow={(record,index)=>{
              return{
                onClick:()=>{
                  this.onRowClick(record,index);
                }
              }
            }}
          />
        </Card>
        <Card title="mock多个值" style={{margin:'10px 0'}}>
            <div>
              <Button onClick={this.handleDelete}>删除</Button>
            </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="mock-表格分页" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}