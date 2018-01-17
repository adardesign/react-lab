import React, { Component } from 'react';

import ProductListItem from './ProductListItem';

// stateless Component
function ProductListing(props) {
  // TODO figure out how u pass props directly 
  // lazy loading logic
  const list = props.listData.skus;
  return (
    <div className="item-index cf" data-lazy-load="">
		<div className="item-list clear style-is-list" id="ADOBrowse-InGrid">
			{ list.map( (sku, i) => {
				console.log(sku)
				return <ProductListItem key={i} item={i}/>
			 })
			}
		</div>
	</div>
  )
};

export default ProductListing;
