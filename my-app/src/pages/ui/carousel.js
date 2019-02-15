import React from 'react'
import 'antd/dist/antd.css'
import {Card,Carousel} from 'antd'
import './carousel.css'
export default class Button extends React.Component{
  render(){
    return(
      <div>
        <Card title="文字轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
          <div><h3>Ant Motion Banner -React</h3></div>
          <div><h3>Ant Motion Banner -React</h3></div>
          <div><h3>Ant Motion Banner -React</h3></div>
          </Carousel>
        </Card>        
        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade" className="">
          <div>
            <img src="/carousel-img/carousel-1.jpg"/>
          </div>
          <div>
            <img src="/carousel-img/carousel-2.jpg"/>
          </div>       
          <div>
            <img src="/carousel-img/carousel-3.jpg"/>
          </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}