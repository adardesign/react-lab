import React, { Component } from 'react';
import FeaturedBrands from "./components/FeaturedBrands"
import CategoryFaqs from "./components/CategoryFaqs"



class Catagory extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getOriginalState() {
    return {
  "page": {
    "url": "/c/cameras",
    "title": "Cameras & Digital Cameras",
    "breadcrumbs": [
      {
        "name": "Adorama",
        "link": "/"
      },
      {
        "name": "Cameras"
      }
    ]
  },
  "currentCatagory": {
    "title": "Cameras & Digital Cameras",
    "description": "For over 40 years, consumers who are serious about photography come to Adorama for our expert staff, selection, great prices and fast shipping. A top 5 electronics retailer by Consumer Reports and Forbes \"Best of the Web\". We're authorized Nikon and Canon dealers.",
    "featuredBrands": [
      {
        "brand": "Canon",
        "moto": "Delighting You Always",
        "image":"https://www.adorama.com/image/lsa/brand/brandicon-canon.png"
      },
      {
        "brand": "Nikon",
        "moto": "Never miss a moment.",
        "image":"https://www.adorama.com/image/lsa/brand/brandicon-nikon.png"
      }
    ],
    "categoryFaqs": [
      {
        "title": "Didn’t find what you were looking for?",
        "questions": [
          {
            "text": "Learn More About DSLRs and find out which DSLR is right for you!",
            "link": ""
          },
          {
            "text": "Find used and open box cameras here",
            "link": ""
          },
          {
            "text": "Find all of your favorite camera brands here",
            "link": ""
          }
        ]
      },
      {
        "title": "Need help choosing a camera? Try our Camera Buyers’ Guides?",
        "questions": [
          {
            "text": "12 Great Digital Cameras for Travel Photography!",
            "link": ""
          },
          {
            "text": "Find used and open box cameras here",
            "link": ""
          },
          {
            "text": "Find all of your favorite camera brands here",
            "link": ""
          }
        ]
      }
    ]
  },
  "subCatagories": [
    {
      "title": "Digital SLR Cameras",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "Mirrorless Cameras",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "Digital Point & Shoot Cameras",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "Camera Accessories",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "HDSLR System",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "Medium Format Cameras",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    },
    {
      "title": "Specialty Cameras",
      "image": "https://www.adorama.com/col/images/cat/68808.jpg",
      "link": "<HREF>",
      "children": [
        {
          "title": "Nikon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Canon Digital SLR Cameras",
          "link": "<HREF>"
        },
        {
          "title": "Sony Digital SLR Cameras",
          "link": "<HREF>"
        }
      ]
    }
  ]
}
  };
  componentWillMount() {
    this.setState(this.getOriginalState());
  }

  componentDidMount() {
    this.setState(this.getOriginalState())
  }



    render() {
      function CatChildren(props) {
        return props.collection.map((childSub,j) => {
            return (<li key={j*4}>
                <a href="" title="">{childSub.title}</a>
              </li>
              )
            }) 
      };

      return ( 
        <div className="Catagory">
          <div className="breadcrumbs">
            {this.state.page.breadcrumbs.map((crumb, i) => {
              return <div key={i} className="crumb">{crumb.name}</div>
            })}
          </div>

          <div className="category-title">
              <h1>{this.state.currentCatagory.title}</h1>
          </div>

          <div className="category-container layout-80-20 layout-reverse clear">
            <div className="col1">
              <div className="filter-description">
                {this.state.currentCatagory.description}
              </div> 

              <section className="category-index">
                {this.state.subCatagories.map((sub, i) => {
                  return (<div key={i*2} className="cat-item">
                            <img src={sub.image}/>
                            <h2>{sub.title}</h2>
                            <ul>
                              <CatChildren collection={sub.children}/>
                            </ul>
                    </div>
                  )
                })}
              </section>
              <CategoryFaqs faqCollection={this.state.currentCatagory.categoryFaqs} />
              </div>
            <div className="col2">
                <div className="category-aside-nav">
                  {this.state.subCatagories.map((sub, i) => {
                  return (<a key={i*2}>{sub.title}</a>
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

export default Catagory;
