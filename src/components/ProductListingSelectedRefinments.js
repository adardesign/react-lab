import React, { Component } from 'react';

// stateless Component
function ProductListingSelectedRefinments(props) {
  // TODO figure out how u pass props directly 
  const selectedRefinements = props.selectedRefinements; 
  return (
		<div className="selected-options">
			<ul>
				<h6>Refined By:</h6>
				<li> 
					<strong>{selectedRefinements[0].name}</strong>
					<a className="filter-selected-icon action-remove trackEvent" data-track-data="listing page,filters,deselect" href="/" data-icon="X" data-filterid="{4294961821}" data-selected-filter="" data-ajax-load="" data-filter-name={props.name || 'no name'} data-ajax-type="refinementsOnly"></a>
				</li>
				<li><a className="trackEvent" data-track-data="listing page,filters,clear all" href="/" data-ajax-load="" data-ajax-type="refinementsOnly">Clear All</a></li> </ul> </div>
  )
};

export default ProductListingSelectedRefinments;
