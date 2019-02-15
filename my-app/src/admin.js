import React from 'react'
import {Row,Col} from 'antd' //es6的解构的语法
import 'antd/dist/antd.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
// import Home from './pages/home'
import './style/common.css'
export default class Admin extends React.Component{
  render(){
    return(
      <div>
        <Row className="container">
          <Col span="4" className="nav-left">
          <NavLeft/>
          </Col>
          <Col span="20" className="main">
            <Header/>
              <Row className="content">
                {/* <Home/> */}
                {this.props.children}
              </Row>
            <Footer/>
          </Col>
        </Row>
      </div>
    )
  }
}