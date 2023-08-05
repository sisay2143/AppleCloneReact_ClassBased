import React, { Component } from 'react'
import logo from '../commonResource/images/icons/logo.png'
import search from '../commonResource/images/icons/search-icon.png'
import cart from '../commonResource/images/icons/cart.png'

import HeaderLink from './HeaderLink'


export default class Header extends Component {
  render() {
    return (
        <header classNameName="header-wrapper">
    <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<HeaderLink linkName= "Mac" Linkurl = "/Mac" />
                        <HeaderLink linkName = "iphone" Linkurl = "/iphone" />
                        <HeaderLink linkName= "ipad" Linkurl = "/ipad" />
                        <HeaderLink linkName = "watch" Linkurl = "/watch" />
                        <HeaderLink linkName= "tv" Linkurl = "/tv" />
                        <HeaderLink linkName = "Music" Linkurl = "/Music" />
                        <HeaderLink linkName= "Support" Linkurl = "/Support" />
			    <a className="navbar-brand mx-auto" href="/search"><img src={search} /></a>
                
			    <a className="navbar-brand mx-auto" href="/cart"><img src={cart} /></a>

                 
					 </ul>
			    </div>
			</nav>
		</div>
	</div>
      </header>

   
    )
  }
}
