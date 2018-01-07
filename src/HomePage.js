import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/>
                <div
                    className="homePageCatgoryWidget catagoryWidget widget section"
                    id="homePageCatgoryWidget">
                    <div className="tabsContainer">
                        <a href="#categoryWidget/featured" className="active" data-id="featuredTab">Featured</a>
                        <a href="#categoryWidget/photography" data-id="photographyTab">Photography</a>
                        <a href="#categoryWidget/audioVideo" data-id="audiovideoTab">Pro Video &amp; Audio</a>
                        <a href="#categoryWidget/electronics" data-id="electronicsTab">Electronics</a>
                        <a href="#categoryWidget/scopes" data-id="scopesTab">Scopes &amp; Optics</a>
                        <a href="#categoryWidget/computers" data-id="computersTab">Computers</a>
                    </div>
                    <div className="catagoryWidgetContent">
                        <ul className="catagoryWidgetList">
                        	<li><Link to="/c/"><img src="https://www.adorama.com/col/images/cat/Mirrorless.jpg"/><h3>Mirrorless Cameras</h3></Link></li>
							<li><Link to="/c/Video-Equipment"><img src="https://www.adorama.com/col/images/cat/49280.jpg"/><h3>Pro Video</h3></Link></li>
							<li><Link to="/c/Lenses"><img src="https://www.adorama.com/col/images/cat/Lenses.jpg"/><h3>Lenses</h3></Link></li>
							<li><Link to="/c/Computers"><img src="https://www.adorama.com/col/images/cat/55607.jpg"/><h3>Computers</h3></Link></li>
							<li><Link to="/c/Drones-and-Action-Cams"><img src="https://www.adorama.com/col/images/cat/119996.jpg"/><h3>Drones &amp; Action Cams</h3></Link></li>
							<li><Link to="/c/Lighting-and-Studio"><img src="https://www.adorama.com/col/images/cat/64217.jpg"/><h3>Lighting &amp; Studio</h3></Link></li>
							<li><Link to="/c/Tripods-and-Supports"><img src="https://www.adorama.com/col/images/cat/61930.jpg"/><h3>Tripods</h3></Link></li>
							<li><Link to="/c/Professional-Audio/Musical-Instruments"><img src="https://www.adorama.com/col/images/cat/94027.jpg"/><h3>Musical Instruments</h3></Link></li>
							<li><Link to="/c/Professional-Audio"><img src="https://www.adorama.com/col/images/cat/41878.jpg"/><h3>Pro Audio</h3></Link></li>
							<li><Link to="/c/TVs-and-Home-Entertainment/Home-Theater"><img src="https://www.adorama.com/col/images/cat/63245.jpg"/><h3>Home Theater</h3></Link></li>
							<li><Link to="/c/TVs-and-Home-Entertainment"><img src="https://www.adorama.com/col/images/cat/62910.jpg"/><h3>TVs &amp; Entertainment</h3></Link></li>
							<li><Link to="/c/Printers-and-Scanners"><img src="https://www.adorama.com/col/images/cat/61208.jpg"/><h3>Printers</h3></Link></li>
							<li><Link to="/c/Binoculars-and-Scopes"><img src="https://www.adorama.com/col/images/cat/71129.jpg"/><h3>Binoculars &amp; Scopes</h3></Link></li>
							<li><Link to="/c/Bags-and-Cases-and-Apparel"><img src="https://www.adorama.com/col/images/cat/52133.jpg"/><h3>Bags</h3></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;