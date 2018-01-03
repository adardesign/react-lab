import React, { Component } from 'react';

function CatFaq(props) {
  console.log(props)
    return (
      <ul>              
        { props.questions.map((faq, i) => {
          return (
            <li key={i}><a href="href">{faq.text}</a></li>
          )
        })
      }
      </ul>
  )
}; 


function CategoryFaqs(props) {
  console.log(props)
  const faqs = props.faqCollection;
    console.log(faqs)

  return (
    <aside className="explore-more color-block cf clear">
      { faqs.map((faq, i) => {
        return (<div key={i} className="filter-description">
          <h5>{faq.title}</h5>
          <ul className="linkset">
            <CatFaq questions={faq.questions}/>
          </ul>
        </div>
        )
      })
      }
  </aside>
  )
};

export default CategoryFaqs;