import React, { Component } from 'react'
import './index.js'
import AppNav from '../../compons/AppNav'
class Home extends Component {
    
    render () {
        return (
            <div className = "app-home">
                Hello ,this is Home!
              <AppNav/>
            </div>
        )
    }

}

export default Home