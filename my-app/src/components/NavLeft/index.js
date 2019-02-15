import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu} from 'antd';
import logoAnt from './img/assets/logo-ant.svg'
import 'antd/dist/antd.css'
import './index.css'
import {NavLink} from 'react-router-dom'
const SubMenu=Menu.SubMenu
export default class NavLeft extends React.Component{
  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig)
    console.log(menuTreeNode)
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
       return(
         <SubMenu title={item.title} key={item.key}>
           {this.renderMenu(item.children)}
         </SubMenu>
       )
      }
      return <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
    })
  }
  render(){
    return(
      <div>
        <div className="logo">
        <img src={logoAnt} alt=""/>
        <h1>Imooc ms</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}