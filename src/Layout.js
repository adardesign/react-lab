import React, { Component } from 'react';

class Layout extends Component {
   
  constructor(props) {
    super(props);
    this.state = {catagories:[]};
  }

  componentWillMount (){
    this.setState({
      catagories: [1,2]
    });
  }

  componentDidMount(){
    this.setState({
      catagories: [1,2]
    })
  }


    render() {
      const catagories = this.state.catagories.map(cat => {
        console.log(cat)
        return "<div> {cat} </div>";
      })

      return ( 
        <div className="Layout">
          {catagories}
        </div> 
      );
    }

}

export default Layout;

