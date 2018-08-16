import React, { Component } from 'react'
import './index.js'
import AppNav from '../../compons/AppNav'
class NoFound extends Component {
    
    render () {
        return (
            <div className = "app-nofound">
               无法找到网页!
               <AppNav/>
            </div>
        )
    }

}

export default NoFound