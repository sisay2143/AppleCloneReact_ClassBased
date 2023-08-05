import React, { Component } from 'react'
import Mychiled from './Mychiled'

export default class Myparent extends Component {
  render() {
    return (
     
       

			<div className="new-alert">
            <Mychiled whole ="second-hightlight-wrapper" time = "new" BrandName = "MacBook Air " desc ="Twice the speed. Twice the storage." Price = "From $999." Linkurlnore = "/learn more" Linkurlbuy = "/order" blackclass = "title-wraper bold black" blackclass2 ="description-wrapper black" greyclass =" price-wrapper grey" />

            <Mychiled whole ="third-hightlight-wrapper" time = " " BrandName = "iPhone 11 Pro" desc ="Pro cameras. Pro display. Pro performance." Price = "From $24.95/mo. or $599 with trade‑in." Linkurlnore = "/learn more" Linkurlbuy = "/order" blackclass = "title-wraper bold " blackclass2 ="description-wrapper " greyclass =" price-wrapper" />
              
			</div>

    )
  }
}
