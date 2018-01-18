import React, { Component } from 'react';
import FeaturedBrands from "../components/FeaturedBrands"
import CategoryFaqs from "../components/CategoryFaqs"
import Breadcrumbs from "../components/Breadcrumbs"
import DeviceType from "../utils/DeviceType"
import {Link} from 'react-router-dom'
import "isomorphic-fetch";

  
// Stateless componants
const CatChildren = (props) => (
   props.collection.map((childSub,j) => {
    return (
      <li key={j*4}>
        <a href="/" title="">{childSub.title}</a>
      </li>)
    })
  );


class CategoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deviceType:DeviceType()
    };
  }

  getOriginalState() {
        return fetch("../api/catagorypage.json").then((resp) => resp.json());
    }
  componentWillMount() {
        this.getOriginalState().then((data) => {
         this.setState(data);      
        });
  }
    render() {
        if(!this.state.page){
            return (<div><img src="http://adardesign.com/codelab/react-router/images/catSkeleton.jpg"/></div>)
      }
      return ( 
        <div className="Catagory">
          <Breadcrumbs breadcrumbs={this.state.page.breadcrumbs} />
          <div className="category-title">
              <h1>{this.state.currentCatagory.title}</h1>
              {this.state.deviceType === "desktop" && 
                <img className="cat-hero" src={this.state.currentCatagory.image}/>}
          </div>

          <div className="category-container layout-80-20 layout-reverse clear">
            <div className="col1">
              <div className="filter-description">
                {this.state.currentCatagory.description}
              </div> 

              <section className="category-index">
                {this.state.subCatagories.map((sub, i) => {
                  return (<div key={i*2} className="cat-item">
                            <Link to={"/l/"+i}>
                              <img src={sub.image}/>
                              <h2>{sub.title}</h2>
                            </Link>
                            <ul>
                              <CatChildren collection={sub.children}/>
                            </ul>
                    </div>
                  )
                })}
              </section>
              {this.state.deviceType === "desktop" && <CategoryFaqs faqCollection={this.state.currentCatagory.categoryFaqs} />}
              </div>
            <div className="col2">
                <div className="category-aside-nav">
                  {this.state.subCatagories.map((sub, i) => {
                  return (<Link to={"/l/"+i} key={i*2}>{sub.title}</Link>
                  )
                })}

                </div>
                  <FeaturedBrands brands={this.state.currentCatagory.featuredBrands} />
                
            </div>

          </div>

        </div> 
      );
    }

}

export default CategoryPage;

