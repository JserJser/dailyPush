import React from 'react';
import {Card, Button, Table,Form,Select} from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
const FormItem=Form.Item;
const Option=Select.Option;
export default class City extends React.Component{
    state={
        page:1
    }
    componentDidMount(){
        _this.requestList();
    }
    requestList=()=>{
        axios.ajax({
            url:'/open_city',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            this.setState({
                list:res.result.item_list.map((item,index)=>{
                    item.key=index;
                    return item;
                })
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page=current;
                    _this.requestList();
                })
            })
        })
    }
    render(){
        const columns=[
            {
                title:'订单编号',
                dataIndex:
            }
        ]
        return(
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button>订单详情</Button>
                    <Button>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
            </div>
        )
    }
}

