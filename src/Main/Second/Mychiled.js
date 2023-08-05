import React, { Component } from 'react'

export default class Mychiled extends Component {
  render() {
    return (
   
            <section className={this.props.whole}>
		<div className="container">
        
			<div className="new-alert">
            {this.props.time}
			</div>

			<div className={this.props.blackclass} >
            {this.props.BrandName}
			</div> 

			<div className={this.props.blackclass2} >
            {this.props.desc}
			</div>

			<div className={this.props.greyclass} >
            {this.props.Price}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href= {this.props.Linkurlmore}>Learn more</a></li>
					<li><a href={this.props.Linkurlbuy}>Buy</a></li>
				</ul> 
			</div>
            </div>
	</section>

    )
  }
}
