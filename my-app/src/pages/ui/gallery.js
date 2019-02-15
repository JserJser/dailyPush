import React from 'react'
import 'antd/dist/antd.css'
import {Card,Row,Col} from 'antd'
export default class Gallery extends React.Component{
  render(){
    const imgs=[
      ['1.png','2.png','3.png','4.png','5.png'],
      ['6.png','7.png','8.png','9.png','10.png'],
      ['11.png','12.png','13.png','14.png','15.png'],
      ['16.png','17.png','18.png','19.png','20.png'],
      ['21.png','22.png','23.png','24.png','25.png'],
    ]
    const imgList=imgs.map((list)=>list.map((item)=>
      <Card 
        cover={<img src={'/gallery/'+item}/>}
      >
        <Card.Meta
          title="React Admin"
          description="i am jser"
        />
      </Card>
    ))
    return(
      <div className="card-wrap">
        <Row>
          <Col md={5}>
            {imgList[0]}
          </Col>
          <Col md={5}>
            {imgList[1]}
          </Col>
          <Col md={5}>
            {imgList[2]}
          </Col>
          <Col md={5}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>
      </div>
    )
  }
}
