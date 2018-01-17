import React, { Component } from 'react';

function Item(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return (
	<div className="loading">
    	<h1>ITEM</h1>
    </div>
	);
  }
};

export default Item;