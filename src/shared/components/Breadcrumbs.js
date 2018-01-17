import React, { Component } from 'react';

function Breadcrumbs(props) {
  return (
          <div className="breadcrumbs">
            {props.breadcrumbs.map((crumb, i) => {
              return <div key={i} className="crumb">{crumb.name}</div>
            })}
          </div>
  )
};

export default Breadcrumbs;
