import React from 'react'

function SimpleCMSWidget(props) {
	function createMarkup() {
  		return {__html: props.content};
	}
  return (
      <div dangerouslySetInnerHTML={createMarkup()}></div>
  )
};

export default SimpleCMSWidget;




