import React, { Component } from 'react';

// stateless Component
function ProductListingSegments(props) {
  // TODO figure out how u pass props directly 
  const segments = props.segments; 
  return (
		<nav className="search-type-segments segments-ui clear cf">
            <a href="/" className="list-segment" data-ajax-load="">All</a>
            <a href="/" className="list-segment active" data-ajax-load="">Used</a>
	</nav>
		)
};

export default ProductListingSegments;
