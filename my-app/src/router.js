import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import NoMatch from './pages/noMatch'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import Hightable from './pages/table/highTable';
// import City from './pages/city/index'

export default class Router extends React.Component{
  render(){
    return(
      <HashRouter>
        <App>
          {/* 同级路由 */}
          <Route path="/login" component={Login}/>
          {/* 嵌套子路由 */}
          <Route path="/admin" render={()=>
            <Admin>
            <Switch>
              {/* button */}
              <Route path="/admin/ui/buttons" component={Buttons}/>
              {/* 弹框 */}
              <Route path="/admin/ui/modals" component={Modals}/>
              <Route path="/admin/ui/loadings" component={Loadings}/>
              <Route path="/admin/ui/notification" component={Notice}/>
              <Route path="/admin/ui/messages" component={Messages}/>
              <Route path="/admin/ui/tabs" component={Tabs}/>
              <Route path="/admin/ui/gallery" component={Gallery}/>
              <Route path="/admin/ui/carousel" component={Carousel}/>
              <Route path="/admin/form/login" component={FormLogin}/>
              <Route path="/admin/form/register" component={Register}/>
              <Route path="/admin/table/basic" component={BasicTable}/>
              <Route path="/admin/table/high" component={Hightable}/>
              {/* <Route path="/admin/city" component={City}/> */}
              <Route component={NoMatch}/>
            </Switch>
            </Admin>
          }/>
          <Route path="/order/detail" component={Login}/>
        </App>
      </HashRouter>
    )
  }
}