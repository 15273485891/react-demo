import React, { Component } from "react"
import {Link, NavLink}from "react-router-dom"

const NavItem =({data})=>{
    return(
            <NavLink activeStyle = { {background : '#f5f5f5'} } activeClassName='active' exact = { data.exact }
            className="tab-item external" to={data.path}>
            <span className={"icon icon-"+data.icon}></span>
            <span className="tab-label">{data.title}</span>
            </NavLink>
        )
}
class  AppNav extends Component {
    state= {
        navs: [
            { id: 1, path: "/", title:"首页",icon:"home", exact:true },
             {id: 2, path: "/twly",title:"联系人", icon:"star"},
              {id: 3, path: "/contcat",title:"我的", icon:"me"}
        ]
    }

    render () {
        let { navs } =this.state
        return (
            <nav className="bar bar-tab app-nav">
                { navs.map(item => ( <NavItem key = {item.id} data ={item} /> )) }
            </nav>
        )
    }

}

export default AppNav






// import React, { Component } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const NavItem = ({data}) => {
    
//     return (
//         <NavLink activeStyle = { {background : '#f5f5f5'} } activeClassName='active' exact = { data.exact } className="tab-item external" to={data.path}>
//             <span className={"icon icon-" + data.icon}></span>
//             <span className="tab-label">{data.title}</span>
//         </NavLink>
//     )
// }

// class AppNav extends Component {

//     state = {
//         navs: [
//             { id: 1, path: '/', title: '首页', icon: 'home', exact: true},
//             { id: 2, path: '/twly', title: '联系人', icon: 'star'},
//             { id: 3, path: '/contcat', title: '我的', icon: 'me'}
//         ]
//     }

//     render () {
//         let { navs } = this.state
//         return (
//             <nav className="bar bar-tab app-nav">
//                 { navs.map(item => ( <NavItem key = {item.id} data = {item} /> )) }
//             </nav>
//         )
//     }

// }

// export default AppNav