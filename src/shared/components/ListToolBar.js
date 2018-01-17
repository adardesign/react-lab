import React, { Component } from 'react';

// stateless Component
function ListToolBar(props) {
  // TODO figure out how u pass props directly 
  const meta = props.meta;
  return (
    <nav className="index-toolbar">
    <span className="index-count">
            <i>Showing</i>
            <span className="index-count-showing">{meta.showing[0]}</span>
  <em>of</em>
  <b><span className="index-count-total">{meta.showing[1]}</span> results</b>
  </span>
  <a data-action="toggleRefine" className="refine-menu-tab button small radius action" href="#">Refine</a>
  <div data-styleswitch="listPageLayoutManager" className="select-list-style">
    <a rel="nofollow" title="list view" data-style="list" data-action="changeListStyle" className="list-style mystyle-list action trackEvent" href="" data-trackdata="listing page, view type, list view"></a>
    <a rel="nofollow" title="grid view" data-style="grid" data-action="changeListStyle" className="list-style mystyle-grid action trackEvent" href="" data-trackdata="listing page, view type, grid view"></a>
  </div>
  <div className="options-container opt-sort-by sort-right">
    <span className="sort-label">&nbsp;</span>
    <div data-action="selectUI" className="options-select action select-ui" id="select-ui-sortby">
      <a rel="nofollow" className="button radius-lg select select-ui-val" href="">
                        <span className="select-ui-val">
                            <span className="select-data">
                                Sort by: <b>{meta.currentSort}</b>
                          </span>
                      </span>
                  </a>
      <section className="select-ui-options">
        <ul>
          <li className="trackEvent cKeys " data-value="Popular Results" data-trackdata="listing page, sort by, Popular Results" data-keys="{1}">
            <a className="select-data trackEvent" rel="nofollow" href="/" data-ajax-load="" data-ajax-type="mainOnly">
              {meta.currentSort}
            </a>
          </li>
        </ul>
      </section>

    </div>
  </div>
</nav>
  )
};

export default ListToolBar;
