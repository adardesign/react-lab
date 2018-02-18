import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

class Page extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }
  state = this.appState();
  onStoreChange = () => {
    this.setState(this.appState);
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default Page;
