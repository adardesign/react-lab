import React, { Component } from 'react';

import FeaturedBrands from "./components/FeaturedBrands"
import ListToolBar from "./components/ListToolBar"
import ProductListing from "./components/ProductListing"
import RefineListing from "./components/RefineListing"
import ProductListingSelectedRefinments from "./components/ProductListingSelectedRefinments"
import ProductListingSegments from "./components/ProductListingSegments"
 

class ListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getOriginalState() {
    return {"page":{"type":"listpage","url":"/l/Cameras/Digital-SLR-Cameras","title":"DSLR Cameras and SLR Cameras","id":"3324323434","breadcrumbs":[{"name":"Adorama","link":"/"},{"name":"Cameras"}]},"list":{"meta":{"alternatives":"View additional : Used DSLR Cameras and SLR Cameras (228)","listDescription":"Go digital! Choose from Adorama’s huge selection of DSLR cameras from Canon, Nikon, Sony, Pentax and more. Take your photos to the next level of image quality with a Digital SLR Camera.","segments":[{"name":"all","link":"/"},{"name":"used","link":"/"},{"name":"kits","link":"/"}],"count":456,"showing":[1,15],"perpage":15,"pageCount":1,"currentSort":"Popular Results","sortOptions":[{"id":"1","name":"Popular Results","link":"/"}],"refinements":{"selectedRefinements":[{"name":"Body Only","removeLink":"/"}],"clearRefinementsLink":"/"}},"skus":["ICAT6K2Z","ICA5DM4","INKD500","INKD750","INKD7200"]},"productData":{"ICAT6K2Z":{"badge":{"text":"23% Off","link":"sale"},"adoramaBadges":[],"id":"ICAT6K2Z","link":"https://www.adorama.com/icat6k2z.html","title":"Canon EOS Rebel T6 DSLR 2 Lens Camera Kit - with Promo Printer Bundle","shortTitle":"EOS Rebel T6 DSLR 2 Lens Camera Kit - with Promo Printer Bundle","tinyDescription":"Canon EOS Rebel T6 DSLR with 18-55mm STM and 75-300mm Lenses and Printer Kit","mfgPart":"1159C008 2Z","stock":"In","subStatus":{"name":"In Stock","description":""},"freeShipping":true,"isHasFreeVIPTwoDayDelivery":false,"type":"package","prices":{"price":849,"list":1099,"isSale":true,"highPrice":1099,"discountPrice1":250,"mailInRebateDiscount":499,"itemPropPrice":1099},"images":[{"id":"0","name":"icat6k2z.jpg"},{"id":"1","name":"icat6k2.jpg"},{"id":"2","name":"icat6k2_1.jpg"},{"id":"3","name":"icat6k2_2.jpg"},{"id":"4","name":"icat6k2_3.jpg"},{"id":"5","name":"icat6k2_4.jpg"},{"id":"6","name":"icat6k2_5.jpg"},{"id":"7","name":"icat6k2_6.jpg"},{"id":"8","name":"icat6k2_7.jpg"},{"id":"9","name":"icat6k2_8.jpg"},{"id":"10","name":"icat6k2_9.jpg"},{"id":"11","name":"icat6k2_10.jpg"},{"id":"12","name":"icat6k2_11.jpg"},{"id":"13","name":"icat6k2_12.jpg"},{"id":"14","name":"icat6k2_13.jpg"},{"id":"15","name":"icat6k2_14.jpg"},{"id":"16","name":"icapro100.jpg"},{"id":"17","name":"ica1686b064.jpg"}],"configLevels":"0","configurations":{},"rating":{"stars":"5.0","count":317},"allConfigurationsCount":0,"isBundle":false,"brand":"Canon","category":"Cameras/Digital SLR Cameras/Digital SLR Cameras","priceType":"Add to Cart","cartLineID":0,"quantity":0,"shipInfoTitle":"Free Expedited Shipping","isNeedRenderStockStatus":true,"isHasFreeTwoDayDelivery":true,"isHasAvalabilityToCreateBundle":false},"ICA5DM4":{"badge":{"text":"Special","link":"deal"},"adoramaBadges":[],"id":"ICA5DM4","link":"https://www.adorama.com/ica5dm4.html","title":"Canon EOS 5D Mark IV DSLR Body","shortTitle":"EOS 5D Mark IV DSLR Body","tinyDescription":"Canon EOS 5D Mark IV DSLR Body","mfgPart":"1483C002","stock":"In","subStatus":{"name":"In Stock","description":""},"freeShipping":true,"isHasFreeVIPTwoDayDelivery":false,"type":"regular","prices":{"youSave":{"dollar":300,"percent":9},"price":3199,"list":3499,"isSale":true,"highPrice":3499,"discountPrice1":300,"itemPropPrice":3499},"images":[{"id":"0","name":"ica5dm4.jpg"},{"id":"1","name":"ica5dm4_1.jpg"},{"id":"2","name":"ica5dm4_2.jpg"},{"id":"3","name":"ica5dm4_3.jpg"},{"id":"4","name":"ica5dm4_4.jpg"},{"id":"5","name":"ica5dm4_5.jpg"}],"configLevels":"0","configurations":{},"rating":{"stars":"5.0","count":248},"allConfigurationsCount":0,"isBundle":true,"brand":"Canon","category":"Cameras/Digital SLR Cameras/Digital SLR Cameras","priceType":"Add to Cart","cartLineID":0,"quantity":0,"shipInfoTitle":"Free Expedited Shipping","isNeedRenderStockStatus":true,"isHasFreeTwoDayDelivery":true,"isHasAvalabilityToCreateBundle":true},"INKD500":{"badge":{"text":"Special","link":"deal"},"adoramaBadges":[],"id":"INKD500","link":"https://www.adorama.com/inkd500.html","title":"Nikon D500 DSLR Body","shortTitle":"D500 DSLR Body","tinyDescription":"Nikon D500 DSLR Body","mfgPart":"1559","stock":"In","subStatus":{"name":"In Stock","description":""},"freeShipping":true,"isHasFreeVIPTwoDayDelivery":false,"type":"regular","prices":{"youSave":{"dollar":100,"percent":5},"price":1896.95,"list":1996.95,"isSale":true,"highPrice":1996.95,"discountPrice1":100,"itemPropPrice":1996.95},"images":[{"id":"0","name":"inkd500.jpg"},{"id":"1","name":"inkd500_1.jpg"},{"id":"2","name":"inkd500_2.jpg"},{"id":"3","name":"inkd500_3.jpg"}],"configLevels":"0","configurations":{},"rating":{"stars":"5.0","count":240},"allConfigurationsCount":0,"isBundle":false,"brand":"Nikon","category":"Cameras/Digital SLR Cameras/Digital SLR Cameras","priceType":"Add to Cart","cartLineID":0,"quantity":0,"shipInfoTitle":"Free Expedited Shipping","isNeedRenderStockStatus":true,"isHasFreeTwoDayDelivery":true,"isHasAvalabilityToCreateBundle":true},"INKD750":{"badge":{"text":"Special","link":"deal"},"adoramaBadges":[],"id":"INKD750","link":"https://www.adorama.com/inkd750.html","title":"Nikon D750 DSLR Body","shortTitle":"D750 DSLR Body","tinyDescription":"Nikon D750 DSLR Body","mfgPart":"1543","stock":"In","subStatus":{"name":"In Stock","description":""},"freeShipping":true,"isHasFreeVIPTwoDayDelivery":false,"type":"regular","prices":{"youSave":{"dollar":200,"percent":10},"price":1796.95,"list":1996.95,"isSale":true,"highPrice":1996.95,"discountPrice1":200,"itemPropPrice":1996.95},"images":[{"id":"0","name":"inkd750.jpg"},{"id":"1","name":"inkd750_1.jpg"},{"id":"2","name":"inkd750_2.jpg"},{"id":"3","name":"inkd750_3.jpg"},{"id":"4","name":"inkd750_4.jpg"}],"configLevels":"0","configurations":{},"rating":{"stars":"5.0","count":263},"allConfigurationsCount":0,"isBundle":false,"brand":"Nikon","category":"Cameras/Digital SLR Cameras/Digital SLR Cameras","priceType":"Add to Cart","cartLineID":0,"quantity":0,"shipInfoTitle":"Free Expedited Shipping","isNeedRenderStockStatus":true,"isHasFreeTwoDayDelivery":true,"isHasAvalabilityToCreateBundle":true}}}
  };
  componentWillMount() {
    this.setState(this.getOriginalState());
  }

  



    render() {
      return ( 
        
        <div className="listpage">
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
            
            <ProductListingSegments segments={this.state.list.segments}/>
            
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
              </div>
            </div>
          </div>  
        </div> 
      );
    }

}

export default ListPage;

