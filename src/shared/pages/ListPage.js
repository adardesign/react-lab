import React, { Component } from 'react';

import FeaturedBrands from "../components/FeaturedBrands"
import ListToolBar from "../components/ListToolBar"
import ProductListing from "../components/ProductListing"
import RefineListing from "../components/RefineListing"
import ProductListingSelectedRefinments from "../components/ProductListingSelectedRefinments"
import ProductListingSegments from "../components/ProductListingSegments"
 

class ListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

	getOriginalState() {
        return fetch("../api/listpage.json").then((resp) => resp.json());
    }
	componentWillMount() {
        this.getOriginalState().then((data) => {
         this.setState(data);      
        });
	}

  



    render() {
      if(!this.state.page){
        return (
            <div><link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_RevisedListingPageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/><img height="100%" width="100%" src="http://adardesign.com/codelab/react-router/images/listSkeleton.png"/></div>
          )
      }

      return ( 
        
        <div className="listpage">
          <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_RevisedListingPageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/>
          <div className="breadcrumbs">
            {this.state.page.breadcrumbs.map((crumb, i) => {
              return <div key={i} className="crumb">{crumb.name}</div>
            })}
          </div>

          <header className="list-title cf">
            <h1>
              {this.state.page.title}
            </h1>
            <a data-href="/" className="popup search-feedback" data-popup-class="popup600 popup-search-feedback" title="How Can We Assist You?">Didn't find what you're looking for?</a>
          </header>
        
          <div className="listPlaceholder">
            <ListToolBar meta={this.state.list.meta} />
            
            {/**<ProductListingSegments segments={this.state.list.segments}/>**/}
            
            <div className="listing-container layout-80-20 layout-reverse clear">
              <div className="col1">
                <ProductListingSelectedRefinments selectedRefinements={this.state.list.meta.refinements.selectedRefinements}/>
                
                {/* TODO: change to condition */}
                <div className="filter-description">
                  <p>{this.state.list.meta.listDescription}</p>
                </div>
                {/* /TODO */}
                
                
                <ProductListing listData={this.state.list}/>
              </div>
              <div className="col2">
                <RefineListing refineData={this.state.list.meta.refinements}/>
                  <FeaturedBrands brands={this.state.featuredBrands} />
              </div>
            </div>
          </div>  
        </div> 
      );
    }

}

export default ListPage;

