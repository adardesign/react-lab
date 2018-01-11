import React, { Component } from 'react';

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return (
	<div className="loading">
    	<h1>loading... {props.type}</h1>
    </div>
	);
  }
};

export default Loading;