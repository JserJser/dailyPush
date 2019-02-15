import React from 'react'
import 'antd/dist/antd.css'
import {Card,message,Tabs,Icon} from 'antd'
const TabPane=Tabs.TabPane
export default class Button extends React.Component{
  newTabIndex=0;
  handleCallback=(key)=>{
    message.info("hi你选择了"+key)
  }
  componentWillMount(){
    const panes=[
      {
        title:'tab1',
        content:'tab1',
        key:'1'
      },
      {
        title:'tab2',
        content:'tab2',
        key:'2'
      },
      {
        title:'tab3',
        content:'tab3',
        key:'3'
      }
    ]
    this.setState({
      activeKey:panes[0].key,
      panes
    })
  }
  onChange=(activeKey)=>{
    this.setState({
      activeKey
    })
  }
  onEdit=(targetKey,action)=>{
    this[action](targetKey)
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }


  render(){
    return(
      <div>
        <Card title="tab页签" className="card-wrap" style={{marginBottom:10}}>
          <Tabs defaultActivekey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab1" key="1">content of tab pane1 </TabPane>
            <TabPane tab="Tab2" key="2" disabled>content of tab pane2 </TabPane>
            <TabPane tab="Tab3" key="3">content of tab pane3 </TabPane>
          </Tabs>
        </Card>
        <Card title="tab带图标的页签" className="card-wrap" style={{marginBottom:10}}>
          <Tabs defaultActivekey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus"/>tabs</span>} key="1">content of tab pane1 </TabPane>
            <TabPane tab={<span><Icon type="edit"/>tabs</span>} key="2">content of tab pane2 </TabPane>
            <TabPane tab={<span><Icon type="delete"/>tabs</span>} key="3">content of tab pane3 </TabPane>
          </Tabs>
        </Card>
        <Card title="动态循环方式添加" className="card-wrap" style={{marginBottom:10}}>
          <Tabs 
            // defaultActivekey="1" 
            onChange={this.handleCallback}
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel)=>{
                return <TabPane
                          tab={panel.title}
                          key={panel.key}
                        />
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}