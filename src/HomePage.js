import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Swiper from 'react-id-swiper';

class HomePage extends Component {
	constructor(props){
		super(props)
		this.state = {} 
	}
	getOriginalState() {
	    return {"page":{"url":"/c/cameras","title":"Cameras & Digital Cameras","breadcrumbs":[{"name":"Adorama","link":"/"},{"name":"Cameras"}]},"heros":[{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"},{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"},{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"}],"categories":[{"id":"featured","name":"Featured","list":[{"link":"/c/Video-Equipment","text":"Digital SLRs","image":"https://www.adorama.com/col/images/cat/DigitalSLRs.jpg"},{"link":"/c/Lenses","text":"Lenses","image":"https://www.adorama.com/col/images/cat/49280.jpg"},{"link":"/c/Computers","text":"Pro Video","image":"https://www.adorama.com/col/images/cat/Lenses.jpg"},{"link":"/c/Drones-and-Action-Cams","text":"Tripods","image":"https://www.adorama.com/col/images/cat/55607.jpg"},{"link":"/c/Lighting-and-Studio","text":"Drones","image":"https://www.adorama.com/col/images/cat/119996.jpg"},{"link":"/c/Tripods-and-Supports","text":"Music","image":"https://www.adorama.com/col/images/cat/64217.jpg"},{"link":"/c/Video-Equipment","text":"Digital SLRs","image":"https://www.adorama.com/col/images/cat/DigitalSLRs.jpg"},{"link":"/c/Lenses","text":"Lenses","image":"https://www.adorama.com/col/images/cat/49280.jpg"},{"link":"/c/Computers","text":"Pro Video","image":"https://www.adorama.com/col/images/cat/Lenses.jpg"}]},{"id":"photography","name":"photography","list":[{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"},{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"}]},{"id":"audioVideo","name":"Audio Video","list":[{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"},{"link":"/","text":"Flashpoint XPLOR 600 Pro","image":"https://www.adorama.com/images/herobanners/1610HomeHero-Flashpoint-01-04-18_15917.jpg"}]}]}	};

	componentWillMount() {
		 this.setState(this.getOriginalState());      
	}
    render() {
        return (
            <div className="App">
                <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/>
                <Swiper>
                	{this.state.heros.map((hero,i) => {
						return 	(<a key={i} className="trackEvent banner" data-trackdata="Home Page,hero|position {i}, {hero.text}"
                                href={hero.link}>
                                <h2>{hero.text}</h2>
                                <img src={hero.image} />
                            </a>)
                		})}
                	
                </Swiper>

                <div
                    className="homePageCatgoryWidget catagoryWidget widget section"
                    id="homePageCatgoryWidget">
                    <div className="tabsContainer">
                    	{this.state.categories.map((cat, i) => {
                    		return <a key={i} href="#categoryWidget/{cat.id}"  className={(i === 0 ? 'active' : ' ')} data-id="featuredTab">{cat.id}</a>

                    	})}
                    </div>
                    <div className="catagoryWidgetContent">
                        <ul className="catagoryWidgetList">
						{this.state.categories[0].list.map((cat, i) => {
                        	return (<li key={i}>
								<Link to={cat.link}>
									<img src={cat.image} />
									<h3>{cat.text}</h3>
								</Link>
                        	</li>)
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;