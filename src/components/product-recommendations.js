import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import ProductItem from './ProductItem'  

class ProductRecommendations extends Component {
  constructor(props) {
    super(props);
    	this.state = {};
    };
  

  getOriginalState() {
  	// TODO: get the url programmatically 
	fetch('https://apis.rfksrv.com/search-rec/11248-113083348/3?data=%7B%22widget_id%22%3A%7B%22id%22%3A%2252%22%7D%2C%22content%22%3A%7B%22product%22%3A%7B%22field%22%3A%7B%22value%22%3A%5B%22sku%22%5D%7D%7D%7D%2C%22n_item%22%3A6%2C%22context%22%3A%7B%22page%22%3A%7B%22sku%22%3A%5B%5D%2C%22uri%22%3A%22https%3A%2F%2Fwww.adorama.com%2F%22%7D%7D%7D', {
		method: 'GET', 
		mode: 'cors', 
		redirect: 'follow',
		headers: new Headers({
			"x-api-key":"00-113083348-DViz8X1R0/MJFyc245jQ13xhfJ8YHTj/8FUoxR96XC3YrdcX"
			})
		}).then(resp => resp.json()).then((data) => console.log(data))
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
            return (<div><img src="http://adardesign.com/codelab/react-router/images/catSkeleton.jpg" alt="Loading.."/></div>)
      	}
    	
      	return (
      		<div className="adorama-about">
      			<Swiper {...params}>
      				{this.state.content.map((widget) => {
      					return <ProductItem/>
      				})}
      			</Swiper>
      		</div>
      		)
	}
}

export default ProductRecommendations;
