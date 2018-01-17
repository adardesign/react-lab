import React, { Component } from 'react';

function FeaturedBrands(props) {
  const brands = props.brands
  return (
    <div className="aside-brands">
      <h5>Featured Brands:</h5>
        <div className="color-block">
          {props.brands.map((brandItem) => {
            return (<a key={brandItem.brand} href={brandItem.link} className="brand-tagged trackEvent" data-trackdata="listing page, featured brands, {brandItem.brand}">
              <img alt="brandItem.brand" src={brandItem.image}/>
              <span>
                <strong>{brandItem.brand}</strong>
                <em>{brandItem.moto}</em>
              </span> 
            </a>)
          })}
      </div>
    </div>
  )
};

export default FeaturedBrands;
