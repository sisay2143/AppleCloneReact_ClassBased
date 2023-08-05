import React, { Component } from 'react'


 class HeaderLink extends Component {
  render() {
    return (
    
			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.Linkurl}>{this.props.linkName}</a></li>
						 </ul>
			    </div>
 
    )
  }
}
export default HeaderLink
