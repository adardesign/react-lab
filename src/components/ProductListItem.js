import React, { Component } from 'react';

import ReviewSnapshot from './ReviewSnapshot';

// stateless Component
function ProductListItem(props) {
  // TODO figure out how u pass props directly 
  return (
<div data-sku="-SKU-" className="item" itemScope="" itemType="http://schema.org/Product">
    <a href="</>"></a>
    <div className="item-tag-price"> </div>
    <div className="item-img">
        <a href="</>">
            <img src="https://www.adorama.com/images/product/ipxkps.jpg" alt="-ALT-"/>                                                        
        </a>
        <aside className="tagging"> <em className="highlight-tag deal">Top Rated Gear</em> </aside>
    </div>
    <div className="item-details">
        <h2 itemProp="name"> <a href="</>">
                Pentax KP 24MP Compact TTL Autofocus DSLR Camera with Built-In Retractable P-TTL Flash, Silver
                
            </a> </h2>
        <div className="reviews-wrap">
            <a itemType="http://schema.org/AggregateRating" itemScope="" itemProp="aggregateRating" className="item-reviews hoverInfo" href="</>">
                <div className="review-stars review-stars-5"> <em itemProp="ratingValue">5.0</em> </div> <span className="review-count">
           		<span itemProp="ratingCount">8</span> <em>reviews</em> </span>
                <ReviewSnapshot/>
            </a>
        </div> <em className="item-tag used " data-tooltip-content="<strong>Used rating: <i>Demo </i></strong> <p>Cameras, Photo Gear &amp; Lenses:<br>Little or no signs of wear.</p><p><a className&quot;popup&quot; title=&quot;How We Rate&quot; data-popup-class&quot;popup500 trackEvent&quot; href=&quot;/API/GetContent?ContentName=UsedPopup&amp;output=desktop&quot; data-track-data=&quot;listing page, item condition&quot;>More about used ratings</a></p>">   
Used - <em>Rating:</em> <i>D </i> </em>
        <p className="item-subtitle"> </p>
        <p className="item-ids"> <i className="product-sku" content="US    863348" >
                    SKU: <span itemProp="sku">US    863348</span>
                </i> </p>
    </div>
    <div className="item-actions">
        <div className="prices" itemProp="offers" itemScope="" itemType="http://schema.org/Offer"> <em className="price-label ">
            Our Price
                </em>
            <meta content="USD" itemProp="priceCurrency"/>
            <strong className="your-price">$849.00</strong>
            <input id="FinalPrice" type="hidden" value="849.00" itemProp="price" content="849.00"/>
            <a className="promo-financing action trackEvent" data-track-data="financing,as low as,listing" data-action="openFinancingPopup" href="">As low as $142.00/mo for 6 months**
</a>
            <link content="http://schema.org/InStock" itemProp="availability"/>

            </div>
        <form lpformnum="1">
        	<input className="itemData hoverInfo" type="hidden" required="" pattern="[1-9][0-9]{0,3}" maxLength="4" size="3" value="1" name="US    863348_qty"/>
        	<button type="button" data-action-timeout="1000" data-action="addToCart" data-trackdata="listing page, add to cart, us    863348" className="button trackEvent add-to-cart action highlight-dark" data-popup-class="" data-orig-val="Add to Cart" rel="" href="">Add to Cart</button>
    	</form>
        <p className="save-actions"> <a href="</>">
            + wishlist
        </a> </p>
    </div>
    <div className="item-info-secondary">
        <div className="buy-section highlights">
            <ul>
                <li><strong>Lens Included</strong>: Without Lens</li>
                <li><strong>Format</strong>: APS-C Camera</li>
                <li><strong>Resolution</strong>: 24MP</li>
                <li><strong>Video Resolution</strong>: HD 1080</li>
                <li><strong>Connectivity</strong>: Wifi</li>
                <li><strong>Frames Per Second</strong>: 8.3 fps continuous shooting</li>
            </ul>
        </div>
        <p className="availability"> <span className="stock-in stock ">
    In Stock
    
    </span> <a className="popup product-shipping product-shipping-pickup" rel="nofollow" data-popup-class="popupShipping" href="</>">
            <span className="store-pickup" data-icon="p">
                Ship to NYC Store, Pickup Tomorrow 11:30AM
            </span>
        </a> </p>
    </div>
</div>
  )
};

export default ProductListItem;
