import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
export default class Home extends React.Component{
  render(){
    return(
     <HashRouter>
       <div>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="about">About</Link>
           </li>
           <li>
             <Link to="/topics">Topics</Link>
           </li>
         </ul>
       </div>
     </HashRouter>
    )
  }
}