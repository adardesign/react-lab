import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import SimpleCMSWidget from './SimpleCMSWidget'  

class HomeAboutCMSWidget extends Component {
  constructor(props) {
    super(props);
    	this.state = {};
    };
  

  getOriginalState() {
  	// TODO: get the url programmatically  
        return fetch("../api/CMS/home-about.json").then((resp) => resp.json());
    }
  componentWillMount() {
        this.getOriginalState().then((data) => {
         this.setState(data);      
        });
  }
    render() {
    	const params = {
      		slidesPerGroup:1,
      		slidesPerView:1,
      		pagination: {
        		el: '.swiper-pagination',
        		type: 'bullets',
        		clickable: true
      		}
    }
    	if(!this.state.content){
            return (<div><img src="http://adardesign.com/codelab/react-router/images/catSkeleton.jpg"/></div>)
      	}
    	
      	return (
      		<div className="adorama-about">
      			<Swiper {...params}>
      				{this.state.content.map((widget) => {
      					return <div key={widget.id}><SimpleCMSWidget  content={widget.content}/></div>
      				})}
      			</Swiper>
      		</div>
      		)
	}
}

export default HomeAboutCMSWidget;
