import React, { Component } from 'react'
import Header from './Header/Header'
import "./commonResource/css/styles.css"
import "./commonResource/css/bootstrap.css"
import Footer from './Footer/Footer'
import Mypar1 from './Main/First/Mypar1'
import Myparent from './Main/Second/Myparent'
import Third from './Main/Third/Third'
import Fouth from './Main/Fourth/Fouth'
import Fivth from './Main/Fivth/Fivth'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mypar1 />
        <Myparent />
        <Third />
        <Fouth />
        <Fivth />

        <Footer />
      </div>
    )
  }
}

