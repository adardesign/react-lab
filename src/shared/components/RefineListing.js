import React, { Component } from 'react';

// stateless Component
function RefineListing(props) {
  // TODO figure out how u pass props directly 
  return (
    <div id="filtersPlaceholder">
  <aside className="widget highlight filter-select">
    <h3 className="widget-header">Refine Your Results <a data-action="toggleRefine" className="action"></a> </h3>
    <div className="widget-content">
      <section className="filter-select-grp">
        <div className="filter-type filter-search shown">
        </div>
      </section>
      <section className="filter-select-grp" data-filter-category-name="Brand"> <a className="filter-type action shown" data-action="bindToggleEle,scrollIntoView" data-target=":next()">
                                Brand
                            </a>
        <div className="filter-options show">
          <ul className="filter-available">
            <li data-count="51" data-sequence="1" data-filterid="4294966337"> <a href="/l/Used/Cameras/Canon~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294966337" data-filter-name="Canon" data-ajax-load="">
            <em>Canon</em>
            
            <span>(51)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="2" data-filterid="4294965009"> <a href="/l/Used/Cameras/Fujifilm~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294965009" data-filter-name="Fujifilm" data-ajax-load="">
            <em>Fujifilm</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="3" data-filterid="4294961209"> <a href="/l/Used/Cameras/Minolta~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294961209" data-filter-name="Minolta" data-ajax-load="">
            <em>Minolta</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="4" data-filterid="4294961213"> <a href="/l/Used/Cameras/Miscellaneous~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294961213" data-filter-name="Miscellaneous" data-ajax-load="">
            <em>Miscellaneous</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="59" data-sequence="5" data-filterid="4294963370"> <a href="/l/Used/Cameras/Nikon~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294963370" data-filter-name="Nikon" data-ajax-load="">
            <em>Nikon</em>
            
            <span>(59)</span>
            
          </a> </li>
            <li data-count="2" data-sequence="6" data-filterid="4294962861"> <a href="/l/Used/Cameras/Olympus~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294962861" data-filter-name="Olympus" data-ajax-load="">
            <em>Olympus</em>
            
            <span>(2)</span>
            
          </a> </li>
            <li data-count="7" data-sequence="7" data-filterid="4294962858"> <a href="/l/Used/Cameras/Pentax~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294962858" data-filter-name="Pentax" data-ajax-load="">
            <em>Pentax</em>
            
            <span>(7)</span>
            
          </a> </li>
            <li data-count="6" data-sequence="8" data-filterid="4294965949"> <a href="/l/Used/Cameras/Sony~Digital-SLR-Cameras" className="trackEvent" data-trackdata="listing page, filters, Brand" data-filterid="4294965949" data-filter-name="Sony" data-ajax-load="">
            <em>Sony</em>
            
            <span>(6)</span>
            
          </a> </li>
          </ul>
        </div>
      </section>
      <section className="filter-select-grp" data-filter-category-name="Model"> <a className="filter-type action shown" data-action="bindToggleEle,scrollIntoView" data-target=":next()">
                                Model
                            </a>
        <div className="filter-options show">
          <ul className="filter-available">
            <li data-count="1" data-sequence="1" data-filterid="4294842230"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T2i-550D" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294842230" data-filter-name="Canon T2i / 550D" data-ajax-load="">
            <em>Canon T2i / 550D</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="2" data-filterid="4294931295"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T3" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294931295" data-filter-name="Canon T3" data-ajax-load="">
            <em>Canon T3</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="3" data-filterid="4294931296"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T3i" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294931296" data-filter-name="Canon T3i" data-ajax-load="">
            <em>Canon T3i</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="2" data-sequence="4" data-filterid="4294929950"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T5i" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294929950" data-filter-name="Canon T5i" data-ajax-load="">
            <em>Canon T5i</em>
            
            <span>(2)</span>
            
          </a> </li>
            <li data-count="2" data-sequence="5" data-filterid="4294843968"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T6i" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294843968" data-filter-name="Canon T6i" data-ajax-load="">
            <em>Canon T6i</em>
            
            <span>(2)</span>
            
          </a> </li>
            <li data-count="2" data-sequence="6" data-filterid="4294843966"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T6s" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294843966" data-filter-name="Canon T6s" data-ajax-load="">
            <em>Canon T6s</em>
            
            <span>(2)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="7" data-filterid="4294842235"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-XSi-450D" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294842235" data-filter-name="Canon XSi / 450D" data-ajax-load="">
            <em>Canon XSi / 450D</em>
            
            <span>(1)</span>
            
          </a> </li>
            <li data-count="1" data-sequence="8" data-filterid="4294843202"> <a href="/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-XTi" className="trackEvent" data-trackdata="listing page, filters, Model" data-filterid="4294843202" data-filter-name="Canon XTi" data-ajax-load="">
            <em>Canon XTi</em>
            
            <span>(1)</span>
            
          </a> </li>
            
            
          </ul>
        </div>
      </section> <span className="rwd-filters-close">
              <a className="button highlight-dark action" data-action="toggleRefine">I'm Done</a>
            </span> </div>
  </aside>
</div>
  )
};

export default RefineListing;
