import React from 'react';
import storeProvider from './storeProvider';

class Header extends React.PureComponent {
  render() {
    return (
      <header id="header" className="cf">
        <div id="headerInner">
          <div id="headerLevel1">
            <a className="flLeft logoContainer" href="/">
              <img className="logo flLeft trackEvent" src="//www.adorama.com/image/lsa/ui/adorama-logo.svg" alt="Adorama Logo" title="Adorama Camera, Inc - Logo" data-trackdata="Global Navigation,Navigation Level 1,Adorama logo"/>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default storeProvider()(Header);
