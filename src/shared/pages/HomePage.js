import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Swiper from 'react-id-swiper';
import HomeAboutCMSWidget from '../components/HomeAboutCMSWidget'
import LazyLoad from 'react-lazyload';
import "isomorphic-fetch";


class HomePage extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = this.props.data ? this.props.data : {};
    }
    getOriginalState() {
        return fetch("../api/homepage.json").then( (resp) => resp.json() );
    }
    componentWillMount() {
        if( !this.props.data )
        this.getOriginalState().then((data) => {
         this.setState(data);      
        });
        
        
    }
    
    
    render() {
        if(!this.state.page)
            return (<div>Loading ITEMs</div>)
        return (
            <div className="homePage">
                <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/>
                <Swiper>
                    {this.state.heros.map((hero,i) => {
                        return  (<a key={i} className="trackEvent banner" data-trackdata="Home Page,hero|position {i}, {hero.text}"
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
                <LazyLoad>
                        <HomeAboutCMSWidget/>
                </LazyLoad>
            
            </div>
        );
    }
}

export default HomePage;