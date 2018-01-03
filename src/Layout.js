import React, { Component } from 'react';

let renderCat = function renderCat(props) {
  return (<div> {props.cat} </div>)
}

class Layout extends Component {
   
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount (){
    this.setState({
      catagories: [1,2]
    });
  }

  componentDidMount(){
    this.setState({
      catagories: [1,2,3]
    })
  }


    render() {
      return ( 
        <div className="Layout">
          {this.state.catagories.map(cat => {
            console.log(cat)
            return <div key={cat}>{cat}</div>;  
          })}
        </div> 
      );
    }

}

export default Layout;

