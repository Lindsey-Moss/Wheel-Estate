import React, { Component } from 'react';
import thia_logo from '../styles/images/thia_logo_black.png'

export default class Home extends Component {
  render() {
    return (
        <div className="page">
          <div className="home">
          <h1>Wheel Estate</h1>
            <p>
            What has long been the biggest drawback of tiny living is 
            now an easy one-stop-shop: By connecting community-minded 
            landowners and tiny-dwellers, <i>Wheel Estate</i> aims to 
            be <u>the</u> tiny house parking resource.
            </p>
            <p>
            But by no means is it the <i>only</i> resource. Part of the
            beauty of tiny living is the community that has grown around
            and within the lifestyle. Listed below are additional projects
            and sources for further assistance and knowledge.
            </p>
            <div className="additionals">
              <a href="https://tiny-project.com/resources/"><img src="https://149429980.v2.pressablecdn.com/wp-content/uploads/2020/03/logo.png" alt="The Tiny Project" /></a>
              <a href="https://www.thetinyhouse.net/resources/"><img src="https://mk0thetinyhousednaa2.kinstacdn.com/wp-content/uploads/2014/12/the_tiny_house-new-logo-small.png" alt="The Tiny House" /></a>
              <a href="https://www.tinyhomebuilders.com/"><img src="https://www.tinyhomebuilders.com/images/logo-black.png" alt="Tiny Home Builders" /></a>
              <a href="https://tinyhousetalk.com/parking-for-tiny-homes/"><img src="https://tinyhousetalk.com/wp-content/uploads/tiny-house-talk-logo-1.png" alt="Tiny House Talk" /></a>
              <a href="https://tinyhousegiantjourney.com/resources/"><img src="https://tinyhousegiantjourney.com/wp-content/uploads/2019/12/New-Header_2.jpg" alt="Tiny House Giant Journey" /></a>
              <a href="https://americantinyhouseassociation.org/"><img src="https://americantinyhouseassociation.org/wp-content/uploads/2019/03/ATHA-small-logo.png" alt="The American Tiny House Association" /></a>
              <a href="https://americantinyhouseassociation.org/"><img src={thia_logo} alt="The Tiny Home Industry Association" /></a>
              <a href="https://tinyhouseexpedition.com/resource-directory/"><img src="https://tinyhouseexpedition.com/wp-content/uploads/2018/10/Text-Logo-33.png" alt="Tiny House Expedition" /></a>
              <a href="https://unitedtinyhouse.com/"><img src="https://unitedtinyhouse.com/wp-content/uploads/2019/06/global-1-150x150.png" alt="United Tiny House Association" /></a>
              <a href="https://tinytownassociation.com/"><img src="https://tinytownassociation.com/templates/yootheme/cache/logo-small-cf9d44d3.webp" alt="Tiny Town Association" /></a>
              <a href="https://www.skooliesupply.com/tutorials"><img src="https://images.squarespace-cdn.com/content/5c63509170468018bfae93b6/1550212818076-140QRRYLO5EQX05MO5YD/SSlogo003.jpg?content-type=image%2Fjpeg" alt="SkoolieSupply.com" /></a>
            </div>
          </div>
      </div>
    );
  }
}