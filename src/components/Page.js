import React from 'react';
import Header from './Header';
import Users from './Users';

class Page extends React.PureComponent {

  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <Header/>
        <Users/>
      </div>
    );
  }
}

export default Page;
