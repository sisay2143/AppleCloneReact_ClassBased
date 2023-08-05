import React, { Component } from 'react'

export default class Mycomp extends Component {
  render() {
    return (
     
       
        <div className="new-alert">
            {this.props.time}
     
        <div className="title-wraper bold black">
           {this.props.BrandName}
        </div> 
        <div className="links-wrapper">
            <ul>
                <li><a href={this.props.linkmore}>Learn more</a></li>
                <li><a href={this.props.linkorder}>Order</a></li>
            </ul> 
        </div>
        <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">{this.props.description}</div>
            <div className="col-sm-12 col-md-6 text-md-left">{this.props.price}</div>
        </div>
        </div>
    )
  }
}
