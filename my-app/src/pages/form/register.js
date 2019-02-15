import React from 'react'
import 'antd/dist/antd.css'
import {Card,Form,Icon,Input,Button,message,Radio,Select, Switch,DatePicker,TimePicker,Upload,Checkbox} from 'antd'
import RadioGroup from 'antd/lib/radio/group';
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea';
const FormItem=Form.Item
const Option=Select.Option
class FormRegister extends React.Component{
  state={
    userImg:''
  }
  handleSubmit=()=>{
    let userInfo=this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`${userInfo.userName}恭喜你登录成功鸭～当前密码为${userInfo.userPwd}`)
      }
    })
  }
  getBase64=(img,callback)=>{
    const reader=new FileReader();
    reader.addEventListener('load',()=>callback(reader.result));
    reader.readAsDataURL(img)
  }
  handleChange=(info)=>{
    if(info.file.status==='uploading'){
      this.setState({
        loading:true
      });
      return;
    }
    if(info.file.status==='done'){
      this.getBase64(info.file.originFileObj,imageUrl=>this.setState({
        userImage:imageUrl,
        loading:false
      }))
    }
  }
  render(){
    const {getFieldDecorator}=this.props.form;
    const formItemLayout={
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:20
      }
    }
    const offsetLayout={
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }
    const rowObject={
      minRows:4,maxRows:6
    }
    return(
      <div>
        <Card title="水平表单">
          <Form layout="horizal" style={{width:300}}>
            <FormItem label="用户名"  {...formItemLayout}>
              {
                getFieldDecorator('userName',{
                  initialValue:'',
                  rules:[
                    {
                      required:true,
                      message:'用户名不能为空'
                    },
                    {
                      min:5,max:10,
                      message:'长度不在范围内'
                    },
                    {
                      pattern:new RegExp('^\\w+$','g'),
                      message:'用户名必须为字母或数字'
                    }
                  ]
                })(<Input placeholder="请输入用户名" prefix={<Icon type="user"/>}/>)
              }

            </FormItem>
            <FormItem label="密码"  {...formItemLayout}>
            {
                getFieldDecorator('userPwd',{
                  initialValue:'',
                  rules:[]
                })(<Input placeholder="请输入密码" prefix={<Icon type="lock"/>} type="password"/>)
              }

            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
            {
              getFieldDecorator('sex',{
                initialValue:'1'
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )
            }
            </FormItem>
            {/* <FormItem>
            {
              getFieldDecorator('age',{
                initialValue:'1'
              })(<InputNumber/>)
            }
            </FormItem> */}
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state',{
                  initialValue:18
                })(
                  <Select mode="multiple">
                    <Option value="1">努力的jser</Option>
                    <Option value="2">我是可爱迷人的小酒窝</Option>
                    <Option value="3">dimple</Option>
                    <Option value="4">努力加油的dimple鸭～</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest',{
                  initialValue:['1,4']
                })(
                  <Select>
                    <Option value="1">吃饭</Option>
                    <Option value="2">睡觉</Option>
                    <Option value="3">写代码</Option>
                    <Option value="4">煲汤</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
            {
              getFieldDecorator('isMarried',{
                valuePropName:'checked',
                initialValue:true
              })(<Switch/>)
            }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue:moment('2018-08-08')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="小时间" {...formItemLayout}>
              {
                getFieldDecorator('small tips')(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="头像" {...offsetLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType="picture-card"
                    action="http://jsonplaceholder.typicode.com/posts/"
                    showUploadList={false}//不显示上传列表
                    onchange={this.handleChange}

                  >
                    {
                      this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>
                    }
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout}>
              {
                getFieldDecorator('reader')(
                  <Checkbox>我已经阅读过<a>努力学习</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address',{
                    initialValue:'chance change fate'
                })(
                  <TextArea
                    autosize={
                      rowObject
                    }
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('timer')(
                  <TimePicker/>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)