import React from 'react'
import 'antd/dist/antd.css'
import {Card,Form,Input,Button,message,Icon,Checkbox} from 'antd'
const FormItem=Form.Item;
class FormLogin extends React.Component{
  handleSubmit=()=>{
    let userInfo=this.props.form.getFieldsValue();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`${userInfo.userName}恭喜你登录成功鸭～当前密码为${userInfo.password}`)
      }
    })
  }
  render(){
    const {getFieldDecorator}=this.props.form;
    return(
      <div>
        <Card title="行内表单" style={{marginBottom:10}}>
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平表单" style={{marginBottom:10}}>
          <Form layout="horizal" style={{width:300}}>
            <FormItem>
              {
                getFieldDecorator('userName',{
                  initialValue:'Jser',
                  rules:[]
                })(<Input placeholder="请输入用户名"/>)
              }

            </FormItem>
            <FormItem>
            {
                getFieldDecorator('userPwd',{
                  initialValue:'1234',
                  rules:[]
                })(<Input placeholder="请输入密码"/>)
              }

            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平表单">
          <Form layout="horizal" style={{width:300}}>
            <FormItem>
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
            <FormItem>
            {
                getFieldDecorator('userPwd',{
                  initialValue:'',
                  rules:[]
                })(<Input placeholder="请输入密码" prefix={<Icon type="lock"/>} type="password"/>)
              }

            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember',{
                  valuePropName:'checked',
                  initialValue:'true',
                  rules:[]
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float:'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin)